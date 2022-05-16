// import logo from './logo.svg';
import './App.css';

function App() {
   const menu = ["Services","Projects","About"];
   return (
    <div className="App">
    <div id = "container">
      <h1>LOGOBAKERY</h1>
      <div id = "menu">
        {
          menu.map((ele) => {
             return  <Menudrop menudrop = {ele}/>
          })
        }
       
      </div>
      <button>Contacts</button>
    </div>
    </div>
  );
}

function Menudrop(menus){
 
   return <p id = "title">{menus.menudrop}</p>
}
export default App;
