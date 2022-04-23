import { Link } from "react-router-dom"
import "./nav.css"

let Nav = ()=>{
    return(
        <header class="header">
		<h1 class="logo"><a href="#">Flexbox</a></h1>
      <ul class="main-nav">
          {/* <li><a href="#">Home</a></li>
          <li><a href="#">Men</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#">Kids</a></li> */}
          <Link to = {"/"}>HOME</Link>
          <Link to = {"/mens"}>MEN</Link>
          <Link to = {"/women"}>WOMEN</Link>
      </ul>
	</header> 
    )
}
export {Nav}