import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Games from './components/Games'
import Game from './components/Game'
import NotFound from './components/NotFound'
import { Link, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <h1>This is my react page</h1>
      <nav>
        <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/About">About</Link></li>
         <li><Link to="/Games">Games</Link></li>
        </ul>
      </nav>

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path= "/Games" >
        <Route index element = {<Games/>} />
        <Route path = ":gameId" element = {<Game />}/>
      </Route>
      <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
