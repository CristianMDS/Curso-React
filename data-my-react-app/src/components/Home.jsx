import { Navigate, useNavigate } from "react-router-dom"


const Home = () => {
    const navigate = useNavigate();

    const staticComponent = () => {
        navigate("./static_component")
    }

    const dinamicComponent = () => {
        navigate("./dinamic_component")
    }

    const trycatchComponent = () => {
      navigate("./try_component")
    }

    const searchComponent = () => {
      navigate("./search_component")
    }

    return (
        <div className='div1'>
          <h1>DATA COMPONENTS</h1>
          <button onClick={staticComponent}>Componente estatico</button>
          <button onClick={dinamicComponent}>Componente Dinamico (API)</button>
          <button onClick={trycatchComponent}>Manejo de errores (API - TryCatch)</button>
          <button onClick={searchComponent}> Buscador con API (Posts)</button>
        </div>
    )
}

export default Home;