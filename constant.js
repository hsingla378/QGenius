const { OpenAI } = require("openai");
require("dotenv");

const openai = new OpenAI({
  apiKey: process.env.apiKey,
});


module.exports = openai