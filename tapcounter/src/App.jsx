// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
 
  const handlebut = (value) => {
    // if (counter > 10) {
    //   return;
    // }
    setCounter(counter + value);
  };

  const handledul = (value) => {
    if (counter * value > 10) {
      return;
    } else {
      setCounter(counter * value);
    }
  };
  return (
    <div className="App">
      <h1 className={counter % 2 !== 0 ? "inred" : "ingreen"}>
        counter: {counter}
      </h1>
      <button
        onClick={() => {
          if(counter>=10){
            return
          }
          handlebut(1);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          if(counter<=0){
            return
          }
          handlebut(-1);
        }}
      >
        Sub
      </button>
      <button
        onClick={() => {
          handledul(2);
        }}
      >
        Double
      </button>
    </div>
  );
}

export default App;
