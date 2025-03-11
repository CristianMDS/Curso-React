import { useState } from "react";
const stock = 100
const CarShopping = () => {

    const [count, setCount] = useState(0)
    const [shoppingCart, setShoppingCart] = useState(0)

    const decrement = () => {
        setCount(prevCount => (prevCount > 0 ? prevCount - 1: prevCount));
    }

    const deleteShopping = () => {
        setShoppingCart(prevShopping => (prevShopping > 0 ? prevShopping - 1: prevShopping))
    }

    return (
        <div>
            <p>Carrito de compras: {shoppingCart} <button onClick={deleteShopping}>Cancelar una compra</button></p>
            <h3>Papitas de Limon</h3>
            <div>
                <button onClick={decrement}>-</button>
                    Cantidad: {count} 
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
            <button onClick={() => setShoppingCart(shoppingCart + 1)}>Comprar</button>
            <p> Stock: {stock-count} </p>
        </div>
    )

}

export default CarShopping;