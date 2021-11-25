import { useParams, Link, useNavigate  } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getArticleComments, deleteComment } from "./Utils/ApiCalls";
import { UserContext } from "../Contexts/userContext";
import PostComment from "./PostComment";

export const Comments = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const {article_id} = useParams();
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [postingComment, setPostingComment] = useState(false);


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

    const PostCommentHide = ({ children }) => {
        const [isOpen, setIsOpen] = useState(false);
    
        const toggleOpen = () => setIsOpen((open) => !open);
    
        return (
          <>
            <button onClick={toggleOpen}>
              {isOpen ? "Hide comment box" : "Post comment"}
            </button>
            {isOpen && children}
          </>
        );
      };

    const [addedVotes, setAddedVotes] = useState(0);

    if (isLoading) return <p>Loading...</p>;
    
    return <div className="commentscontainer">
         <PostCommentHide>
        <PostComment/>
      </PostCommentHide>
                {postingComment ? <PostComment setPostingComment={setPostingComment} comments={comments} setComments={setComments}/> : <></>}
        {comments.map((comment) => {
return (
        <li key={comment.comment_id}>
        <p>{comment.author}</p>
        <p>Date posted: {new Date(comment.created_at).toLocaleDateString()}</p>
        <p>{comment.body}</p>
        <p>Votes: {comment.votes}</p>
        <button
                disabled={!(comment.author === user.username)}
                onClick={() => {
                  deleteComment(comment.comment_id).then(() => { navigate(`/articles/${article_id}/comments`)});
                }}
              >
                Delete comment
              </button>
        </li>)
        })}
    </div>;
}