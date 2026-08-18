import { NextResponse } from 'next/server';
import figlet from 'figlet';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const text = searchParams.get('text');
    const font = searchParams.get('font') || 'Standard';

    if (!text) {
        return NextResponse.json({ error: 'Text parameter is required' }, { status: 400 });
    }

    try {
        const ascii = await new Promise<string>((resolve, reject) => {
            figlet.text(text, { font: font as any }, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data || '');
                }
            });
        });

        return NextResponse.json({ ascii });
    } catch (error) {
        console.error('Figlet error:', error);
        return NextResponse.json({ error: 'Failed to generate ASCII text' }, { status: 500 });
    }
}