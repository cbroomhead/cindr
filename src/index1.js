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

    const { message, currentModel, pronouns, requestType } = req.body;

    // if (requestType == "Note"){
    //   //console.log("in the if, request type:" + requestType)
    //   const prompt = 
    //   "Give me possible diagnosis for a patient exhibiting: " + message + " and write the using " + pronouns + " pronouns"
    // }
    // else {
    //   //console.log("in the else, request type:" + requestType)
    //   const prompt = 
    //   "Write " + message + "for a patient that uses " + pronouns + "from the persepctive of a psychiatrist"
    // }

    //hacky attempt at prompt engineering
    //const prompts = "As a psychiatrist, I need to  for a patient that uses " + pronouns + " pronouns, "

    //const prompt =  prompts + message;
    //console.log(prompts + message);
    
    const response = await openai.createCompletion({
        model: currentModel, //  "text-davinci-003"
        prompt: message,
        max_tokens: 100,
        temperature: 0.5,
      });
      console.log(message);
    res.json({
        //message: response.data,
        //data: message,
        message: response.data.choices[0].text,
      })
      console.log(response.data.choices[0].text);
})

app.get('/models', async (req,res) => {
    const response = await openai.listEngines();
    //console.log(response)
    res.json({
      models: response.data.data
    });
  });


app.listen(port, () => {
    console.log('Example app listening at http://localhost:')
})



