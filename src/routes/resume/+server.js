import path from 'path';
import fs from 'fs';
import { error } from '@sveltejs/kit';

export async function GET() {
    const filepath = path.resolve("static/files/resume.pdf")
    if (!fs.existsSync(filepath)) {
        throw error(404, 'File not found');
    }

    return new Response(fs.createReadStream(filepath), {
        headers: {
            'Content-Type': 'application/octet-stream',
            'Content-Disposition': `attachment; filename="Martin, Jezreel Joshua V. Resume.pdf"`,
        },
    });
}
