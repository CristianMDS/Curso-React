import { useEffect, useState } from "react"

const UserListWithLoading = () => {
    const [users, setUsers] = useState([]);
    const [loading, isLoading] = useState(true)
    const [error, setError] = useState(null)



    useEffect(() => {
        const userAsync = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                if (!response.ok)
                    throw new Error('Error al obtener datos');

                const data = await response.json()
                setUsers(data);
            } catch (error) {
                setError(error);
            } finally {
                isLoading(false);
            }
        }

        userAsync();
    }, [])

    if(isLoading){
        return <p>Cargando...</p>
    }

    if(error){
        return <p>Error: {error.message}</p>
    }

    return (
        <div>
            <h1>Lista de usuario</h1>
            <ul>
                {
                    users.map((user) => {
                        return <li key={user.id}>{user.name}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default UserListWithLoading