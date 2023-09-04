import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Hero from "./Hero";
import CardSection from "./CardSection";
import Footer from "../Footer/Footer";
import SearchAnswer from "./SearchAnswer";

export default function LandingPage() {
  const [toggleAnswerSection, setToggleAnswerSection] = useState(true);
  const [answer, SetAnswer] = useState("");
  const [queryAsked, setQueryAsked] = useState(
    "Start searching for a query to see the magic... 🪄"
  );
  return (
    <>
      <Hero
        SetAnswer={SetAnswer}
        setQueryAsked={setQueryAsked}
        setToggleAnswerSection={setToggleAnswerSection}
        toggleAnswerSection={toggleAnswerSection}
      />
      {toggleAnswerSection ? (
        <SearchAnswer answer={answer} queryAsked={queryAsked} />
      ) : (
        ""
      )}

      <CardSection />
      <Footer />
    </>
  );
}
