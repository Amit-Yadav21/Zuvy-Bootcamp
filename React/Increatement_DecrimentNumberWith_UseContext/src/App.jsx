import { useState } from 'react'
import Count from './Component/Count'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const heandleIncrement = () =>{
    setCount(count + 1)
  }
  const heandleDerement = ()=>{
    if (count>0){
      setCount(count -1)
    }
  }

  return (
    <>
      <Count count={count}/>
      <button onClick={heandleIncrement}>Increment</button>
      <button onClick={heandleDerement}>Decrement</button>
    </>
  )
}

export default App
