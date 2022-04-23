import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "./home.css"
let Home = () =>{
    const [home,sethome] = useState([]);

    useEffect(() => {
           take();
    },[])

    const take = async () => {
        try {
            let res = await fetch("http://localhost:3000/home");
            let data = await res.json();
            console.log(data)
            sethome(data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>{home.map(e => 
            <div id = "homebox">
            <Link to = {`/${e.id}`} id = "titlehome">{e.name}</Link>
            <img id = "imghome" src={e.img} />
            <p id = "contenthome">{e.content}</p>
            </div>
         )}</div>
    )
}
export {Home}