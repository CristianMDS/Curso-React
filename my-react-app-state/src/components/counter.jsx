import { useState } from "react"; // utilizado para actualizar los valores iniciales de las variables

const Counter = () => {

    const [count, setCount] = useState(0);
    return (
        <div>
            <p> El contador esta en: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )

}

export default Counter;