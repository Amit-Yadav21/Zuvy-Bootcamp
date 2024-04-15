import { useState } from 'react'
import './App.css'
import {add,multiply,subtract,divide} from "./Component/Calculator"

export default function App() {
  return (
    <ul>
      <li>{add(1, 2)}</li>
      <li>{multiply(2, 3)}</li>
      <li>{subtract(7, 2)}</li>
      <li>{divide(5, 2)}</li>
    </ul>
  );
}
