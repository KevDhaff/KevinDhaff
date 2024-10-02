import { useState } from 'react'
import './index.css'
import Header from './Header'
import Qoutesgenerator from './Qoutesgenerator'
import Footer from './Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Qoutesgenerator />
    <Footer />
    </>
  )
}

export default App
