import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./styledcomponents/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button style = {{background:"#2490fe",border:"0px"}}>Style 1</Button>
      <Button >Style 2</Button>
      <Button style = {{border:"dashed"}}>Style 3</Button>
      <Button style = {{border:"0px"}}>Style 4</Button>
      <Button style = {{border:"0px",color:"#2490fe"}}>Style 5</Button>
    </div>
  );
}

export default App;
