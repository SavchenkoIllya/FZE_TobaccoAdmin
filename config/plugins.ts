export default ({ env }) => ({
    "gen-types": {
        enabled: true,
        config: {
            outputLocation: "myTypes.ts",
            singleFile: true,
        },
    },
    email: {
        config: {
            provider: 'strapi-provider-email-resend',
            providerOptions: {
                apiKey: env('RESEND_API_KEY'),
            },
            settings: {
                defaultFrom: 'info@vktobacco.com',
                defaultReplyTo: 'info@vktobacco.com',
            },
        }
    },
});