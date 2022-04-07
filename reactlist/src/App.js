// import logo from './logo.svg';
import './App.css';

function App() {
  const opt1 = ["Android","Blackberry","iPhone","Windows Phone"];
  const opt2 = ["sumsung","HTC","Micromax","Apple"]
  return (
    <div className="App">
     <h1>Mobile Operating System</h1>
     <ul>
       {opt1.map((op) => {
         return <Option1 option = {op}/>
       })}
     </ul>
     <h1>Mobile Manufacturers</h1>
     <ul>
       {opt2.map((op) => {
          return <Option2 option = {op} />
       })}
     </ul>
    </div>
  );
}
const Option1 = (op) => {
  return <li>{op.option}</li>
}
const Option2 = (op) => {
  return <li>{op.option}</li>
}
export default App;
