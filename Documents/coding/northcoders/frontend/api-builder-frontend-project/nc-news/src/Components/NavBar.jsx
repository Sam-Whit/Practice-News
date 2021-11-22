import {useEffect, useState} from "react";
import{Link} from "react-router-dom";
import { gettopics } from "./Utils/ApiCalls";

const NavBar = () => {
    const [topics, settopics] = useState([]);

    useEffect(() =>{
        gettopics().then((topics) => {
        settopics(topics)
        })
    }, []);

    console.log(topics);
    return <nav className='NavBar'>
        {/* {articles.map((topic) => {
            return <Link to={""}></Link>
        }) } */}
    </nav>
};

export default NavBar;