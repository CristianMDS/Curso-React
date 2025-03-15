const StaticComponent = () => {
    const items = ["manzana", "banana", "cereza"]

    return (
        <ul>
            {
                items.map((element, index) => {
                    return <li key={index}>{element}</li>
                })
            }
        </ul>
    )
}
export default StaticComponent