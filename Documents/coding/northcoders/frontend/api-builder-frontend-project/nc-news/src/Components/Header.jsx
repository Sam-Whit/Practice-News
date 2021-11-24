import {useContext} from "react";
import {Link} from "react-router-dom";
import { UserContext } from '../Contexts/userContext';

const Header = (setQuery) => {
    const { user, setUser } = useContext(UserContext);
return (
    <header className='headerContainer'>
        <Link to="/" onClick={(()=>setQuery(""))}>
            <h1>Practice News</h1>
        </Link>
      {/* <p id="loggedInUser">user: {user}</p> */}
      </header>
  
)
}

export default Header;