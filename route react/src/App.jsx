import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Home } from './components/home'
import { Mens } from './components/mens'
import { Nav } from './components/nav'
import { Route, Routes } from 'react-router-dom'
import { Womens } from './components/womens'
import { HandleDetail } from './components/details'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "/mens" element = {<Mens/>}></Route>
        <Route path = "/women" element = {<Womens/>}></Route>
        <Route path = "/:id" element = {<HandleDetail/>}></Route>
      </Routes>
  </div>
  )
}

export default App
