import { type Config } from 'drizzle-kit'

if (!process.env.POSTGRES_URL) {
    throw new Error('POSTGRES_URL environment variable is not defined.')
}

export default {
    schema: './src/utils/db/schema.ts',
    out: './src/utils/db/migrations',
    driver: 'pg',
    dbCredentials: {
        connectionString: process.env.POSTGRES_URL
    }
} satisfies Config;