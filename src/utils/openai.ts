import { ChatOpenAI, OpenAIEmbeddings } from '@langchain/openai'

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export const llm = new ChatOpenAI({
    openAIApiKey: OPENAI_API_KEY,
    modelName: 'gpt-3.5-turbo',
    temperature: 0.8,
})

export const embbedings = new OpenAIEmbeddings({
    openAIApiKey: OPENAI_API_KEY,
})
