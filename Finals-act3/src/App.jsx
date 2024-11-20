import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Overview from './Overview';
import Specifications from './Specifications';
import Features from './Features';
import SetupInstructions from './SetupInstructions';
import Troubleshooting from './Troubleshooting';
import Maintenance from './Maintenance';
import Support from './Support';
import './App.css'

function App() {
    return (
        <Router>
            <div>
                <h1>KB-X1000 Showcase</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/overview">Overview</Link></li>
                        <li><Link to="/specifications">Specifications</Link></li>
                        <li><Link to="/features">Features</Link></li>
                        <li><Link to="/setup">Setup Instructions</Link></li>
                        <li><Link to="/troubleshooting">Troubleshooting</Link></li>
                        <li><Link to="/maintenance">Maintenance</Link></li>
                        <li><Link to="/support">Support</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/overview" element={<Overview />} />
                    <Route path="/specifications" element={<Specifications />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/setup" element={<SetupInstructions />} />
                    <Route path="/troubleshooting" element={<Troubleshooting />} />
                    <Route path="/maintenance" element={<Maintenance />} />
                    <Route path="/support" element={<Support />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;