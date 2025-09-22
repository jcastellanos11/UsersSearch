import type {User } from "../types/user";
interface UserDetailProps {
    user: User;
}  

function UserDetail({ user }: UserDetailProps) {
    return (
        <div style={{marginTop: '20px'}}>
            <h2>Detalle del Usuario</h2>
            <p><strong>Nombre:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Teléfono:</strong> {user.phone}</p>
            <p><strong>Ciudad:</strong> {user.address.city}</p>
        </div>
    );
}
export default UserDetail;