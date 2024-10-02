import { useState } from 'react'
import Header from './Header'
import Counter from './Counter'
import Footer from './Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Counter />
    <Footer />
    </>
  )
}

export default App
