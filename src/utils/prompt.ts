import { llmOpenAI, embbederOpenAI } from '@/utils/openai'
import { DirectoryLoader } from 'langchain/document_loaders/fs/directory'
import { PDFLoader } from 'langchain/document_loaders/fs/pdf'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import { Document } from 'langchain/document'
import { Chroma } from '@langchain/community/vectorstores/chroma'
import { ConversationalRetrievalQAChain } from 'langchain/chains'
import { DocumentType } from '@/types/constants'
import path from 'path'

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
        const docs = await loadDirectory('public/archive')
        if (!docs) {
            throw new Error("Failed to load directory")
        }

        // 2. Split text into chunks
        const chunks = await splitDocuments(docs)
        if (!chunks) {
            throw new Error("Failed to split documents")
        }

        // 3. Create the vectorstore
        const vectorStore = await Chroma.fromDocuments(chunks, embbederOpenAI, {
            collectionName: "test",
        })
        if (!vectorStore) {
            throw new Error("Failed to create vectorstore")
        }

        // 4. Create the chain
        const chain = ConversationalRetrievalQAChain.fromLLM(
            llmOpenAI,
            vectorStore.asRetriever(),
        )
        if (!chain) {
            throw new Error("Failed to create chain")
        }

        // 5. Ask it a question
        chain.returnSourceDocuments = true
        const data = await chain.call({ question: message, chat_history: [] })
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
        const dir = path.join(process.cwd(), directoryPath)
        const loader = new DirectoryLoader(dir, {
            '.pdf': (filePath:string) => new PDFLoader(filePath)
        })

        return await loader.load()
    } catch (e) {
        console.log(e)
        return
    }
}

async function splitDocuments(
    docs: Document<Record<string, any>>[],
    chunkSize: number = 250,
    chunkOverlap: number = 50
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