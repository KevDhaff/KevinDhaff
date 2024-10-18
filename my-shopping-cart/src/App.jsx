import React from 'react';
import Shop from './Shop';
import Login from './Login';
import './App.css';

function App() {
  const items = [
    { id: 1, name: "Grapes", price: 50 },
    { id: 2, name: "Orange", price: 20 },
    { id: 3, name: "Pickles", price: 40 },
  ];

  return (
    <>
      <Login />
    </>
  );
}

export default App;
