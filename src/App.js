import React, { useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const toggleParagraphHandler = () => {
    setShowParagraph((prevState) => !prevState);
  };
  console.log("App Running");
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput isShow={false} />
      <Button onClick={toggleParagraphHandler}>Togglr Paragraph!</Button>
    </div>
  );
}

export default App;
