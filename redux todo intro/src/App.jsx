import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { TodoInput } from './components/todo'
import { TodoList } from './components/todolist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <TodoInput/>
     <TodoList/>
    </div>
  )
}

export default App
