import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import DSA from "./DSA/DSA";
import Quiz from "./Quiz/Quiz";
import Questions from "./GenerateQuestions/GenerateQuestions";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/dsa" element={<DSA />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/questions-generator" element={<Questions />} />
        <Route path="/content" element={<Questions />} />
      </Routes>
    </Router>
  );
}

export default App;
