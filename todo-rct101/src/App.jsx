import logo from './logo.svg';
import './App.css';
import { Addtodo } from './components/Addtodo';
import Todolist from './components/Todolist';
import { useEffect, useState } from 'react';

function App() {
  const [todo,settodo] = useState([])
  console.log(todo)

  const take = async () => {
      try {
          let res = await fetch("http://localhost:8080/todos");
          let data = await res.json(); 
          settodo(data)
      } catch (error) {
          console.log(error)
      }
  }
 
  const deletetodo = async (id) => {
   try {
    
     await fetch(`http://localhost:8080/todos/${id}`, {
      method: "Delete",
       headers: {
       "content-type": "Application/json",
     },  
    body: null,
    });
    take() 
   } catch (error) {
     console.log(error);
   }
 
 }

  useEffect(() => {
        take()
  },[])
  return (
    <div className="App">
     <Addtodo todopost={take}/>
     <Todolist isdelete={deletetodo} todo={todo}/>
    </div>
  );
}

export default App;
