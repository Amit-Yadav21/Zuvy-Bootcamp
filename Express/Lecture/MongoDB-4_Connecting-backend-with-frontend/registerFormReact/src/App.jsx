import { useState } from 'react'
import RegistrationForm from './RegistrationForm'
import { ToastContainer } from 'react-toastify';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Registration Form</h1>
      <RegistrationForm />
      <ToastContainer />
    </>
  )
}

export default App
