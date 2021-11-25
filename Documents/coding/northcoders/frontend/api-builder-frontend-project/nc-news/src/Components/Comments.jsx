import { useParams, Link  } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleComments } from "./Utils/ApiCalls";

export const Comments = () => {
    const {article_id} = useParams();
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getArticleComments(article_id).then((comments) => {
            console.log(comments);
            setComments(comments)
            setIsLoading(false);
        }).catch((err)=>{
            console.dir(err)
        })
    }, [article_id]);

    const [addedVotes, setAddedVotes] = useState(0);

    if (isLoading) return <p>Loading...</p>;
    
    return <div className="commentcontainer">
        {comments.map((comment) => {
return (
        <li>
        <p>{comment.author}</p>
        <p>Date posted: {new Date(comment.created_at).toLocaleDateString()}</p>
        <p>{comment.body}</p>
        <p>Votes: {comment.votes}</p>
        </li>)
        })}
    </div>;
}