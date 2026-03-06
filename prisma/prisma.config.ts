import { defineConfig, env } from 'prisma/config';

export default defineConfig({
    // schema: "./prisma/schema.prisma",
    migrations: {
        // path: "./prisma/migrations",
        // Point to the seed file relative to the project root
        seed: "npx tsx ./prisma/seed.ts",
    },
    datasource: {
        // Attempt to get the URL from the prisma helper,
        // and fallback to standard Node process.env
        url: env("DATABASE_URL") || process.env.DATABASE_URL,
    },
});