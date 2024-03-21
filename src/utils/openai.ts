import { OpenAI, OpenAIEmbeddings } from '@langchain/openai'

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export const llmOpenAI = new OpenAI({
    openAIApiKey: OPENAI_API_KEY,
})

export const embbederOpenAI = new OpenAIEmbeddings({
    openAIApiKey: OPENAI_API_KEY,
})
