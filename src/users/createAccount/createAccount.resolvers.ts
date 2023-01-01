import prisma from "@src/prisma";
import User from "@src/users/users.interface";
import bcrypt from "bcrypt";
import MutationResponse from "@src/MutationResponse/MutationResponse.interface";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

export default {
  Mutation: {
    createAccount: async (_parent, args: User, _contextValue, _info): Promise<MutationResponse> => {
      try {
        const { username, password, email } = args;

        await prisma.user.create({
          data: {
            username,
            password: await bcrypt.hash(password, 10),
            email,
          },
        });

        return {
          success: true,
          message: "User created successfully",
        };
      } catch (error) {
        console.log(error);

        // https://www.prisma.io/docs/reference/api-reference/error-reference
        // https://www.prisma.io/docs/concepts/components/prisma-client/handling-exceptions-and-errors
        if (error instanceof PrismaClientKnownRequestError) {
          const { code } = error;
          const meta = error.meta as any;

          const responseObj = {
            username: "Username already exists",
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
