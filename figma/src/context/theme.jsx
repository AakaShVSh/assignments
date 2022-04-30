import { Children, createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

export const ThemeContexProvider = ({children})=>{
    const [theme , chngtheme] = useState("light")
    
     return <ThemeContext.Provider value={{theme,chngtheme}}>{children}</ThemeContext.Provider>

}