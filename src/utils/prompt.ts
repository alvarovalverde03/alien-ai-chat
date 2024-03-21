import { chatModel } from '@/utils/openai'

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

    await new Promise(resolve => setTimeout(resolve, 2000))

    return res;
}
