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

    return <nav className='NavBar'>
        {topics.map((topic) => {
            return <Link to={`/topics/${topic.slug}`} key={topic.slug}>{topic.slug}</Link>
        }) }
    </nav>
};

export default NavBar;