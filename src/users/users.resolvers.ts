import prisma from "../prisma";
import User from "./users.interface";

export default {
  Query: {
    allUsers: async () => {
      return await prisma.user.findMany();
    },
  },
  Mutation: {
    createUser: async (_parent, args: User, _contextValue, _info) => {
      const { userId, password } = args;

      await prisma.user.create({
        data: {
          userId,
          password,
        },
      });

      return true;
    },
  },
};
