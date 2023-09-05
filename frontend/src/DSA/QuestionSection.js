import React, { useState } from "react";
import SearchAnswer from "../LandingPage/SearchAnswer";

function QuestionSection({ selectedOptions }) {
  const [data, setData] = useState("");
  async function fetchData(selectedOptions) {
    let responce = await fetch(
      `http://localhost:8082/generate-dsa-questions/?difficulty=${selectedOptions.difficulty}&topic=${selectedOptions.subtopic}&numofquestion=1`
    );
    responce = await responce.json();
    setData(responce.ans);
    console.log(responce, "responce dsa");
  }
  return (
    <>
      <button onClick={() => fetchData(selectedOptions)}>
        QuestionSection
      </button>
      {/* <SearchAnswer
        answer={data.questions ? data.questions[0].question : ""}
          queryAsked={queryAsked}
          loading={loading}
      /> */}
      <SearchAnswer
        answer={data}
        //   queryAsked={queryAsked}
        //   loading={loading}
      />
      <SearchAnswer
        answer={data}
        //   queryAsked={queryAsked}
        //   loading={loading}
      />
      <SearchAnswer
        answer={data}
        //   queryAsked={queryAsked}
        //   loading={loading}
      />
      <SearchAnswer
        answer={data}
        //   queryAsked={queryAsked}
        //   loading={loading}
      />
      <SearchAnswer
        answer={data}
        //   queryAsked={queryAsked}
        //   loading={loading}
      />
    </>
  );
}

export default QuestionSection;
