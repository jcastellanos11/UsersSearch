import { useEffect, useState } from 'react';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import type { User } from './types/user';

import './App.css'

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data: User[]) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });

  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
   <div>
    <h1>Lista de Usuarios</h1>
    <UserList users={users} onUserSelect={setSelectedUser} />
    {selectedUser && <UserDetail user={selectedUser} />}
   </div>
  )
}

export default App
