import {Link} from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../Contexts/userContext";

const Header = (setQuery) => {
    const { user, logOut, isLoggedIn } = useContext(UserContext);

    const HideLoggedInAs = ({children}) => {
        return (
            <>
              {isLoggedIn && children}
            </>
          );
    }
return (
    <header className='headerContainer'>
        <HideLoggedInAs>
        <p> Logged in as: {user.username}</p>
        <button onClick={() =>{logOut()}}>Log Out</button>
        </HideLoggedInAs>

        <Link to="/" onClick={(()=>setQuery(""))}>
            <h1>Practice News</h1>
        </Link>
      </header>
  
)
}

export default Header;