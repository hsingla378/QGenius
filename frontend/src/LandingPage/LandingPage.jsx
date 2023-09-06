import React, { useState } from "react";
import Hero from "./Hero";
import CardSection from "./CardSection";
import Footer from "../Footer/Footer";
import SearchAnswer from "./SearchAnswer";

export default function LandingPage({ loading, setLoading }) {
  const [toggleAnswerSection, setToggleAnswerSection] = useState(true);
  const [answer, SetAnswer] = useState("");
  const [queryAsked, setQueryAsked] = useState(
    "Start searching for a query to see the magic... 🪄"
  );

  return (
    <>
      {/* {loading ? <Progress size="xs" isIndeterminate /> : ""} */}
      {/* <Progress size="xs" isIndeterminate /> */}
      <Hero
        SetAnswer={SetAnswer}
        setQueryAsked={setQueryAsked}
        setToggleAnswerSection={setToggleAnswerSection}
        toggleAnswerSection={toggleAnswerSection}
        setLoading={setLoading}
      />
      {toggleAnswerSection ? (
        <SearchAnswer
          answer={answer}
          queryAsked={queryAsked}
          loading={loading}
        />
      ) : (
        ""
      )}

      <CardSection />
      <Footer />
    </>
  );
}
