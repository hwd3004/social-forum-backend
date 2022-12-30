export default {
  Query: {
    author: async (parent, args, contextValue, info) => {
      console.log(contextValue);
      return {
        id: 1,
        name: "test author",
      };
    },
  },
};
