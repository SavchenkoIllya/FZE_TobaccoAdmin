export default {
  rest: {
    defaultLimit: 100,
    maxLimit: 250,
    withCount: true,
    parser: {
      parameterLimit: 10000,
      arrayLimit: 100,
      depth: 20,
    },
  },
};
