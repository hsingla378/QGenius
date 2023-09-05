const express = require("express");
require("dotenv").config();
const { OpenAI } = require("openai");
const app = express();
app.use(express.json());
const cors = require("cors");
// API Configuration
// This code is for v4 of the openai package: npmjs.com/package/openai
// import OpenAI from "openai";
app.use(cors());
app.options("*", cors());
const openai = new OpenAI({
  apiKey: process.env.apiKey,
});

// app.get('/random', async (req, res) => {
//   try {
//     const searchData = req.query.data; // Use req.query to access query parameters
//     const response = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo-0613",
//       messages: [
//         {
//           "role": "user",
//           "content": searchData
//         }
//       ],
//       temperature: 1,
//       max_tokens: 3947,
//       top_p: 1,
//       frequency_penalty: 0,
//       presence_penalty: 0,
//     });
//     console.log(response)
//     return res.status(200).send(response?.choices[0]?.message?.content)
//   } catch (e) {
//     console.log(e)
//   }
// });

// app.post('/search', async(req, res) => {
//   try{
    // const searchData = req.body.data;
    // const response = await openai.chat.completions.create({
    //   model: "gpt-3.5-turbo-0613",
    //   messages: [
    //     {
    //       "role": "user",
    //       "content": searchData
    //     }
    //   ],
    //   temperature: 1,
    //   max_tokens: 3000,
    //   top_p: 1,
    //   frequency_penalty: 0,
    //   presence_penalty: 0,
    // });
    // console.log(response)
    // return res.status(200).send(response?.choices[0]?.message?.content)
//   }catch(e){
//     console.log(e)
//   }
// })


// Main page Ask me anything chat gpt prompt
app.get("/askmeanything", async (req, res) => {
  try {
    const searchData = req.query.q; // Use req.query to access query parameters
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0613",
      messages: [
        {
          role: "user",
          content: searchData,
        },
      ],
      temperature: 1,
      max_tokens: 3947,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    // console.log(response.choices[0].message.content)
    const ans = response?.choices[0]?.message?.content;
    return res.status(200).json({ ans });
  } catch (e) {
    console.log(e);
  }
});


// Only generates Coding Question not LLD & HLD
app.get("/generate-dsa-questions", async (req, res) => {
  try {
    const searchData = req.query; // Use req.query to access query parameters
    console.log(searchData);
    const { difficulty, topic, numofquestions, lang } = searchData;
    // const searchQuery1 = `Behave like 7 star code chef coder who is making questions for coding contest and important note that question 
    // description should be unique & story format, Generate ${numofquestions} ${topic} questions, difficulty level of ${difficulty} 
    // and give it in json format containing array of object & each object should contain question as key with actual question description, ans 
    // as key with pseudo code of logic it should alway contain the logic that how to solve the issue and test case as key and some edge cases 
    // with edgecases as key and also it should have solution key which should always have solution code in ${lang}. Remember it is very 
    // important to give keys which are mentioned it should not be empty in any case.`;

    const searchQuery = `Behave like a 7-star QGenius coder(Platform like CodeChef) who is creating questions for a coding contest. Generate ${numofquestions} ${topic} questions 
    with a difficulty level of ${difficulty} result should contain array of object & object should have key as question 
    which have question description without topic and it should be story format, and testcases and edgecases with these keys
    and pusedocode with solution hint in string format and than solution key which will have actual coding solution in
    ${lang}`
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0613",
      messages: [
        {
          role: "user",
          content: searchQuery,
        },
      ],
      temperature: 1,
      max_tokens: 3947,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    console.log(response.choices[0].message.content);
    const ans = response?.choices[0]?.message?.content;
    return res.status(200).json({ ans });
  } catch (e) {
    console.log(e);
  }
});


// Generates quiz MCQ Questions
app.get("/generate-quiz", async (req, res) => {
  try {
    const searchData = req.query; // Use req.query to access query parameters
    console.log(searchData);
    const { difficulty, topic, subtopic } = searchData;
    const searchQuery = `Imagine you are a prduct based company's interviewer Generate very unique 10 ${topic} 
    questions which subtopic should be ${subtopic} with 
    logic difficulty level of ${difficulty} and give it in json format which is containing array of object and 
    each object should contain question as key and options as key which have array of 4 strings and only one
    option must be correct after that we sould have correct answer with answer as key and it must always have all
    required key and always give response in required format and don't give anything else and please return data in same format.
    and must remember if you are giving code snippet than include code in question description.`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0613",
      messages: [
        {
          role: "user",
          content: searchQuery,
        },
      ],
      temperature: 1,
      max_tokens: 3947,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    console.log(response.choices[0].message.content);
    const ans = response?.choices[0]?.message?.content;
    return res.status(200).json({ ans });
  } catch (e) {
    console.log(e);
  }
});


// Generates Interviews prep quesions with solutions:- Himanshu api
app.get("/interview-prep", async (req, res) => {
  try {
    const searchData = req.query; // Use req.query to access query parameters
    console.log(searchData);
    const { difficulty, topic, subtopic } = searchData;
    const searchQuery = `Imagine you are an product based company interviewer and your 
    CEO told you to Generate very unique 10 ${topic} questions which subtopic should be ${subtopic} with 
    logic difficulty level of ${difficulty} and give it in json format which is containing array of object and 
    each object should contain question as key and another key as answer which should contains the solutions. This 
    question will help the person who is coming for interview`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0613",
      messages: [
        {
          role: "user",
          content: searchQuery,
        },
      ],
      temperature: 1,
      max_tokens: 3947,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    console.log(response.choices[0].message.content);
    const ans = response?.choices[0]?.message?.content;
    return res.status(200).json({ ans });
  } catch (e) {
    console.log(e);
  }
});


app.get("/", (req, res) => {
  res.status(200).send("Up");
});

// Server starting
const port = 8082;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
