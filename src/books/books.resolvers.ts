export default {
  Query: {
    book: async (parent, args, { models }) => {
      return {
        id: 1,
        title: "test title",
        author: "test author",
      };
    },
  },
};
