//import { Configuration, OpenAIApi } from "openai";


const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-dmSZ3gdDcIptBfZXPV29awdv",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
const express = require('express')
const app = express()
const port = 3080
const cors = require('cors')
const bodyParser = require ('body-parser')

app.use(bodyParser.json())
app.use(express.json());
app.use(cors())

app.post('/', async (req,res) => {
    const { message, currentModel } = req.body;
    const response = await openai.createCompletion({
        model: currentModel, // "text-davinci-003"
        prompt: message,
        max_tokens: 100,
        temperature: 0.5,
      });
    //console.log(response.data.choices[0].text)
    res.json({
        //message: response.data,
        //data: message,
        message: response.data.choices[0].text,
      })
})

app.get('/models', async (req,res) => {
    const response = await openai.listEngines();
    console.log(response)
    res.json({
      models: response.data.data
    });
  });


app.listen(port, () => {
    console.log('Example app listening at http://localhost:')
})



