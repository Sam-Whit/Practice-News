import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { getArticles } from './Utils/ApiCalls';

const Articles = ({query}) => {
    const [articles, setarticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    

useEffect(() => {
    setIsLoading(true);
    getArticles(query).then((articles) => {
        setarticles(articles)
        setIsLoading(false)}).catch((err) => {
            console.log(err)
        })
}, [query])

if (isLoading) return <p>Loading...</p>;

  return <main className="articles">
        <h2>Articles</h2>
        <ul>
            
            {articles.map((article) => {

                return (<li className="articleList" key={article.article_id}>
                <Link to={`/articles/${article.article_id}`}>
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