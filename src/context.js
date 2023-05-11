import { createContext, useReducer } from "react";

export const defaultThemes = {
  dark: true
};

const updateTheme = (state, action) =>{
  console.log(state, action)
  switch(action){
    case 'dark':
      return {dark: true}
    case 'light':
      return {dark: false}
  }
}
export const ThemeContext = createContext(defaultThemes)

const ThemeProvider = ({children}) =>{
  const [themes, dispatch] = useReducer(updateTheme, defaultThemes)
  console.log(themes)
  return(
    <ThemeContext.Provider value={{themes, dispatch}}>
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeProvider;