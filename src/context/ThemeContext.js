import React, { createContext, useState } from "react";

export const ThemeContext = createContext();


const ThemeContextProvider = ({children}) => {
  const [theme, setTheme] = useState("Light");
  

   const toggleTheme = () => {
     setTheme(theme === "Light" ? "Dark" : "Light");
     
     if(theme === 'Light') {
      document.body.classList.remove('--light');
      document.body.classList.add('--dark');
    } else {
      document.body.classList.remove('--dark');
      document.body.classList.add('--light');
    }
    
   };

  return (
  
    <ThemeContext.Provider value={{theme , toggleTheme}}> 
        {children}
    </ThemeContext.Provider>
  );
}
export default ThemeContextProvider;