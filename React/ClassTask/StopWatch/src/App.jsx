import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef();
  const startTimeRef = useRef();

  const startTimer = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - timer * 1000;
    intervalRef.current = setInterval(() => {
      setTimer((Date.now() - startTimeRef.current) / 1000);
    }, 1000);
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const pauseTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTimer((Date.now() - startTimeRef.current) / 1000);
  };

  const resetTimer = () => {
    stopTimer();
    setTimer(0);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };  

  return (
    <div className="stopwatch">
      <h1>{formatTime(timer)}</h1>
      <div className="controls">
        {!isRunning ? (
          <button onClick={startTimer}>Start</button>
        ) : (
          <>
            <button onClick={pauseTimer}>Pause</button>
            <button onClick={stopTimer}>Stop</button>
          </>
        )}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default App;
