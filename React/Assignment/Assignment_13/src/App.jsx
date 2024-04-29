import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById("greeting").innerText = `Hello ${name}`;
    setName(""); // Clear the input box after submitting
  };

  return (
    <div className="container">
      <h1 id="greeting">Hello</h1>
      <input
        type="text"
        placeholder="What's your name?"
        value={name}
        onChange={handleNameChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;