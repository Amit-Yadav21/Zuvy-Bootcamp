import React, { useState } from 'react';
import Login from './Components/Login';
import Welcome from './Components/Welcome';
import Card from './Components/Card';
import notesData from './notes';
import './App.css'

function App() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (name) => {
    setUsername(name);
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
          <Welcome username={username} />
          {notesData.map((note, index) => (
            <Card key={index} title={note.title} content={note.content} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
