import prisma from "@src/prisma";

export default {
  Query: {
    topics: async () => {
      const topics = await prisma.topic.findMany();

      return topics;
    },
  },
};
