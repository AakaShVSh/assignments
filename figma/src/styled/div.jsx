import styled from "styled-components"


let Div = styled.div`

 
    height: 749px;
    background: ${(props)=>(props.theme==="light"?"#E5E9F2":"#1F2327")};

#App{
  position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
width: 50%;
height: auto;
margin: auto;
color: ${(props)=>(props.theme==="light"?"black":"white")}; ;

background: ${(props)=>(props.theme==="light"?"white":"#292E33")};
}
#btn{
    background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 10px;
  margin-left: 50px;
  margin-top: 20px;
}
   /* height: 100px;
   margin-top: 10px;

      
     margin-left: 30px;
     left: 8.47%;
    right: 60.14%;
top: 11.04%;
bottom: 38.77%;



box-shadow: 0px 1px 4px #E5E9F2;
border-radius: 5px; */
   
  & #line{
      
    width: 50%;
left: 10.56%;
right: 69.86%;
top: 25%;
bottom: 74.41%;
height: 10px;
margin-top: 10px;
background: #29CB97;
box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
border-radius: 3px;
  } 

  & #line2{
 width: 60%;
left: 10.56%;
right: 69.86%;
top: 25%;
bottom: 74.41%;
height: 10px;
margin-top: 10px;
background: #4072EE;;
box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
border-radius: 3px;
  } 

  & #line3{
      width: 40%;
left: 10.56%;
right: 69.86%;
top: 25%;
bottom: 74.41%;
height: 10px;
margin-top: 10px;
background: #B558F6;;
box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
border-radius: 3px;
  }
 & img{
     width: 90px;
     border-radius: 50%;
     margin-top: 10px;
 } 
 
 & #flex{

   display: flex;
 } 

 & #last_text{
     
     display: flex;
 }
 h3,h5{
     font-family: 'Courier New', Courier, monospace;
     font-size: 15px;
 }
 & #margin{

     margin-left: 30px;
 }
`
export {Div}
       
