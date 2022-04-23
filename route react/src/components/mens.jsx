import { useEffect, useState } from "react"
import "./product.css"
let Mens = () =>{
    const [men,setmen] = useState([]);

    useEffect(() => {
           take();
    },[])

    const take = async () => {
        try {
            let res = await fetch("http://localhost:3000/mens");
            let data = await res.json();
            console.log(data)
            setmen(data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div id = "main-product-div">{men.map(e => 
            <img id = "imgproduct" src={e.img} />
          )}</div>
    )
}
export {Mens}