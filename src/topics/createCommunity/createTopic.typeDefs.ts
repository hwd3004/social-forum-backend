const typeDefs = `#graphql
    type Query {
        topics: [Topic!]!
        topic(id: Int!): Topic!
    }

    type Mutation {
        createTopic(name: String!, description: Strings!):  MutationResponse!
    }
`;

export default typeDefs;
