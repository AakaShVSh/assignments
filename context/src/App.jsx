import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import { Navbar } from './components/navbar'

function App() {
  const [count, setCount] = useState(0)
  const [show,setshow] = useState(false)
  console.log(show)
  return (
    <div className="App">
      <button onClick={() => {
       setshow(!show);
      }}>{show ? "logout" : "login"}</button> 
     
        {show ? <Navbar /> : null}
      
     

 
    </div>
  )
}

export default App
