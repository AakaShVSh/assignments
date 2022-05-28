import React, { useState } from "react";
 
const Form = ({data,setdata}) => {
  
  const [user,setuser] = useState({})
//  console.log(user)
  const handleonchange = (e) => {
     const {name,value,type,checked,files} = e.target;
    //  console.log(name) 
    // console.log(e,files[0],user,type)
    if(type === "checkbox"){
      setuser({
        ...user,
        [name]:value
      })
    }
    else if(type === "file"){
      setuser({
        ...user,
        [name]:files[0]
      })
    }
    else{
      setuser({
       ...user,
       [name]:value
     })
    }
     
  }
  
  const setuserdata = (e) => {
    e.preventDefault()
    setdata([...data,user])

  }

  return (
    <div>
      <form onSubmit={(e) => setuserdata(e)}>
        <label>Name</label> :
        <input type="text" name="name" placeholder="name" onChange={(e)=>handleonchange(e)} />
        <br />
        <label>age</label> :
        <input type="number" name="age" placeholder="age" onChange={(e)=>handleonchange(e)}  />
        <br />
        <label>Adress</label> :
        <input type="text" name="address" placeholder="adress" onChange={(e)=>handleonchange(e)}  />
        <br />
        <label>Department</label> :
        <select name="department" id="" onChange={(e)=>handleonchange(e)} >
          <option value="">Choose</option>
          <option value="business">Business</option>
          <option value="School">School</option>
          <option value="Office">Office</option>
        </select>
        <br />
        <label>Salary</label> :
        <input type="number" name="salary" placeholder="salary" onChange={(e)=>handleonchange(e)}  />
        <br />
        <label>Marital State</label> :
        <input type="checkbox" value="Maharashtra" name="checkbox" placeholder="name" onChange={(e)=>handleonchange(e)}  />
        Maharashtra
        <input type="checkbox" value="Mumbai" name="checkbox" placeholder="name" onChange={(e)=>handleonchange(e)}  />
        Mumbai
        <br />
        <label>Profile photo</label> :
        <input name="img" type="file" placeholder="profile photo" onChange={(e)=>handleonchange(e)}  />
        <br/>
        <input type="submit"/>
      </form>
    </div>
  );
};

export default Form;













