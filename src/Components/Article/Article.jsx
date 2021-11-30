import { useParams } from "react-router"
import { useEffect, useState } from 'react';
import { getSingleArticle } from "../Utils/ApiCalls";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faUser, faTag, faComment } from "@fortawesome/free-solid-svg-icons";
import NewVotes from '../NewVotes/NewVotes';

import "./Article.css";

const Article = () => {
    const navigate = useNavigate();
    const [article, setArticle] = useState({});
    const { article_id } = useParams();
    useEffect(() => {
		getSingleArticle(article_id).then(article => {
			setArticle(article);
            console.log(article);
		});

    })
    return (
        <div className="article-detail-card">
            <div>
                <NewVotes article_id={article_id} articleVotes={article.votes}/>
            </div>
            <div>
                <h1>{article.title}</h1>

                <div className="metadata">
                    <div>
                        <FontAwesomeIcon icon={faTag} className={"icon"} />
                        {article.topic}</div>
                    <div>
                        <FontAwesomeIcon icon={faCalendar} className={"icon"} />
                        {new Date(article.created_at).toLocaleDateString('en-GB', {  
                            day : 'numeric',
                            month : 'short',
                            year : 'numeric'
                        })}</div>
                                            <div>
                        <FontAwesomeIcon icon={faUser} className={"icon"} />
                        {article.author}</div>
                </div>

                <p className="article-body">{article.body}</p>
 
                <button className="comment-btn" onClick={() => {
                    navigate(`/articles/${article.article_id}/comments`)}}>
                    <FontAwesomeIcon icon={faComment} className={"icon"} />
                        Comments
                </button>
            </div>
        </div>
    )
}


export default Article
