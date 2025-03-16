import { useNavigate } from "react-router-dom";

const CounterWithCustomHook = () => {
    const navigate = useNavigate();
    const home = () => {
        navigate('/')
    }

    return (
        <div>
            <h1>Counter</h1>
            <h3>PERO CON UN CUSTOM HOOK</h3>
            <button onClick={home}>🏠</button>
        </div>
    )
}

export default CounterWithCustomHook;