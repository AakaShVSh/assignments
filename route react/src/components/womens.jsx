import { useEffect, useState } from "react"
import "./product.css"
let Womens = () =>{
    const [eomen,seteomen] = useState([]);

    useEffect(() => {
           take();
    },[])

    const take = async () => {
        try {
            let res = await fetch("http://localhost:3000/Women");
            let data = await res.json();
            console.log(data)
            seteomen(data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div id = "main-product-div" >{eomen.map(e => 
           <img id = "imgproduct" src={e.img} />
         )}</div>
    )
}
export {Womens}