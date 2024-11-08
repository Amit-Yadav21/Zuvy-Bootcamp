import { useState } from 'react'
import './App.css'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Note from "./Components/Note";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Note />
      <Footer />
    </div>
  );
}
