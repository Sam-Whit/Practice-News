import { useContext } from "react";
import { UserContext } from "../Contexts/userContext"
import Login from "./Login";


export default function RequireLogin({children}) {
    const {isLoggedIn} = useContext(UserContext);

    return isLoggedIn ? children : <Login/>;
}