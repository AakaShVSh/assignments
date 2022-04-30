import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Todoitem } from './components/TodoItems'
import { Todobox } from './components/todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Todobox/>
    </div>
  )
}

export default App
