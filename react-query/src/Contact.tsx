import { useQuery } from '@tanstack/react-query'

function Contact() {
    const { data } = useQuery<{ id: string; name: string }[]>({
        queryKey: ['users'],
    })

    return (
        <ul>
            {data &&
                data.map((user) => <li key={user.id}>{user.name}</li>)}
        </ul>
    )
}

export default Contact
