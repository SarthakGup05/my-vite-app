import { useState } from 'react'
import './App.css'
import Home from './Home'
import RandomQuoteGenerator from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RandomQuoteGenerator />
    </>
  )
}

export default App
