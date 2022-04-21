import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/authcontext";
import "./cards.css"
const Navbar = () => {
  const { isAuth, toggleAuth } = useContext(AuthContext);
  const [page,setpage] = useState(1)

  const handlepage = (value) => {
        setpage(page+value)
  }

  useEffect(() => {
    Take();
  }, [page]);
  const Take = async () => {
    try {
      let res = await fetch(`https://reqres.in/api/users?page=${page}&limit=6`);
      let data = await res.json();
      data = data.data;
      console.log(data);
      toggleAuth(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
    <div className="card-container">
      {isAuth.map((e) => (
        <div className="cards">
          <h2>
            {e.first_name} {e.last_name}
          </h2>
          <h4>{e.email}</h4>
          <img src={e.avatar} />
        </div>
      ))}
    </div>
       <button onClick={() => {
         if(page > 1){
           return
         }
         handlepage(1)
       }} >next page</button>
       <button onClick={() => {
         if(page<=1){
           return
         }
         handlepage(-1)
       }} >prev page</button>
    </div>
  );
};

export { Navbar };
