i used tsc-watch in my typescript and express project.

but i cannot use absolute path.

so i changed tsc-watch to ts-node

```shell
npm i @types/node tsconfig-paths

npm i -g ts-node
```

---

### before

```json
  "scripts": {
    "start": "tsc-watch --onSuccess \"nodemon ./dist/index.js\"",
  },
```

### after

```json
  "scripts": {
    "dev": "nodemon --exec ts-node -r tsconfig-paths/register ./src/index.ts",
    "build": "tsc -p tsconfig.json",
    "start": "ts-node -r tsconfig-paths/register dist/index.js",
  },
```

---

### before

```ts
const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`);

const loadedResolvers = loadFilesSync(`${__dirname}/**/*.resolvers.js`);
```

### after

```ts
const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.*`);

const loadedResolvers = loadFilesSync(`${__dirname}/**/*.resolvers.*`);
```

---

### References

https://medium.com/geekculture/avoid-relative-path-hell-in-typescript-backend-41417b0086b7

https://medium.com/@jsh901220/typescript-node-absolute-path-5782b584e368
