import {useEffect, useState} from "react";
import{Link} from "react-router-dom";
import { gettopics } from "./Utils/ApiCalls";
import { useParams } from "react-router"

const NavBar = ({setQuery}) => {
    const [topics, settopics] = useState([]);
    
    useEffect(() =>{
        gettopics().then((topics) => {
        settopics(topics)
        })
    }, []);

    return <nav className='NavBar'>
        {topics.map((topic) => {
            return <Link to={`/articles?topic=z${topic.slug}`} key={topic.slug} value={topic.slug} onClick={() => {setQuery(topic.slug)}}>{topic.slug}</Link>
        }) }
    </nav>
};

export default NavBar;