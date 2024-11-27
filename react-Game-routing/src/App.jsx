import { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import GameList from './components/GameList';
import Game from './components/Game';
import Review from './components/Review';
import NotFound from './components/NotFound';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <>
            <h1>This is my react page</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/GameList">Games</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/GameList" element={<GameList />} />
                <Route path="/GameList/:gameId" element={<Game />} />
                <Route path="/Review" element={<Review />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;