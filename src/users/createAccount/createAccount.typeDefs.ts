const typeDefs = `#graphql
    type Mutation {
        createAccount(userId: String!, password: String!, email: String!): MutationResponse!
    }
`;

export default typeDefs;
