import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  console.log("App is running");
  const toggleParagraph = () => {
    setShowParagraph((prevstate) => !prevstate);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraph}>Toggle paragraph</Button>
    </div>
  );
}

export default App;
