import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY,
)

export default async function handler(req, res) {
    // Upload image to Supabase
    if (req.method === 'POST') {
        // TODO
    }
    //HTTP method not supported
    else {
        res.setHeader('Allow', ['POST'])
        res.
            status(405)
            .json({ message: `HTTP method ${req.method} is not supported.` });
    }    
}

let { image } = req.body;

if (!image) {
    return res.status(500).json({ message: 'Image data not valid' })
}

const contentType = image.match(/data:(.*);base64/)?.[1];
const base64FileData = image.split('base64')?.[1];

if (!contentType || !base64FileData) {
    return res.status(500).json({ message: 'Image data not valid' });
  }