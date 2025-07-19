import type { Core } from '@strapi/strapi';
import { Message } from "../myTypes";
import template from "./email-templates";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }: { strapi: Core.Strapi }) {
    strapi.db.lifecycles.subscribe({
      models: ['api::message.message'],

      async afterCreate(event) {
        const { result } = event;
        const subscribers = await strapi.entityService.findMany('api::subscriber.subscriber');
        let message = result as Message


        if(subscribers?.length > 0) {
          await Promise.all(
              subscribers.map((subscriber) =>
                  strapi.plugins['email'].services.email.send({
                    to: subscriber.email,
                    subject: 'New message arrived',
                    text: "",
                    html: template({ name: message.name,
                                     email: message.email,
                                     phone: message.phone,
                                     details: message.details }),
                  })
              )
          ).catch(console.error);
        }
      },
    })
  },
};
