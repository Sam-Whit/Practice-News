import { UserContext } from "../Contexts/userContext";
import { useContext, useEffect, useState } from "react";
import { getUsers } from "../Components/Utils/ApiCalls";

export default function Login() {
    const { setUser } = useContext(UserContext);
    const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
}, [])
console.log(users)
return (
    <main className="users-container">
        {users.map((user) => {
            return <div key={user.username} className="user-card">
                <h2>{user.username}</h2>
                <button onClick={() => {
                    setUser(user);
                }}>
                    set user to {user.username}
                </button>
            </div>
        })}
    </main>
)
}