export async function GET() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    
    });

    const data = await res.json();
   
    return Response.json({ data });
}