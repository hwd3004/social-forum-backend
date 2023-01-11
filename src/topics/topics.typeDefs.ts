const typeDefs = `#graphql
    type Topic {
        id: ID!
        name: String!
        image: String
        description: String!
        createdAt: String!
        published: Boolean!
    }

    type Query {
        topics: [Topic!]!
        topic(id: Int!): Topic!
    }
`;

export default typeDefs;
