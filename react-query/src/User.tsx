import { useQuery } from "@tanstack/react-query"

const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json()
}

function User() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers
    })

    if (isLoading) return <p>Cargando...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <ul>
            {data.map((user: { id: string, name: string }) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
}

export default User
