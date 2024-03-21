import { sendPrompt } from '@/utils/prompt'

export async function GET() {
    return new Response('OK OpenAI', {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

export async function POST(req: Request) {
    try {
        let formData
        try {
            formData = await req.json()
        } catch (e) {
            throw new Error('Invalid JSON body')
        }
        
        const text = formData.text;
        if (!text) {
            throw new Error('Prompt is required')
        }

        const res = await sendPrompt(text as string)
        if (res.error) {
            throw new Error(res.text)
        }

        return Response.json(res, { status: 200 })
    } catch (e: any) {
        console.error('Error processing request. \n', e);
        return Response.json({ text: e.message, error: true }, { status: 400 });
    }
}