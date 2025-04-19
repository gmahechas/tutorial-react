import { PrismaClient } from "@/generated/prisma";

const db = new PrismaClient();

db.snippet.create({
    data: {
        title: "Test",
        code: "console.log('Hello, world!');",
    },
});

export default db;
