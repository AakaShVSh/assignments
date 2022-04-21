import { useEffect, useState } from "react"

export const Timer = () => {
       const [secound,setsecound] = useState(0);

       useEffect(() => {  
           
           setInterval(() => {
           setsecound((preValue) => {
            
               return preValue+1;
           })
           },1000)
       },[])

       return (
           <div>
               <h1>secound: {secound}</h1>
           </div>
       )

}