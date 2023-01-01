import dotenv from "dotenv";
import path from "path";

if (process.env.NODE_ENV === "development") {
  dotenv.config({ path: path.join(__dirname, "../.env.development.local") });
} else if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: path.join(__dirname, "../.env.production.local") });
} else {
  throw new Error("MISSING ENV.");
}

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import compression from "compression";
import morgan from "morgan";
import schema from "@src/schema";

const startServer = async () => {
  const app = express();

  app.use(compression(), morgan("dev"), cors(), bodyParser.json());

  const httpServer = http.createServer(app);

  // Set up Apollo Server
  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use(
    "/api/graphql",
    expressMiddleware(server, {
      context: async (contextValue) => {
        const {
          req: { headers },
        } = contextValue;

        return {
          token: headers.token,
        };
      },
    })
  );

  httpServer.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000/api/graphql`);
  });
};

startServer();
