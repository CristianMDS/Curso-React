import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const CounterWithEffect = () => {

    const [count, setCount] = useState(0);

    const notZero = () => {
        setCount(setNum => (setNum > 0 ? setNum - 1: setNum));
    }

    useEffect(() => {
        console.log('El numero cambio a:' + count)
    }, [count])

    const navigate = useNavigate()
    const home = () => {
        navigate('/CounterWithEffect')
    }

    return (
        <div>
            <nav>
                <button onClick={home}>🏠</button>
            </nav>
            <h1>THIS IS A COUNT WITH EFFECT</h1>
            <p>El numero es: </p><h2>{count}</h2>
            <button onClick={notZero}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )

}

export default CounterWithEffect;