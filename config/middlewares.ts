export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'http://localhost:3000',
        'https://finest-tobacco.com',
        'https://www.finest-tobacco.com'
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      headers: [
        'Content-Type',
        'Authorization',
        'X-Frame-Options',
        'X-Requested-With'
      ],
      credentials: true,
      maxAge: 86400
    }
  }
];
