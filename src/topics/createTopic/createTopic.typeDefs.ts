const typeDefs = `#graphql
    type Mutation {
        createTopic(name: String!, description: String!):  MutationResponse!
    }
`;

export default typeDefs;
