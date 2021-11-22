import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
return (
    <header className='headerContainer'>
        <Link to="/">
            <h1>Practice News</h1>
        </Link>
    </header>
)
}

export default Header;