import prisma from "@src/prisma";

export default {
  Query: {
    allUsers: async () => {
      const users = await prisma.user.findMany();
      console.trace(users);

      return users;
    },
  },
};
