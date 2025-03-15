import Counter from './components/Counter/Counter'
import { createContext } from 'react'
import './App.css'
import { useState } from 'react';
import { useContext } from 'react';

const ThemeContext = createContext();

function ThemeProvider ({ children }){
  const [theme, setTheme] = useState("light");

  const toogleTheme = () => {
    setTheme((prev) => (prev === 'light' ? "dark":'light'))
  }

  return (
    <ThemeContext.Provider value={{theme, toogleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

function ThemeButton (){
  const [theme, toogleTheme] = useContext(ThemeContext);

  return (
    <button onClick={toogleTheme} style={{
        backgroundColor: theme === "light" ? "#FFF": "#333",
        color: theme === "light" ? "#0000": "#FFFF"}}>Cambiar tema</button>
  )
}

function App() {
  return (
    <ThemeProvider>
      <ThemeButton />
    </ThemeProvider>
  )
}

export default App
