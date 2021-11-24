import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { getArticles } from './Utils/ApiCalls';

const Articles = ({query}) => {
    const [articles, setarticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(false);
    

useEffect(() => {
    setIsLoading(true);
    getArticles(query).then((articles) => {
        setarticles(articles)
        setIsLoading(false)}).catch((err) => {
            setIsLoading(false);
            console.log(err);
            setErr(true);
        })
}, [query])

if (isLoading) return <p>Loading...</p>;

if (err) return  <h2>Oops something went wrong...</h2>

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