const apiKey = process.env.API_KEY;

export default (req, res) => {
    const body = req.body;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
        },
        body: body
    });
    res.json(response);
}