import { ApolloServer, BaseContext } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import compression from "compression";
import morgan from "morgan";
import schema from "./schema";

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
    console.log(`🚀 Server ready at http://localhost:4000`);
  });
};

startServer();
