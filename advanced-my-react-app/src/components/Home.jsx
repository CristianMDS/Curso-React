import { Navigate, useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();

    function customHook(){
        navigate('./custom_hook')
    }

    return (
        <div>
            <h1>
                Elementos Avanzados
            </h1>
            <button onClick={customHook}>
                Hook Custom
            </button>
        </div>
    )

}

export default Home;