import {useState} from 'react';
import { votesForArticle} from './Utils/ApiCalls';

const NewVotes = ({article_id, articleVotes}) => {
    const [userVote, setUserVote] = useState(0);
    
    
    const handleClick = (number) => {
        setUserVote((prevNum)=> prevNum + number);
        votesForArticle(article_id, number).catch((err)=>(console.dir(err)))
    };
    
    return(
        <div>
            <p>Community Votes: {articleVotes + userVote}</p>
            <button onClick={()=>handleClick(1)}>Like</button>
            <button onClick={()=>handleClick(-1)}>Dislike</button>
        </div>
    )
}

export default NewVotes;