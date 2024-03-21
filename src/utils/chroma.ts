import { ChromaClient as ChromaClientT } from 'chromadb'
import { Chroma } from '@langchain/community/vectorstores/chroma'
import { embbederOpenAI } from './openai'
import { Document } from 'langchain/document'

const CHROMA_DB_HOST = process.env.CHROMA_DB_HOST
const CHROMA_DB_USERNAME = process.env.CHROMA_DB_USERNAME
const CHROMA_DB_PASSWORD = process.env.CHROMA_DB_PASSWORD

export const chromaClient = new ChromaClientT({
    path: CHROMA_DB_HOST,
    auth: {
        provider: 'basic',
        credentials: {
            username: CHROMA_DB_USERNAME,
            password: CHROMA_DB_PASSWORD
        }
    }
})

export async function getChromaVectorStore(chunks: Document<Record<string, any>>[], collectionName: string) {
    return await Chroma.fromDocuments(
        chunks,
        embbederOpenAI,
        {
            collectionName,
            url: CHROMA_DB_HOST
        },
    )
}
