import prisma from "@src/prisma";
import MutationResponse from "@src/MutationResponse/MutationResponse.interface";
import User from "@src/users/users.interface";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default {
  Query: {
    login: async (_parent, args: User, _context, _info): Promise<MutationResponse> => {
      const { username, password } = args;

      const user = await prisma.user.findUnique({
        where: {
          username,
        },
      });

      if (!user) {
        return {
          success: false,
          message: "No user found",
        };
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return {
          success: false,
          message: "Invalid password",
        };
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string);

      return {
        success: true,
        message: "Logged In Successful",
        token,
      };
    },
  },
};
