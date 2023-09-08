const openai = require("../constant");
const fs = require("fs");

// Working
const askmeanything = async (req, res) => {
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
    
    const ans = response?.choices[0]?.message?.content;
    return res.status(200).json({ ans });
  } catch (e) {
    console.log(e);
  }
};
// Working
const generateAndDownloadDSAQuestions = async (req, res) => {
  try {
    const searchData = req.query; // Use req.query to access query parameters
    const { difficulty, topic, numofquestions, lang } = searchData;
    const searchQuery = `Behave like a 7-star QGenius coder(Platform like CodeChef) who is creating questions for a coding contest. Generate ${numofquestions} ${topic} questions 
      with a difficulty level of ${difficulty} result should contain array of object & object should have key as question 
      which have question description without topic and it should be story format, and testcases and edgecases with these keys
      and pseudocode with solution hint in string format and then solution key which will have actual coding solution in
      ${lang}`;
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
    const ans = response?.choices[0]?.message?.content;

    // Write the response to a .txt file
    const fileName = "generated_questions.txt";
    fs.writeFileSync(fileName, ans, "utf-8");

    // Set the appropriate headers for downloading the file
    res.setHeader("Content-Disposition", `attachment; filename=${fileName}`);
    res.setHeader("Content-Type", "text/plain");

    // Stream the file as the response
    const fileStream = fs.createReadStream(fileName);
    fileStream.pipe(res);

    // Delete the file after it has been sent
    fileStream.on("end", () => {
      fs.unlinkSync(fileName);
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "An error occurred" });
  }
};
// Working
const generateQuiz = async (req, res) => {
  try {
    const searchData = req.query; // Use req.query to access query parameters
    
    const { difficulty, topic, subtopic } = searchData;
    const searchQuery = `Imagine you are a prduct based company's interviewer Generate very unique 10 ${topic} 
      questions which subtopic should be ${subtopic} with 
      logic difficulty level of ${difficulty} and give it in json format which is containing array of object and 
      each object should contain question as key and options as key which have array of 4 strings and only one
      option must be correct after that we sould have correct answer with answer as key and it must always have all
      required key and always give response in required format and don't give anything else and please return data in same format.
      and must remember if you are giving code snippet than include code in question description.`;

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
    const ans = response?.choices[0]?.message?.content;
    return res.status(200).json({ ans });
  } catch (e) {
    console.log(e);
  }
};
// Working
const interviewPrep = async (req, res) => {
  try {
    const searchData = req.query; // Use req.query to access query parameters

    const { difficulty, topic, subtopic } = searchData;
    const searchQuery = `Imagine you are an product based company interviewer and your 
        CEO told you to Generate very unique 10 ${topic} questions which subtopic should be ${subtopic} with 
        logic difficulty level of ${difficulty} and give it in json format which is containing array of object and 
        each object should contain question as key and another key as answer which should contains the solutions. This 
        question will help the person who is coming for interview. Please give reponse in required format please don't give anything else
        and don't change the ans format again and again`;

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
    const ans = response?.choices[0]?.message?.content;
    return res.status(200).json({ ans });
  } catch (e) {
    console.log(e);
  }
};
// Working
const generateAndDownloadDSACodes =  async (req, res) => {
    try {
      const { subtopic, topic, difficulty } = req.query;
      const searchQuery = `Imagine you are a senior software engineer at QGenius and now you want to hire new software 
        engineers, your job is to must create exact 3 new and unique which is not available on any other platform ${subtopic} ${topic} ${difficulty} 
        questions these should be in story telling format with provide solution approach and 3-3 test case with edge cases if available according
        to question, and at the end
        please provide step by step pseudo code solution so we can compare it, so our company
        can upload them into the contest. There should not be extra other things other than requirement and it should be
        in requried format. dont provide extra notes or any type of disclaimer and also dont provide syntax like here
        is your question regarding this topic in starting or at the end`;
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-16k",
        messages: [
          {
            role: "user",
            content: searchQuery,
          },
        ],
        temperature: 0.5,
        max_tokens: 16000,
        top_p: 0.5,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      const ans = response?.choices[0]?.message?.content;
  
      // Write the response to a .txt file
      const fileName = "dsa_generated_questions.txt";
      fs.writeFileSync(fileName, ans, "utf-8");
  
      // Set the appropriate headers for downloading the file
      res.setHeader("Content-Disposition", `attachment; filename=${fileName}`);
      res.setHeader("Content-Type", "text/plain");
  
      // Stream the file as the response
      const fileStream = fs.createReadStream(fileName);
      fileStream.pipe(res);
  
      // Delete the file after it has been sent
      fileStream.on("end", () => {
        fs.unlinkSync(fileName);
      });
    } catch (error) {
      console.log(error);
    }
}
// Working
const generateAndDownloadDevelopmentCodes = async (req, res) => {
    try {
      const { subtopic, topic, difficulty } = req.query;
      const searchQuery = `Imagine you are a senior software engineer at QGenius and now you want to hire new frontend 
        engineers, your job is to must create exact 3 new and unique and triky ${difficulty} ${subtopic} ${topic}  
        interview   questions, and at the end
        please provide step by step pseudo code solution so we can compare it, so our company
        can upload them into the contest. There should not be extra other things other than requirement and it should be
        in requried format. dont provide extra notes or any type of disclaimer and also dont provide syntax like here
        is your question regarding this topic in starting or at the end`;
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-16k",
        messages: [
          {
            role: "user",
            content: searchQuery,
          },
        ],
        temperature: 0.5,
        max_tokens: 16000,
        top_p: 0.5,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
  
      const ans = response?.choices[0]?.message?.content;
  
      // Write the response to a .txt file
      const fileName = "developement_generated_questions.txt";
      fs.writeFileSync(fileName, ans, "utf-8");
  
      // Set the appropriate headers for downloading the file
      res.setHeader("Content-Disposition", `attachment; filename=${fileName}`);
      res.setHeader("Content-Type", "text/plain");
  
      // Stream the file as the response
      const fileStream = fs.createReadStream(fileName);
      fileStream.pipe(res);
  
      // Delete the file after it has been sent
      fileStream.on("end", () => {
        fs.unlinkSync(fileName);
      });
    } catch (error) {
      console.log(error);
    }
} 
// Working
const generateAndDownloadSystemDesignCodes = async (req, res) => {
    try {
      const { topic, subtopic, difficulty } = req.query;
      const searchQuery = `Imagine you are CTO of QGenius and have 30+ years of experience and now you want to hire senior software engineers, 
        your job is to must
        create exact 3 new and unique  ${topic} ${subtopic} ${difficulty} interview questions in good story format which are not available on 
        other platforms, and it is very important to provide pseudo code solution or solution approach so we can compare it, so our company
        can upload them into the contest. There should not be extra other things other than requirement and it should be
        in requried format. and very important to note:- donnot provide extra notes or any type of disclaimer and also dont provide syntax like here
        is your question regarding this topic in starting or at the end`;
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-16k",
        messages: [
          {
            role: "user",
            content: searchQuery,
          },
        ],
        temperature: 0.5,
        max_tokens: 16000,
        top_p: 0.5,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
  
      const ans = response?.choices[0]?.message?.content;
  
      // Write the response to a .txt file
      const fileName = "system_design_generated_questions.txt";
      fs.writeFileSync(fileName, ans, "utf-8");
  
      // Set the appropriate headers for downloading the file
      res.setHeader("Content-Disposition", `attachment; filename=${fileName}`);
      res.setHeader("Content-Type", "text/plain");
  
      // Stream the file as the response
      const fileStream = fs.createReadStream(fileName);
      fileStream.pipe(res);
  
      // Delete the file after it has been sent
      fileStream.on("end", () => {
        fs.unlinkSync(fileName);
      });
    } catch (error) {
      console.log(error);
    }
}
// Working
const generateDSAQuestions = async (req, res) => {
    try {
      const { subtopic, topic, difficulty } = req.query;
      const searchQuery = `generate a DSA question with these needs: topic ${subtopic} as h3 and have a class name ${topic} difficulty level 
        that is  ${difficulty}  in the h4 tag and should have the class name "difficulty", then detailed question (coding bases, not theory bases) with a 
        p tag and have the class "question" , remember that the question is in detail or accordingly and please don't provde topic within the 
        question, sample input and outputs with their example as another div block having the title "Sample I/O" as h3 with the class "examples" 
        and have p tags for inputs and outputs example with explanation all with p tags, remeber to bold "Input", "Output" and "Explaination",
         constraints as other div blocks and have class "constraints", sample code block, that have the title "Sample Code" as h3 tags or the 
         function and its parameters that it will check in the backend to verify with test cases with <code> tag within another <pre> tag  
         means <code> within <pre>, correct solution in javascript with another div block have class"solution" then this block should have the 
         title "Solution" as h3 tag and solution code in <code> tag means in this <code> tag you have to answer the code within another <pre> tag 
         means <code> within <pre>, faqs another div block that have the class "faqs", have h3 title that is "FAQs" or "FAQ" accordingly with the 
         class "faq-title" and for the question use the class "faq-question"  as p tag and for answer use "faq-answer".`;
  
     
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-16k-0613",
        messages: [
          {
            role: "user",
            content: searchQuery,
          },
        ],
        temperature: 0.5,
        max_tokens: 16000,
        top_p: 0.5,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
  
      const ans = response?.choices[0]?.message?.content;
      return res.status(200).json({ ans });
    } catch (error) {
      console.log(error);
    }
}

module.exports = {
  askmeanything,
  generateAndDownloadDSAQuestions,
  generateQuiz,
  interviewPrep,
  generateAndDownloadDSACodes,
  generateAndDownloadDevelopmentCodes,
  generateAndDownloadSystemDesignCodes,
  generateDSAQuestions
};
