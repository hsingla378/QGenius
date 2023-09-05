import React from "react";
import SearchAnswer from "../LandingPage/SearchAnswer";

function QuestionSection({ data }) {
  //   const [data, setData] = useState("");
  //   async function fetchData(selectedOptions) {
  //     let responce = await fetch(
  //       `http://localhost:8082/generate-dsa-questions/?difficulty=${selectedOptions.difficulty}&topic=${selectedOptions.subtopic}&numofquestion=1`
  //     );
  //     responce = await responce.json();
  //     setData(responce.ans);
  //     console.log(responce, "responce dsa");
  //   }
  return (
    <>
      {/* <SearchAnswer
        answer={data.questions ? data.questions[0].question : ""}
          queryAsked={queryAsked}
          loading={loading}
      /> */}
      {console.log("dsaData", data)}
      <SearchAnswer
        answer={data}
        heading="Question"
        title="Add Two Numbers"
        // image="image"
        //   queryAsked={queryAsked}
        //   loading={loading}
      />
      <SearchAnswer
        answer={data}
        heading="Examples"
        //   queryAsked={queryAsked}
        //   loading={loading}
      />
      <SearchAnswer
        answer={data}
        heading="Constraints"
        //   queryAsked={queryAsked}
        //   loading={loading}
      />
      <SearchAnswer
        answer={data}
        heading="Sample Code"
        //   queryAsked={queryAsked}
        //   loading={loading}
      />
      <SearchAnswer
        answer={data}
        heading="Solution"
        //   queryAsked={queryAsked}
        //   loading={loading}
      />
      <SearchAnswer
        answer={data}
        heading="FAQs"
        //   queryAsked={queryAsked}
        //   loading={loading}
      />
      <SearchAnswer
        answer={data}
        heading="Test Cases"
        //   queryAsked={queryAsked}
        //   loading={loading}
      />
    </>
  );
}

export default QuestionSection;
