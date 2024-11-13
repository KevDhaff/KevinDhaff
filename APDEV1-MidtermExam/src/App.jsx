import { useState } from 'react'
import './App.css'
import FavoriteFood from './FavoriteFood';
import Identification from './Identification';
import Function from './Function';
import Counter from './Counter';
import MyCart from './MyCart';
import Paragraph from './Paragraph';


function App() {
  const fruits = [
    { id: 1, name: "Grapes", color: "purple", rating: 5 },
    { id: 2, name: "Orange", color: "orange", rating: 3 },
    { id: 3, name: "Kiwi", color: "green",rating: 4 },
    { id: 4, name: "Banana", color: "yellow", rating: 3 },
    { id: 5, name: "Cucumber", color: "green", rating: 5 },
  ];

  return (
    <>
      <Header />
      <FavoriteFood fruits={fruits} />
      <FavoriteFood fruits={fruits} />
      <Footer />
    </>
  )
}

export default App
