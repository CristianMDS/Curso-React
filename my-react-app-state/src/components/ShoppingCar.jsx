import { useState } from "react";
import ToggleButton from "./Toggle";
import { useNavigate } from "react-router-dom";

const stock = 100
const ShoppingCar = () => {

    const [count, setCount] = useState(0)
    const [shoppingCart, setShoppingCart] = useState(0)

    const decrement = () => {
        setCount(prevCount => (prevCount > 0 ? prevCount - 1: prevCount));
    }

    const deleteShopping = () => {
        setShoppingCart(prevShopping => (prevShopping > 0 ? prevShopping - 1: prevShopping))
    }

    const navigate = useNavigate();
    const home = () => {
        navigate('/');
    }

    return (
        <div>
            <nav>
                <button onClick={home}>🏠</button>
            </nav>
            <h1>SHOPPING CAR</h1>
            <p>Carrito de compras: {shoppingCart} <button style={{backgroundColor: 'pink'}} onClick={deleteShopping}>Cancelar una compra</button></p>
            <h3>Papitas de Limon</h3>
            <div>
                <button onClick={decrement}>-</button>
                    Cantidad: {count} 
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
            <button style={{backgroundColor: 'lightgreen'}} onClick={() => setShoppingCart(shoppingCart + 1)}>Comprar</button>
            <p> Stock: {stock-count} </p>

            <ToggleButton />
        </div>
    )

}

export default ShoppingCar;