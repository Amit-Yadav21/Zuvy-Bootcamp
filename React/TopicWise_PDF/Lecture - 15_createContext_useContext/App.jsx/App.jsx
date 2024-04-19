import { useState, useContext } from 'react'
import { LoginContext } from './context/LoginContext'

import Login from './components/Login'
import Profile from './components/Profile'

export default function App() {
  const [username, setUsername] = useState('');
  const [showUsername, setShowUsername] = useState(false);

  return (
    <LoginContext.Provider value={{
      username,
      setUsername,
      setShowUsername
    }}>
      {showUsername ?
        <Profile /> :
        <Login />}
    </ LoginContext.Provider>
  )
}
