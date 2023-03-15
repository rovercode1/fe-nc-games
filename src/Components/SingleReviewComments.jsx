import { fetchCommentsById } from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";

export default function SingleReviewComments({ isLoading, setIsLoading }) {
  const { review_id } = useParams();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetchCommentsById(review_id).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [review_id, setIsLoading]);

  const displayComments = (comment) => {
    return comments.length === 0?console.log('yep'):( 
      <article key={comment.comment_id} className="comment-card">
        <div className="comment-header">
          <p>{comment.author}</p>
          {!isLoading ? (
            <p>
              Posted  <ReactTimeAgo
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
      {comments.length < 1 ? <h1 id="no-comments">No Comments here!</h1>:console.log('no')}
      {comments.map((comment) => {
        return displayComments(comment);
      })}
    </section>
  );
}
