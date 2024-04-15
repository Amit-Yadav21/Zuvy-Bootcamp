import { useState } from 'react'
import './App.css'

export default function App() {
  const currentYear = new Date().getFullYear();
  const authorName = "Amit Yadav";

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>Created By: {authorName}</p>
      <p>Copyright: {currentYear}</p>
    </div>
  );
}
