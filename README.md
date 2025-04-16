# 🔐 Auth Backend API

A fully functional backend-only authentication system built with:

-  **Express.js**
-  **Prisma + PostgreSQL**
-  **Zod** for schema validation
-  **JWT** based auth (access + refresh tokens)
-  **Rate limiting**
-  **Bcrypt** password hashing

---

##  Tech Stack

- Node.js + Express
- TypeScript
- Prisma ORM
- PostgreSQL
- Zod
- JWT
- Bcrypt
- express-rate-limit
- ts-node-dev

---



###  Auth Routes

| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| POST   | `/register`      | Register a new user      |
| POST   | `/login`         | Login and get tokens     |

---




## Folder Structure

```text
src/
├── app.ts (or server.ts)
├── routes/
│   └── auth.route.ts
├── controllers/
│   └── auth.controller.ts
├── services/
│   └── auth.service.ts
├── middleware/
│   ├── rateLimiter.ts
│   └── validate.ts
├── utils/
│   ├── jwt.ts
│   └── hash.ts
├── schema/
│   └── auth.schema.ts 
├── prisma/
│   └── client.ts
├── config/
│   └── env.ts
└── types/
│
└── server.ts
