import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import SelectSortBy from './SelectSortBy';
import { getArticles } from './Utils/ApiCalls';

const Articles = ({query}) => {
    const [articles, setarticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(false);
    const [sortBy, setSortBy] = useState(null);
    

useEffect(() => {
    setIsLoading(true);
    getArticles(query, sortBy).then((articles) => {
        setarticles(articles)
        setIsLoading(false)}).catch((err) => {
            setIsLoading(false);
            console.log(err);
            setErr(true);
        })
}, [query, sortBy])

if (isLoading) return <p>Loading...</p>;

if (err) return  <h2>Oops something went wrong...</h2>

  return <main className="articles">
        <h2>Articles</h2>
        <SelectSortBy sortBy={sortBy} setSortBy={setSortBy}/>
        <ul>
            
            {articles.map((article) => {

                return (<li className="articleList" key={article.article_id}>
                <Link to={`/articles/${article.article_id}`}>
                <h3>{article.title}</h3>
                </Link>
                <p>Topic: {article.topic}</p>
                <p>Author: {article.author}</p>
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