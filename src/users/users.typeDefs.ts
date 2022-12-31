const typeDefs = `#graphql
    type User {
        id: ID!
        userId: String!
        password: String!
    }

    type Query {
        allUsers: [User]!
    }

    type Mutation {
        createUser(userId: String!, password: String!): MutationResponse!
    }
`;

export default typeDefs;
