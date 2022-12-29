const typeDefs = `#graphql
    type Author {
        id: ID!
        name: String!
    }

    type Query {
        author: Author
    }

`;

export default typeDefs;
