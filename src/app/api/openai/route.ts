import { sendPrompt } from "@/utils/openai"

export async function GET() {
    return new Response('OK OpenAI', {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

export async function POST(req: Request) {
    let formData
    try {
        formData = await req.json()
    } catch (e) {
        console.error('No JSON body in the request. \n', e);
        return Response.json({ error: 'No JSON body in the request' }, { status: 400 })
    }

    const text = formData.text

    if (!text) {
        return Response.json({ error: 'Propmt is required' }, { status: 400 })
    }

    const res = await sendPrompt(text as string)

    return Response.json(res, { status: 200 })
}