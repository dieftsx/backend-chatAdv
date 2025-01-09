import { Configuration, OpenAIApi } from "openai";
import Law from "../models/Law";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY || "",
});
const openai = new OpenAIApi(configuration);

export async function processMessage(message: string): Promise<string> {
  // Use GPT-3 para processar a mensagem
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
    max_tokens: 150,
  });

  return response.data.choices[0].text.trim();
}
