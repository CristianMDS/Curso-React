import { useContext } from "react"
import ThemeContext from "./ThemeProvider"

const ThemeButton = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <button 
            onClick={toggleTheme}
            style={{
                backgroundColor: theme === "light" ? "#FFFF": "#0000",
                color: theme === "light" ? "#000":"#FFF"
            }}>
            Cambiar Color
        </button>
    )
}

export default ThemeButton