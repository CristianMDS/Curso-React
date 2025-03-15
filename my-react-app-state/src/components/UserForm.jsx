import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

const UserForm = () => {

    const [name, setName] = useState('');

    const navigate = useNavigate()
    const home = () => {
        navigate('/')
    }

    return (
        <div>
            <nav>
                <button onClick={home}>🏠</button>
            </nav>
            <h1>FORMULARIO DE NOMBRE</h1>
            <input type="text" placeholder="Ingresa tu nombre" value={name} onChange={(event) => setName(event.target.value)} />
            <p>Hola {name || "visitante"}</p>
        </div>
    )
}

export default UserForm