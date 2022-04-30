import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Main } from './comp/comdiv'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Main/>
  )
}

export default App
