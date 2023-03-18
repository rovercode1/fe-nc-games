import { useEffect, useContext } from "react";
import { UserContext } from "../contexts/User";
import { fetchCommentsById } from "../api";
import { useParams } from "react-router-dom";
import { displayComments } from "../utils/display";


export default function SingleReviewComments({ isLoading, setIsLoading, comments, setComments }) {
  const { currentUser } = useContext(UserContext);
  const { review_id } = useParams();
  useEffect(() => {
    setIsLoading(true);
    fetchCommentsById(review_id).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [review_id, setIsLoading, setComments]);

  const displayComments = (comment) => {
    return comments.length === 0?<h1>No comments here!</h1>:( 
      <article key={comment.comment_id} className="comment-card">
        <div className="comment-header">
          <p>{comment.author}</p>
          {!isLoading ? (
            <p> Posted  <ReactTimeAgo
                date={new Date(comment.created_at)}
                locale="en-US"
              />
            </p>
          ) : (
            false
          )}
        </div>
        <p className="comment-body">{comment.body}</p>
        <div className="comment-footer">
          <span>
            <p>{comment.votes} Votes</p>
          </span>
        </div>
      </article>
    );
  };
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section id="comments">
      {comments.length < 1 ? <h1 id="no-comments">No Comments here!</h1>:false}
      {comments.map((comment) => {
        return displayComments(comment, comments, isLoading, setComments, currentUser);
      })}
    </section>
  );
}
