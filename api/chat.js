import fetch from 'node-fetch';
const apiKey = process.env.API_KEY;

export default async (req, res) => {
        const body = req.body;
        return fetch("https://api.openai.com/v1/chat/completions", {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${apiKey}`,
                    },
                    body: body
                })
                .catch((error) => ({ statusCode: 422, body: { message: 'Internal server error :)' + error }}))
}