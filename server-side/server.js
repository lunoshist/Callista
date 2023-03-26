const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const apiKey = process.env.API_KEY;

app.use(express.json());

app.post('/api/chat', async (req, res) => {
  try {
    const body = req.body;
    const response = await axios.post("https://api.openai.com/v1/chat/completions", {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
        },
        body: body
    });
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
