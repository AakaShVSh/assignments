import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

let HandleDetail = () => {
  const [takedata, settakedata] = useState([]);
  const { id } = useParams();
  console.log(takedata)
  useEffect(() => {
    take();
  }, []);

  const take = async () => {
    try {
      let res = await fetch(`http://localhost:3000/home/${id}`);
      let data = await res.json();
      const taken = [data];

      console.log(data);
      settakedata(taken);
    } catch (error) {
      console.log(error);
    }
  };
  return (<div>{takedata.map(e => 
    <div id = "homebox">
    <h3 id = "titlehome">{e.name}</h3>
    <img id = "imghome" src={e.img} />
    <p id = "contenthome">{e.content}</p>
    </div>
 )}</div>
 )
};

export { HandleDetail };
