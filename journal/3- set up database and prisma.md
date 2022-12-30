```shell
docker run -p 5432:5432 --name postgres-container -e POSTGRES_PASSWORD=1234 -d postgres

npx prisma init

docker exec -it postgres-container bash

psql -U postgres

SELECT * FROM PG_USER;

CREATE USER test PASSWORD 'test' SUPERUSER;

CREATE DATABASE testDB OWNER test;

\list
```

---

set .env

```
DATABASE_URL="postgresql://test:test@localhost:5432/testDB?schema=public"
```

---

Add the prisma data model to prisma schema in prisma/schema.prisma

```prisma
model User {
  id        Int      @id @default(autoincrement())
  userId    String   @unique
  password  String
  createdAt DateTime @default(now())
  Post      Post[]
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String   @db.VarChar(255)
  content   String?
  published Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  author    User     @relation(fields: [userId], references: [id])
  userId    Int
}
```

```shell
npx prisma migrate dev
```

```shell
npm install @prisma/client
```