import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/User";
import { fetchCommentsById, deleteComment } from "../api";
import { successfulDeletedComment } from "../utils/optimisticRendering";
import ReactTimeAgo from "react-time-ago";

export default function SingleReviewComments({ comments, setComments, err, setErr, isLoadingComments,setLoadingComments }) {
  const { currentUser } = useContext(UserContext);
  const { review_id } = useParams();
  useEffect(() => {
    setLoadingComments(true);
    fetchCommentsById(review_id)
      .then((comments) => {
        setComments(comments);
        setLoadingComments(false);
      })
      .catch((err) => {
        setErr(err)
        setLoadingComments(false);
      });
  }, [review_id, setComments, setErr, setLoadingComments]);

  const handleDelete = (e) => {
    const clickedComment = e.target;
    deleteComment(+clickedComment.id).then(() => {
      successfulDeletedComment(e, setComments);
    });
  };

  const isCurrentUser = (currentUser, comment) => {
    if (currentUser === comment.author) {
      return (
        <button
          id={comment.comment_id}
          className="button"
          onClick={handleDelete}
        >
          Delete
        </button>
      );
    }
  };
  const displayComments = () => {
    return isLoadingComments?<h1>Loading...</h1>:(
     comments.length === 0 ? (
      <h1>No comments here!</h1>
    ) : (
      <section id="comments">
        {comments.map((comment) => {
          return (
            <article
              id={comment.comment_id}
              key={comment.comment_id}
              className="comment-card"
            >
              <div className="comment-header">
                <p>{comment.author}</p>
                {!isLoadingComments ? (
                  <p>
                    <ReactTimeAgo
                      date={new Date(comment.created_at)}
                      locale="en-US"
                    />
                  </p>
                ) : null}
              </div>
              <p className="comment-body">{comment.body}</p>
              <div className="comment-footer">
                <button>{comment.votes} Votes</button>
                {isCurrentUser(currentUser, comment, setComments)}
              </div>
            </article>
          );
        })}
      </section>
    )
    )
  };

  return err? null: displayComments()
}
