const { Configuration, OpenAIApi } = require("openai");
const Law = require("../models/Law");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function processMessage(message) {
  // Use GPT-3 para processar a mensagem
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
    max_tokens: 150,
  });

  return response.data.choices[0].text.trim();
}

module.exports = { processMessage };
