const apiKey = process.env.API_KEY;

module.exports = async (req, res) => {
    const body = JSON.stringify(req.body);
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${apiKey}`,
                    },
                    body: body
                })
                .catch((error) => ({ statusCode: 422, body: { message: 'Internal server error :)' + error }}))
    const data = await response.json();
    return res.send(data);
  };