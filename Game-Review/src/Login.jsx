import React, { useState } from 'react';

export default function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUserNameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleLogin = () => {
        if (username == "admin" && password == "admin") {
            onLogin(true);
        } else {
            alert("Invalid credentials");
        }
    };

    const renderLoginForm = () => {
        return (
            <div className='container'>
                <h1>Welcome to Wormmmy's Reviews!</h1>
                <h4>Login to Continue:</h4>
                Username:
                <input type="text" name="username" id="username" onChange={handleUserNameChange} />
                <br />
                Password:
                <input type="password" name="password" id="password" onChange={handlePasswordChange} />
                <br />
                <br />
                <button type="button" onClick={handleLogin}>Login</button>
            </div>
        );
    };

    return renderLoginForm();
}