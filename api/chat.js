const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports = async (req, res) => {
    try {
        const body = req.body;
        const response = await openai
            .createChatCompletion({
                model: 'gpt-3.5-turbo',
                messages: body,
            })
            .catch((error) => {
                console.log(`OPENAI ERR: ${error}`);
            });
        res.json(response);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
}