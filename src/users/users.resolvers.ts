import prisma from "@src/prisma";

export default {
  Query: {
    allUsers: async () => {
      return await prisma.user.findMany();
    },
  },
};
