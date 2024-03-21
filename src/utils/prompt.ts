import { llmOpenAI, embbederOpenAI } from '@/utils/openai'
import { DirectoryLoader } from 'langchain/document_loaders/fs/directory'
import { PDFLoader } from 'langchain/document_loaders/fs/pdf'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import { Document } from 'langchain/document'
import { Chroma } from '@langchain/community/vectorstores/chroma'
import { ConversationalRetrievalQAChain } from 'langchain/chains'
import { DocumentType } from '@/types/constants'

interface PromptResponse {
    text: string;
    documents?: DocumentType[];
}

export async function sendPrompt(message: string): Promise<PromptResponse> {
    if (!message) {
        throw new Error("Prompt is required")
    }

    // 1. Load directory docs
    const docs = await loadDirectory('public/archive')

    // 2. Split text into chunks
    const chunks = await splitDocuments(docs)

    // 3. Create the vectorstore
    const vectorStore = await Chroma.fromDocuments(chunks, embbederOpenAI, {
        collectionName: "test",
    })

    // 4. Create the chain
    const chain = ConversationalRetrievalQAChain.fromLLM(
        llmOpenAI,
        vectorStore.asRetriever(),
    )

    // 5. Ask it a question
    chain.returnSourceDocuments = true
    const data = await chain.call({ question: message, chat_history: [] })
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
}

async function loadDirectory(directoryPath: string) {
    const loader = new DirectoryLoader(directoryPath, {
        '.pdf': (path:string) => new PDFLoader(path)
    })

    return await loader.load()
}

async function splitDocuments(
    docs: Document<Record<string, any>>[],
    chunkSize: number = 250,
    chunkOverlap: number = 50
) {
    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: chunkSize,
        chunkOverlap: chunkOverlap,
    })

    return await splitter.splitDocuments(docs)
}