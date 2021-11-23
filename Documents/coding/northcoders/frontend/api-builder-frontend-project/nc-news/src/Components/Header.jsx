import React from "react";
import {Link} from "react-router-dom";

const Header = (setQuery) => {
return (
    <header className='headerContainer'>
        <Link to="/" onClick={(()=>setQuery(""))}>
            <h1>Practice News</h1>
        </Link>
    </header>
)
}

export default Header;