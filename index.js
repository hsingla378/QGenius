const express = require("express");
require('dotenv').config();
const { OpenAI } = require('openai');
const app = express();
app.use(express.json());
const cors = require('cors')
// API Configuration
// This code is for v4 of the openai package: npmjs.com/package/openai
// import OpenAI from "openai";
app.use(cors())
app.options('*',cors())
const openai = new OpenAI({
  apiKey: process.env.apiKey,
});

app.get('/random', async (req, res) => {
  try {
    const searchData = req.query.data; // Use req.query to access query parameters
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0613",
      messages: [
        {
          "role": "user",
          "content": searchData
        }
      ],
      temperature: 1,
      max_tokens: 3947,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    console.log(response)
    return res.status(200).send(response?.choices[0]?.message?.content)
  } catch (e) {
    console.log(e)
  }
});


app.post('/search', async(req, res) => {
  try{
    const searchData = req.body.data;
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0613",
      messages: [
        {
          "role": "user",
          "content": searchData
        }
      ],
      temperature: 1,
      max_tokens: 3000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    console.log(response)
    return res.status(200).send(response?.choices[0]?.message?.content)
  }catch(e){
    console.log(e)
  }
})

app.get('/askmeanything', async (req, res) => {
  try {
    const searchData = req.query.q; // Use req.query to access query parameters
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0613",
      messages: [
        {
          "role": "user",
          "content": searchData
        }
      ],
      temperature: 1,
      max_tokens: 3947,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    // console.log(response.choices[0].message.content)
    const ans = response?.choices[0]?.message?.content;
    return res.status(200).json({ans})
  } catch (e) {
    console.log(e)
  }
});

app.get("/", (req, res) => {
  res.send(`<h1>Hello khaliq</h1>`);
});

// Server starting
const port = 8082;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
