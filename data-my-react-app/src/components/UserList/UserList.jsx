import { useEffect, useState } from "react"

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((e) => console.error("Error catchin data: ", e))
    }, )

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
export default UserList