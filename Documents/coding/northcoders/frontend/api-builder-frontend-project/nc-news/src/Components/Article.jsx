import { useParams } from "react-router"
import { useEffect, useState } from 'react';
import { getSingleArticle } from "./Utils/ApiCalls";
import { useNavigate } from 'react-router-dom';

const Article = () => {
    const navigate = useNavigate();
    const [article, setArticle] = useState({});
    const { article_id } = useParams();
    useEffect(() => {
		getSingleArticle(article_id).then(article => {
			setArticle(article);
		});

    })
    return (
        <div>
        <h1>{article.title}</h1>
        <h2>{article.topic}</h2>
         <h3>Date: {new Date(article.created_at).toLocaleDateString()}</h3>
         <h3>Author: {article.author}</h3>
        <p>{article.body}</p>
        <p>Votes: {article.votes}</p>
        <button onClick={() => {
                navigate('/').catch((err) => {console.log(err)})}}>
                    Comments
			</button>
        </div>
    )
}


export default Article
