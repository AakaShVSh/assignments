import { useEffect, useState } from "react"

export const Timer = () => {
       const [count, setCount] = useState(0)
    useEffect(()=>{
      var id = setInterval(() => {
        setCount((prev)=>{

          if(prev>=5){

            clearInterval(id)
            return "You Reached to max time"
          }
          
          return prev+1
        })
      },1000 );
    
      return ()=>{
        clearInterval(id)
      }
    },[])
      return (
        <div className="App">
          <h1>timer will go from 0 to 60</h1>   
         <div>{count}</div>
        </div>
      )
}
