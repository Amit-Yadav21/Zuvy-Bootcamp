import { useState } from 'react';
import RegistrationForm from './components/RegistrationForm.jsx';
import LoginForm from './components/LoginForm.jsx';
import CreateNote from './components/CreateNote.jsx';
import { ToastContainer } from 'react-toastify';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="left">
        <RegistrationForm />
      </div>
      <div className="right">
        <LoginForm />
      </div>
      <div className="bottom">
        <CreateNote />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;