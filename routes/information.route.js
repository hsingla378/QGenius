const express = require("express");
const router = express.Router();
const informationControlles = require("../controllers/information.controller");
// Working 
router.get("/askmeanything", informationControlles.askmeanything);
// Working
router.get(
  "/generate-dsa-questions-download",
  informationControlles.generateAndDownloadDSAQuestions
);

// Generates quiz MCQ Questions - Working
router.get("/generate-quiz", informationControlles.generateQuiz);

// Generates Interviews prep quesions with solutions:- Working
router.get("/interview-prep", informationControlles.interviewPrep);

// Route for DSA Specific quesions download - Working
router.get(
  "/genrate-and-download-codes-dsa",
  informationControlles.generateAndDownloadDSACodes
);

// For frontend question downloading only -> working
router.get(
  "/genrate-and-download-codes-developement",
  informationControlles.generateAndDownloadDevelopmentCodes
);
// Working
router.get(
  "/genrate-and-download-codes-system-design",
  informationControlles.generateAndDownloadSystemDesignCodes
);
// Working
router.get(
  "/generate-dsa-questions",
  informationControlles.generateDSAQuestions
);

//   router.get("/", (req, res) => {
//     res.status(200).send("Server is Up and running😊");
//   });

module.exports = router;
