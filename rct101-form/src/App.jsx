import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { useEffect, useState } from 'react';
import Status from './components/Status';

function App() {
  const [users,usersdata] = useState([]);
  const [filters,setfilter] = useState("");
  const [sorts,setsort] = useState("");
  console.log(sorts)
  const toDelete = (id) => {
    var x = users.filter((e,i) => i !== id );
    usersdata(x)
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const itsort = (value) => {
    if(value === "low"){
      var x = users.sort((a,b) => b.salary - a.salary)
    usersdata(x)
    }
   if(value === "high"){
      var fun = users.sort((a,b) => a.salary - b.salary)
    usersdata(fun)
    }
  }
  useEffect(() => {
    itsort(sorts)
  },[itsort, sorts])
  return (
    <div className="App">
     <Form data={users} setdata={usersdata}/>
     <input placeholder='filter by department' onChange={(e) => setfilter(e.target.value)} />
     <select name="" id="" onChange={(e) => setsort(e.target.value)}>
       <option value="">sort by salary</option>
       <option value="low">low to high</option>
       <option value="high">high to low</option>
       </select>  
     <Status forsort={sorts} forfilter={filters} fundelete={toDelete} data={users} setdata={usersdata}/>
    </div>
  );
}

export default App;
