import Link from "next/link";
import { getUsers } from "../../users-data"

export default function UsersPage() {
    const users = getUsers();
    return (
        <ul>
            {
                users.map(user => (
                    <li key={user.id}>
                        <Link
                            className="underline text-blue-500 visited:text-purple-500"
                            href={`/user/${user.id}`}
                        >
                            {user.displayName}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}