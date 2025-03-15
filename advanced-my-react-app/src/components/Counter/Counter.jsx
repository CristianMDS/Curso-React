import { useReducer } from "react"

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {count: state.count + 1}
            break;
        case "decrement":
            if (state.count > 0)
                return {count: state.count - 1}
            else 
                return {count: state.count}
            break;
    
        default:
            return state;
            break;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});

    return (
        <div>
            <h1>CONTADOR</h1>
            <p><strong>Valor Actual: {state.count}</strong></p>
            <button onClick={() => dispatch({type: "decrement"})}>-</button>
            <button onClick={() => dispatch({type: "increment"})}>+</button>
        </div>
    )
}

export default Counter