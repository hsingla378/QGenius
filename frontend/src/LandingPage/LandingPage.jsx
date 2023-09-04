import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Hero from "./Hero";
import CardSection from "./CardSection";
import Footer from "../Footer/Footer";
import SearchAnswer from "./SearchAnswer";

export default function LandingPage() {
  const [answer, SetAnswer] = useState("");
  return (
    <>
      <Hero SetAnswer={SetAnswer} />
      <SearchAnswer answer={answer} />
      <CardSection />
      <Footer />
    </>
  );
}
