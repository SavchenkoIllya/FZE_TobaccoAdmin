export default {
  rest: {
    defaultLimit: 100,
    maxLimit: 250,
    withCount: true,
    query: {
      parser: {
        depth: 10,
        allowDots: true,
      },
    },
  },
};
