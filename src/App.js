import React, { useState, useCallback } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevState) => !prevState);
    }
  }, [allowToggle]);
  const allowToggleHandler = () => {
    setAllowToggle(true);
  };
  console.log("App Running");
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput isShow={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Togglling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
