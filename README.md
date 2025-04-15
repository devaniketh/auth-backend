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
│   ├── auth.middleware.ts
│   └── validate.ts
├── utils/
│   ├── jwt.ts
│   └── hash.ts
├── schema/
│   └── auth.schema.ts (Zod)
├── prisma/
│   └── client.ts
├── config/
│   └── env.ts
└── types/
