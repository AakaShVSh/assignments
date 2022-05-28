import React from 'react'
import '../App.css'
const Status = ({data,forsort,setdata,fundelete,forfilter}) => {
  return (
    <div>
      <table border="1px">
  <tr>
    <th>Sr.no</th>
    <th>Name</th>
    <th>Age</th>
    <th>Address</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Marital State</th>
    {/* <th>Profile photo</th> */}
    <th>Delete</th>
  </tr>
  {data.filter((e) => e.department.includes(forfilter)).map((e,i) => (
    <tr key={i}>
    <td>{i+1}</td>
    <td>{e.name}</td>
    <td>{e.age}</td>
    <td>{e.address}</td>
    <td>{e.department}</td>
    <td>{e.salary}</td>
    <td>{e.checkbox}</td>
    {/* <td><img src="305c50e1-ff7f-487f-9b57-a1cf5a083017.jpg" alt="img"/></td> */}
    <td><button onClick={() => fundelete(i)}>delete</button></td>
  </tr>
  ))}
  
</table>
    </div>
  )
}

export default Status
