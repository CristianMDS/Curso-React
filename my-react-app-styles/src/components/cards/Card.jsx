import './card.css'
import Genos from '../../assets/genos.jpeg'
const Card = () => {
    return (
        <div className="card">
            <div className='head'>
                <img src={Genos} alt='genos'/>
                <h3>Clasificacion: <strong>S</strong></h3>
            </div>
            <div className='body'>
                <p>Un cyborg que busca vengar la muerte de su familia a manos de un misterioso ser conocido como "Mad Cyborg". Genos es serio, decidido y extremadamente leal, especialmente a su maestro, Saitama.</p>
                <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 pointer-cursor'>🔥</button>
            </div>
        </div>
    )
}

export default Card