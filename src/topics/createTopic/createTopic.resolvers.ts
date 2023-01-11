import prisma from "@src/prisma";
import MutationResponse from "@src/MutationResponse/MutationResponse.interface";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import Topic from "@src/topics/topics.interface";
import jwt from "jsonwebtoken";

export default {
  Mutation: {
    createTopic: async (_parent, args: Topic, { token }, _info): Promise<MutationResponse> => {
      try {
        const data = jwt.verify(token, process.env.JWT_SECRET as string);

        const { name, description } = args;

        await prisma.topic.create({
          data: {
            name,
            description,
          },
        });

        return {
          success: true,
          message: "Topic created successfully",
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
