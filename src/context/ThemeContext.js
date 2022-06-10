import React, { createContext, useState } from "react";

export const ThemeContext = createContext();


const ThemeContextProvider = ({children}) => {
  const [theme, setTheme] = useState("Light");
  

   const toggleTheme = () => {
     setTheme(theme === "Light" ? "Dark" : "Light");
   };

  return (
  
    <ThemeContext.Provider value={{theme , toggleTheme}}> 
        {children}
    </ThemeContext.Provider>
  );
}
export default ThemeContextProvider;