import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import Reviews from './components/Reviews';
import CompanyProfile from './components/CompanyProfile';
import DeveloperPage from './components/DeveloperPage';
import MissionVision from './components/MissionVision';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/developer" element={<DeveloperPage />} />
        <Route path="/mission-vision" element={<MissionVision />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;