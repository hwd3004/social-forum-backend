```shell
npm i dotenv express apollo-server-express compression cors morgan graphql graphql-upload bcrypt prisma
```

apollo-server-express will be deprecate.

```shell
npm uninstall apollo-server-express

npm i @apollo/server @types/cors body-parseer

npm i @types/compression @types/morgan @graphql-tools/schema @graphql-tools/load-files @graphql-tools/merge
```

Some parts have changed.

I am adapting to the current version.

Fortunately, merging typeDefs and merging resolvers still work like the old version.

I could find document for authorization at https://www.apollographql.com/docs/apollo-server/security/authentication