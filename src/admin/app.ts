import type { StrapiApp } from '@strapi/strapi/admin';
import { Star } from "@strapi/icons"

export default {
  register(app: StrapiApp) {
    // Register the plugin itself
    app.registerPlugin({
      id: `238794892374.widget.title`,
      name: 'My Plugin',
    });

    // Register a widget for the Homepage
    app.widgets.register({
      icon: Star,
      title: {
        id: `238794892374.widget.title`,
        defaultMessage: 'My Widget',
      },
      component: async () => {
        const component = await import('./MyWidget');
        return component.default;
      },
      /**
       * Use this instead if you used a named export for your component
       */
      // component: async () => {
      //   const { Component } = await import('./components/MyWidget');
      //   return Component;
      // },
      id: 'my-custom-widget',
      pluginId: `238794892374.widget.title`,
    });
  },
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap(app: StrapiApp) {
  },
};
