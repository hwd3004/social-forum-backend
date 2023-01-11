import prisma from "@src/prisma";
import MutationResponse from "@src/MutationResponse/MutationResponse.interface";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

export default {
  Mutation: {
    createTopic: async (_parent, args, _contextValue, _info): Promise<MutationResponse> => {
      try {
        return {
          success: true,
          message: "Channel created successfully",
        };
      } catch (error) {
        console.trace(error);

        return {
          success: false,
          message: "An error occurred",
        };
      }
    },
  },
};
