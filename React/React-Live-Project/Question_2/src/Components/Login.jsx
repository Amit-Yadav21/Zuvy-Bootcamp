import React, { useState } from 'react';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Assuming some validation logic for username and password
        if (username.trim() !== '' && password.trim() !== '') {
            onLogin(username);
            setIsLoggedIn(true);
        } else {
            // Display error message or handle invalid login
        }
    };

    return (    
        <div>
            {isLoggedIn ? (
                <div>
                    {/* Display welcome section here */}
                    <h2>Welcome, {username}</h2>
                    {/* Additional content after successful login */}
                </div>
            ) : (
                <form onSubmit={handleSubmit} className='loginform'>
                    <h2>Login Page</h2>
                    <div className='line-height'>
                        <label>Username : </label>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className='line-height'>
                        <label>Password : </label>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className='loginBtn' type="submit">Login</button>
                </form>
            )}
        </div>
    );
}

export default Login;