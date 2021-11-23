import { useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import '../App.css';
import { getArticles } from './Utils/ApiCalls';

const Articles = () => {
    const [articles, setarticles] = useState([]);
    const params = useParams();
    
    console.log(params, "in Game");

useEffect(() => {
    getArticles().then((articles) => {
        setarticles(articles)}).catch((err) => {
            console.log(err)
        })
}, [])

  return <main className="articles">
        <h2>Articles</h2>
        <ul>
            
            {articles.map((article) => {

                return (<li className="articleList" key={article.article_id}>
                <Link to={`/api/articles/${article.article_id}`}>
                <h3>{article.title}</h3>
                </Link>
                <p>Topic: {article.topic}</p>
                <p>Date: {new Date(article.created_at).toLocaleDateString()}</p>
                <p>Community Votes: {article.votes}</p>
                <p>Comments: {article.comment_count}</p>
                </li>
                )
            })}
        </ul>
        </main>
}

export default Articles;