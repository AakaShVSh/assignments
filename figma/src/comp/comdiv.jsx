import { useContext } from "react"
import { ThemeContext } from "../context/theme"
import { Div } from "../styled/div"

let Main = ()=>{
  let {theme , chngtheme} = useContext(ThemeContext)
 console.log(theme)
    return(
        <div  >

        
             <Div id="main"theme={theme}>
             <div id="App">
    

            <h2>Active User</h2>
        <div id="margin">
          <div id="flex">
            <div id="Img">
              <img src="https://s3-alpha-sig.figma.com/img/0b5d/c448/3e918e0b00219cd737a20b1bbdb4c377?Expires=1651449600&Signature=MTTE6yQP-q4o6JDlYF4ODebeTKOzSfYVYkb0sLie8GN8dg9gs3wR70-RG0jfRtyy6bSB3QX1~4rGEHqbASPtixVbSDvebvN6gozRjWvwwnZBahQM9vftlB6yuan8htio-PPIGvV-srTyxJWamrANphyyCv5kakWPI~fIYNoBTzO8IMjjFcmW5N7ROmR0QNtzgTq70wO9cL4DZ8eJCTMhFEOzuwpj769YcAJvmX008jH9QbpHZe4ilaJz~HXoXXFGocTx8C3Z5kpQeP12LOTBbtIHzjGzB4oqMxD3lqRRNCfVhR7nMVAqZBsytpSIqlwtgSDpXtQd9PpIgKpXE-XSaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" srcset="" />
            </div>
            <div id="text">
              <h3>Nrupul Dev</h3>
              <h5>Bangaluru,India</h5>
            </div>

          </div>
          <div id="line"></div>
          <div><p>Professinal Level 11</p><p>1884 Points</p></div></div>
        <hr />
        
        <div id="margin">
          <div id="flex">
            <div id="Img">
            <img src="https://s3-alpha-sig.figma.com/img/d4b7/11c1/4a4d2aaaf15dc88eafe6b3ed557b017b?Expires=1651449600&Signature=Qvv0VJMhzrmICL5aHrVibFo1Sk4oTdHs7fH5wUmKjSHCnZT8NthPsKOR5Unr58Jm3FWGzuRURLWulPqHGQZlzXi2Zz-Gl1m0RYB0dUP5rGGcXZANDcq9h8yi4bzOA6fJzcYKUahvHOvNNuywww-H~ppVdDUJ0Fn4dCylvW6Qx4Y5SrweOOPE9oR6lPvY5nQvV1aHjHDbXJsdjjW0C9SxfV3z38r51-2hOUh949VoilKWX1JczlLBv-K7m44yHEBbi8vzlIUEAngbpfpBRpGprHQYCIK6OZmp7EGrgMYQmruIqe0TROn5aqAW0qwYW4JmHzFS8V7odruMrinN2vNnmQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" srcset="" />
            </div>
          <div id="text">
          <h3>Sandhya</h3>
              <h5>Bangaluru,India</h5>
            </div>
          </div>
         
          
          <div id="line2"></div>
          <div><p>Professinal Level 14</p><p>1884 Points</p></div>
          </div>

        <hr />

        <div id="margin">
          <div id="flex">
            <div id="Img">
            <img src="https://s3-alpha-sig.figma.com/img/3343/238f/127b50a4148d9e3de79ccc98a97e785d?Expires=1651449600&Signature=QNz3PPlZSo8-DymWIDpn0QzH~6SB4eDPsrfeVYV8CxS4DmwOCmGHjoiBvDf8YlzFkMJG59vfq9XYjb2pNa4JebPTpV-HT8erfenIfZsl4uFZ5bbsJLoaQk1PGe8Wlrhqsc3NOErR3OnqaL7BIbvHglVxNZ8Yg0HGOeDwf5kbXe8vSSHkZEI4Ct2A0rI0HPIIVo26sNU7VjWKhldeOyHfBK9MXD53sSzoB-c0uiDJb10QPecxUAJrLgmk-YfHEUxwRuAs2TmPLgJWv-~OWOBKt8eT7rh3UdfjBZKzR6abtUpSsySEks~IisQCLU4jPtmlCBRWtrjn-4GgrfE53ZsTqQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" srcset="" />
            </div>
            <div id="text">
            <h3>Elon Tusk</h3>
              <h5>California, USA</h5>
            </div>
          </div>
          <div id="line3"></div>
          <div id="last-text"><p>Professinal Level 6</p><p>1884 Points</p></div>
          </div>
        <hr /> 
    </div>
    <div>
        <button id="btn" onClick={()=>{
            chngtheme(theme==="light"?"dark":"light")
        }}>{theme==="light"?"Dark Mode":"Light Mode"}</button>
        </div>
        </Div>
        
        
        
       </div>
       
  
    )
}
export {Main}