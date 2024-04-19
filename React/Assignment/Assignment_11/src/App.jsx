import './App.css'
import React, { useState } from "react";

function App() {
  const [currentTime, setCurrentTime] = useState("TIME");

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button
        onClick={() => {
          setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
          });
        }}
      >
        Get Time
      </button>
    </div>
  );
}

export default App;