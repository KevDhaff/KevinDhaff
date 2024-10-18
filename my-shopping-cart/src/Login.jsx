import React, { useState } from "react";
import Shop from "./Shop";
import AdminPanel from "./AdminPanel";

export default function Login() {
    const items = [
        { id: 1, name: "Grapes", price: 50 },
        { id: 2, name: "Orange", price: 20 },
        { id: 3, name: "Pickles", price: 40 },
    ];

    const accounts = [
        { id: 1, username: "customer", password: "customer" },
        { id: 2, username: "admin", password: "admin" },
    ];

    const [isLoggedin, setIsLoggedin] = useState(false);
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function handleUsernameChange(event) {
        setEnteredUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setEnteredPassword(event.target.value);
    }

    function handleLogin() {
        const account = accounts.find(
            (acc) => acc.username === enteredUsername && acc.password === enteredPassword
        );

        if (account) {
            setIsLoggedin(true);
            setErrorMessage("");
        } else {
            setErrorMessage("Invalid username or password");
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                onChange={handleUsernameChange}
            />
            <input
                type="password"
                placeholder="Password"
                onChange={handlePasswordChange}
            />
            <button onClick={handleLogin}>Login</button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {isLoggedin && <Shop items={items} />} {}
        </div>
    );
}