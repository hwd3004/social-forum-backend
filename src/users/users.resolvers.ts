import prisma from "../prisma";
import User from "./users.interface";
import bcrypt from "bcrypt";
import MutationResponse from "../MutationResponse/MutationResponse.interface";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

export default {
  Query: {
    allUsers: async () => {
      return await prisma.user.findMany();
    },
  },
  Mutation: {
    createUser: async (_parent, args: User, _contextValue, _info): Promise<MutationResponse> => {
      try {
        const { userId, password } = args;

        await prisma.user.create({
          data: {
            userId,
            password: await bcrypt.hash(password, 10),
          },
        });

        return {
          success: true,
          message: "User created successfully",
        };
      } catch (error) {
        // https://www.prisma.io/docs/reference/api-reference/error-reference
        // https://www.prisma.io/docs/concepts/components/prisma-client/handling-exceptions-and-errors
        if (error instanceof PrismaClientKnownRequestError) {
          console.log(error);

          const { code } = error;
          const meta = error.meta as any;

          const responseObj = {
            userId: "Id already exists",
            email: "Email already exists",
          };

          if (code === "P2002") {
            if (meta.target[0]) {
              return {
                success: false,
                message: responseObj[meta.target[0]],
              };
            }
          }
        }

        return {
          success: false,
          message: "An error occurred",
        };
      }
    },
  },
};
