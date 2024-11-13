import React, { useState } from 'react';
import Login from './Login';
import Reviews from './Reviews';
import './App.css'

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div id="root">
            {!isLoggedIn ? (
                <Login onLogin={setIsLoggedIn} />
            ) : (
                <Reviews />
            )}
        </div>
    );
}