import { useState } from "react";
import type { User } from "../types/user";

interface UserListProps {
    users: User[];
    onUserSelect: (user: User) => void;
}

function UserList({ users, onUserSelect }: UserListProps) {
    const [search, setSearch] = useState<string>('');
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );  

    return (
        <div>
            <input
                type="text"
                placeholder="Buscar usuario..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{cursor: 'pointer', marginBottom: '10px'}}
            />
            <ul>
                {filteredUsers.map(user => (
                    <li 
                        key={user.id}
                        onClick={() => onUserSelect(user)}
                        style={{cursor: 'pointer'}}
                    >{user.name}
                    </li>
                ))}
            </ul>
            {filteredUsers.length === 0 && <div>No se encontraron usuarios.</div>}
        </div>
    );
}

export default UserList;