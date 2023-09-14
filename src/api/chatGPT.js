//const apiKey = process.env.OPENAI_API_KEY
import {OpenAIApi, Configuration} from "openai"

const apiKey = '...'
const url = 'https://api.openai.com/v1/completions'
const config = new Configuration({apiKey})
const openai = new OpenAIApi(config)

export async function fetchBotReply() {

  const response = await openai.createCompletion({
    'model': 'text-davinci-003',
    'prompt': 'Sound enthusiastic in five words or less.'
  })
  console.log(response.data.choices[0].text.trim())
  return response?.data?.choices[0].text
}

