export default {
  Query: {
    author: async (parent, args, { models }) => {
      return {
        id: 1,
        name: "test author",
      };
    },
  },
};
