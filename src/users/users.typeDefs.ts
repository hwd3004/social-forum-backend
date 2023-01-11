const typeDefs = `#graphql
    type User {
        id: ID!
        username: String!
        password: String!
        email: String!
        image: String
        createdAt: String!
        role: String!
    }

    type Query {
        allUsers: [User!]!
    }
`;

export default typeDefs;
