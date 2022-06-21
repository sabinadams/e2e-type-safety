import { createServer } from "@graphql-yoga/node";
import { schema } from "./schema";
import { prisma } from "./db";

const server = createServer({
  schema,
  context: {
    prisma,
  },
});

server.start().then(() => {
  console.log(`🚀 GraphQL Server ready at http://localhost:4000!`);
});
