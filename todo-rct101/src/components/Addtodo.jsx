/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";

export const Addtodo = ({todopost}) => {
  
  const [addtodo, setadd] = useState("");
 
  const posttodo = async () => {
    
         let payload = {
           title: addtodo,
           status: false,
        };
    
      try {
       await fetch("http://localhost:8080/todos", {
       method: "POST",
       headers: {
        "content-type": "Application/json",
      },  
     body: JSON.stringify(payload),
     });  todopost()
     setadd("")
    } catch (error) {
      console.log(error);
    }
  
  }
 return  (<>
          <input value={addtodo} onChange={(e) => setadd(e.target.value)} type="text" />
          <button disabled={!addtodo} onClick={posttodo}>Add todo</button>
         </>
        )                 
    }