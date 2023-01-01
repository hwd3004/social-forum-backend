const typeDefs = `#graphql
    type Mutation {
        createAccount(username: String!, password: String!, email: String!): MutationResponse!
    }
`;

export default typeDefs;
