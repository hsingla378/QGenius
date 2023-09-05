import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Hero from "./Hero";
import CardSection from "./CardSection";
import Footer from "../Footer/Footer";
import SearchAnswer from "./SearchAnswer";

export default function LandingPage() {
  const [answer, SetAnswer] = useState(
    "React is a JavaScript library used for building user interfaces. It relies on creating reusable components that manage their own state. Here is a basic example of a React component that displays a counter and allows the user to increment it: ```jsx import React, { useState } from 'react'; function Counter() { // Initialize the counter state to 0 const [count, setCount] = useState(0); // Define a callback function to increment the counter const increment = () => { setCount(count + 1); }; return ( <div> <p>Count: {count}</p> <button onClick={increment}>Increment</button> </div> ); } export default Counter; ``` In this example, we use the `useState` hook from React to define a state variable called `count` and a function called `setCount` to update it. The initial value of `count` is set to 0. Inside the `return` statement, we render the current value of `count` inside a paragraph element (`<p>Count: {count}</p>`) and a button that, when clicked, calls the `increment` function. Every time the `increment` function is called, it updates the `count` state by adding 1 to the current value. This triggers a re-render of the component, updating the displayed count. This is just a simple example, but it demonstrates how React components can manage their own state and update the UI accordingly. React provides many other features and concepts, such as props, component lifecycle methods, and context, that allow for building more complex and interactive applications."
  );
  return (
    <>
      <Hero SetAnswer={SetAnswer} />
      <SearchAnswer answer={answer} />
      <CardSection />
      <Footer />
    </>
  );
}
