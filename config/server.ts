export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  settings: {
    parser: {
      maxUrlLength: 8192,
      maxParameterLength: 1000,
      maxDepth: 32,
    },
    koa: {
      maxHeadersCount: 2000,
      maxQueryLength: 8192,
    },
  },
});
