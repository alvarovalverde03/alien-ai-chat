import { ChromaClient } from 'chromadb'

const CHROMA_DB_HOST = process.env.CHROMA_DB_HOST
const CHROMA_DB_USERNAME = process.env.CHROMA_DB_USERNAME
const CHROMA_DB_PASSWORD = process.env.CHROMA_DB_PASSWORD

export const chromaClient = new ChromaClient({
    path: CHROMA_DB_HOST,
    auth: {
        provider: 'basic',
        credentials: {
            username: CHROMA_DB_USERNAME,
            password: CHROMA_DB_PASSWORD
        }
    }
})