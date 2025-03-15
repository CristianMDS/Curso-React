import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();

    const goToForm = () => {
        navigate('./UserForm')
    };

    const goToShop = () =>{
        navigate('./ShoppingCar')
    };

    const goToCount = () =>{
        navigate('./Count')
    };

    const goToCountEffect = () => {
        navigate('./CounterWithEffect')
    }

    return (
        <div>
            <h1>Menu</h1>
            <button onClick={goToCount}>Count</button>
            <button onClick={goToShop}>Shop</button>
            <button onClick={goToForm}>User Form</button>
            <button onClick={goToCountEffect}>Count With Effect</button>
        </div>
    )

}

export default Home