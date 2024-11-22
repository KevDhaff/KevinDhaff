import React, { useState } from 'react';
import './App.css'; // Make sure to create this CSS file for styling
import CPU from './CPU';
import GPU from  './GPU';

const App = () => {
  const [currentView, setCurrentView] = useState('main'); // State to manage the current view

  const renderContent = () => {
    switch (currentView) {
      case 'cpu':
        return <CPU />;
      case 'gpu':
        return <GPU />;
      case 'main':
      default:
        return <MainContent />;
    }
  };

  return (
    <div className="app">
      <Header />
      <div className="content">
        <Navigation setCurrentView={setCurrentView} /> {/* Pass setCurrentView to Navigation */}
        {renderContent()} {/* Render content based on current view */}
      </div>
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>HIGH END PC RIGS</h1>
      </div>
      <SearchBar />
    </header>
  );
};

const Navigation = ({ setCurrentView }) => { // Receive setCurrentView as prop
  return (
    <nav className="navigation">
      <ul>
        <li><a href="#" onClick={() => setCurrentView('main')}>Home</a></li>
        <li><a href="#" onClick={() => setCurrentView('cpu')}>CPUs</a></li>
        <li><a href="#" onClick={() => setCurrentView('gpu')}>GPUs</a></li>
        <li><a href="#">Motherboards</a></li>
        <li><a href="#">RAM</a></li>
        <li><a href="#">Storage</a></li>
      </ul>
    </nav>
  );
};

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search for PC parts..." />
      <button type="submit">Search</button>
    </div>
  );
};

const MainContent = () => {
  return (
    <main className="main-content">
      <h1>Welcome to the PC Parts Store</h1>
      <p>Discover the best components for your next build!</p>
      {/* Example of product listings with images */}
      <div className="product-list">
        <Product 
          name="Intel Core i9" 
          price="$499" 
          image="https://via.placeholder.com/150?text=Intel+Core+i9" 
        />
        <Product 
          name="NVIDIA RTX 3080" 
          price="$699" 
          image="https://via.placeholder.com/150?text=NVIDIA+RTX+3080" 
        />
        <Product 
          name="ASUS ROG Strix Motherboard" 
          price="$299" 
          image="https://via.placeholder.com/150?text=ASUS+ROG+Strix" 
        />
        <Product 
          name="Corsair Vengeance 16GB RAM" 
          price="$89" 
          image="https://via.placeholder.com/150?text=Corsair+Vengeance+RAM" 
        />
        <Product 
          name="Samsung 970 EVO 1TB SSD" 
          price="$129" 
          image="https://via.placeholder.com/150?text=Samsung+970+EVO" 
        />
      </div>
    </main>
  );
};

const Product = ({ name, price, image }) => {
  return (
    <div className="product">
      <img src={image} alt={name} className="product-image" />
      <h2>{name}</h2>
      <p>{price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 PC Parts Store. All rights reserved.</p>
    </footer>
  );
};

export default App;