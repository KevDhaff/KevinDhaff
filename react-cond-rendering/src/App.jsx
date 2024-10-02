import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import ListOfFruits from './ListOfFruits'
import Footer from './Footer'

function App() {
  //array of fruits => fruit.objects
  const fruits = [
    {id: 1, name: "apple", color: "red"}, //apple objects
    {id: 2, name: "banana", color: "yellow"},
    {id: 3, name: "orange", color: "orange"},
    {id: 4, name: "grape", color: "purple"},
    {id: 5, name: "kiwi", color: "green"},
  ]
  const desserts = [
    {id: 1, name: "cake"},
    {id: 2, name: "ice cream"},
    {id: 3, name: "salad"},
  ]

  return (
    <>
     <Header />
     <ListOfFruits items = {fruits} category = "My Favorite Fruits"/>
     <Footer />
    </>
  )
}

export default App
