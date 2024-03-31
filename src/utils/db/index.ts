import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

const POSTGRES_URL = process.env.POSTGRES_URL
if (!POSTGRES_URL) {
    throw new Error('POSTGRES_URL environment variable is not defined.')
}

const queryClient = postgres(POSTGRES_URL)

export const db = drizzle(queryClient, { schema })