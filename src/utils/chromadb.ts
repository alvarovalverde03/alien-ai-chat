import { ChromaClient } from 'chromadb'

const CHROMA_DB_HOST = process.env.CHROMA_DB_HOST

export const chromaClient = new ChromaClient({
    path: CHROMA_DB_HOST,
})