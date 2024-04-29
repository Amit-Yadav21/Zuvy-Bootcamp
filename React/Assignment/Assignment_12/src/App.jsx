import './App.css'
import React, { useState } from "react";

function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="container">
      <h1>{submitted ? "Submitted" : "Hello"}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
