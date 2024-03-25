import { llm, embbedings } from '@/utils/openai'
import { DirectoryLoader } from 'langchain/document_loaders/fs/directory'
import { PDFLoader } from 'langchain/document_loaders/fs/pdf'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import { Document } from 'langchain/document'
import { ConversationalRetrievalQAChain } from 'langchain/chains'
import { DocumentType } from '@/types/constants'
import path from 'path'
import { Chroma } from '@langchain/community/vectorstores/chroma'

const CHROMA_DB_HOST = process.env.CHROMA_DB_HOST

export interface PromptResponse {
    text: string;
    documents?: DocumentType[];
    error?: boolean;
}

export async function sendPrompt(message: string): Promise<PromptResponse> {
    if (!message) {
        throw new Error("Prompt is required")
    }

    try {
        // 1. Load directory docs
        const directoryPath = path.join(process.cwd(), 'public', 'archive')
        const docs = await loadDirectory(directoryPath)
        if (!docs) {
            throw new Error("Failed to load directory")
        }

        // 2. Split text into chunks
        const chunks = await splitDocuments(docs)
        if (!chunks) {
            throw new Error("Failed to split documents")
        }

        // 3. Create the vectorstore
        const collection = await Chroma.fromDocuments(
            chunks,
            embbedings,
            {
                url: CHROMA_DB_HOST,
                collectionName: 'archive',

            }
        )
        if (!collection) {
            throw new Error("Failed to create vectorstore")
        }

        // 4. Search for related documents
        const embbededMessage = await embbedings.embedQuery(message)
        const relevantDocs = await collection.similaritySearchVectorWithScore(embbededMessage, 3)

        // 5. Create the chain
        const retriever = collection.asRetriever(2)
        const chain = ConversationalRetrievalQAChain.fromLLM(
            llm,
            retriever,
        )
        if (!chain) {
            throw new Error("Failed to create chain")
        }

        // 6. Get response from chain
        chain.returnSourceDocuments = true
        const data = await chain.invoke({
            question: message,
            input_documents: relevantDocs,
            chat_history: [],
        })
        if (!data) {
            throw new Error("Failed to get response from chain")
        }
        
        const res = {
            text: data.text,
            documents: data.sourceDocuments.map((doc: any) => {
                return {
                    url: doc.metadata.source.split('/public')[1],
                    title: doc.metadata.source.split('/archive')[1].split('.pdf')[0].replace('/', '').replace(/-/g, ' '),
                    type: DocumentType.PDF,
                    id: doc.metadata.source.split('/public')[1]
                }
            }),
        }

        return res
    } catch (e: any) {
        console.log(e)
        return { text: e.message, error: true }
    }
}

async function loadDirectory(directoryPath: string) {
    try {
        const loader = new DirectoryLoader(directoryPath, {
            '.pdf': (filePath: string) => new PDFLoader(filePath)
        })

        return await loader.load()
    } catch (e) {
        console.log(e)
        return
    }
}

async function splitDocuments(
    docs: Document<Record<string, any>>[],
    chunkSize: number = 500,
    chunkOverlap: number = 100
) {
    try {
        const splitter = new RecursiveCharacterTextSplitter({
            chunkSize: chunkSize,
            chunkOverlap: chunkOverlap,
        })

        return await splitter.splitDocuments(docs)
    } catch (e) {
        console.log(e)
        return
    }
}