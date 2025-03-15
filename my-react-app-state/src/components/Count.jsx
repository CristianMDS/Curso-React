import { useState } from "react"; // utilizado para actualizar los valores iniciales de las variables
import { useNavigate } from "react-router-dom";

const Counter = () => {

    const [count, setCount] = useState(0);
    const navigate = useNavigate()
    const home = () => {
        navigate('/')
    }
    return (
        <div>
            <nav>
                <button onClick={home}>🏠</button>
            </nav>
            <p> El contador esta en: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )

}

export default Counter;