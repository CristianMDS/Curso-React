import React, { useState } from "react"
import AlertaTemporal from "./alerta_temporal";

const ToggleButton = () => {
        
    const [isActive, setIsActive] = useState(false);
    const Accion = () => {
        setIsActive(!isActive);
    }
    return (
        <div>
            <button onClick={Accion}>
                {
                   
                   isActive ? "💖": "💔"

                }
            </button>
            {
                isActive ? <AlertaTemporal mensaje="👍 Agregado a favoritos!" duracion={3000} />: <AlertaTemporal mensaje="❌ Eliminado de Favoritos!" duracion={3000} />
            }
        </div>
    )

}
export default ToggleButton