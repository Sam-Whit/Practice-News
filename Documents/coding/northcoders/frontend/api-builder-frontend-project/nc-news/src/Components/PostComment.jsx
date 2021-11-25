import { useContext, useState } from "react";
import { postComment } from "./Utils/ApiCalls";
import { useParams } from "react-router-dom";
import { UserContext } from "../Contexts/userContext";

const PostComment = () => {
  const [newComment, setNewComment] = useState(null);
  const [posted, setPosted] = useState(false)
  const { user } = useContext(UserContext);
  let { article_id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosted(true);
    postComment(article_id, user.username, newComment)
    .catch((err) => {
      console.dir(err);
    });
  };

  if (posted) {
    return <div>
      <p>Comment posted</p>
    </div>
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="comment"
            placeholder="Enter comment here"
            onChange={(e) => setNewComment(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default PostComment;