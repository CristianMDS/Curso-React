import { useEffect, useState } from "react";

const AlertaTemporal = ({mensaje, duracion}) => {
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(flase);
        }, duracion);

        return () => clearTimeout(timer)
    }, [duracion]);

    if (!visible) return null;

    return (
        <div style={{ padding: '10px', backgroundColor: 'lightblue', borderRadius: '5px' }}>
            {mensaje}
        </div>
    );
}

export default AlertaTemporal;