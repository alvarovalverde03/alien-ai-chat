import { ChatOpenAI } from "@langchain/openai";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const chatModel = new ChatOpenAI({
    openAIApiKey: OPENAI_API_KEY,
});

interface PromptResponse {
    text: string;
}

export async function sendPrompt(message: string): Promise<PromptResponse> {
    if (!chatModel) {
        throw new Error("Chat model not initialized");
    }
    if (!message) {
        throw new Error("Prompt is required");
    }
    
    const data = await chatModel.invoke(message)
    const res = {
        text: data.lc_kwargs.content as string
    }

    return res;
}