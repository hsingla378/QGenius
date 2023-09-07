/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function CodeEditor() {
  const [question, setQuestion] = useState({});

  const performApiCallForQuestion = async () => {
    try {
      const data =
        "topic: greedy, difficult level: easy,generate a unique DSA question in detail format on the given topic, include contstraints, sample code in javascript or a function that users can use and also this function will checked in the test cases if the solution is right or wrong but it should not include the solution, solution in javascript with explaination differently, 2-3 sample input-output examples with explanation after it, and faqs. Remember it should be in JSON format, also please don't include the topic name within the question description.";
      const response = await axios.get(
        "http://localhost:8082/random?data=" + data
      );
      console.log(response.data);
      setQuestion(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    performApiCallForQuestion();
  }, ["asdadasdasdasdas"]);
  return (
    <>
      <div>
        <h3></h3>
      </div>
      <div
        style={{ display: "flex", justifyContent: "right", marginRight: "5%" }}
      >
        <form id="myform" name="myform" method="post" action="compilecode">
          <div>
            <h3>Code</h3>
            <textarea rows="30" cols="130" id="code" name="code"></textarea>
          </div>
          <div>
            <h3>Input: </h3>
            <textarea rows="2" cols="130" id="input"></textarea>
          </div>
          Language:{" "}
          <select name="lang">
            <option value="C++">C++</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
          </select>
          Compile with Input:
          <div>
            <input
              type="radio"
              name="inputRadio"
              id="inputRadio"
              value="true"
            />{" "}
            Yes
            <input
              type="radio"
              name="inputRadio"
              id="inputRadio"
              value="false"
            />
            No
          </div>
          <input
            type="submit"
            value="submit"
            name="submit"
            style={{ padding: "15px" }}
          />
        </form>
      </div>
    </>
  );
}

export default CodeEditor;
