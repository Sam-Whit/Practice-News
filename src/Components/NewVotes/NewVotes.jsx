import {useState} from 'react';
import { votesForArticle} from '../Utils/ApiCalls';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

import "./NewVotes.css";

const NewVotes = ({article_id, articleVotes}) => {
    const [userVote, setUserVote] = useState(0);
    
    const handleClick = (number) => {
        setUserVote((prevNum)=> prevNum + number);
        votesForArticle(article_id, number).catch((err)=>(console.dir(err)))
        setUserVote((prevNum) => prevNum - number);
    };
    
    return(
        <div className="votingArea">
            <FontAwesomeIcon onClick={()=>handleClick(1)} icon={faThumbsUp} className={"icon"} title="Vote up" />

            {
                isNaN(articleVotes) ?
                <p />
                : 
                <p>{articleVotes + userVote}</p>
            }

            <FontAwesomeIcon onClick={()=>handleClick(-1)} icon={faThumbsDown} className={"icon"} title="Vote down" />
        </div>
    )
}

export default NewVotes;