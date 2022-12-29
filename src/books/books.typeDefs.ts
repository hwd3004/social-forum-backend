const typeDefs = `#graphql
    type Book {
        id: ID!
        title: String!
        author: String!
    }

    type Query {
        book: Book
    }

`;

export default typeDefs;
