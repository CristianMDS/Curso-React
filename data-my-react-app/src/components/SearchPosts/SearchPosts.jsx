import { useEffect, useState } from "react";

const SearchPosts = () => {
    const [query, setQuery] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?id=${query}`)
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error("Error fetching data: ", error))
    }, [query]);

    return (
        <div>
            <h1>Posts</h1>
            <input 
                type="text" 
                placeholder="Busca por el id..." 
                value={query} 
                onChange={() => setQuery(event.target.value)} />
            <ul>
                {
                    posts.map((post) => {
                        return <li key={post.id}>{post.body}</li>
                    })
                }

            </ul>

        </div>
    )
}

export default SearchPosts;