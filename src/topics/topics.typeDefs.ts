const typeDefs = `#graphql
    type Topic {
        id: ID!
        name: String!
        image: String
        description: String!
        createdAt: String!
        published: Boolean!
    }
`;

export default typeDefs;
