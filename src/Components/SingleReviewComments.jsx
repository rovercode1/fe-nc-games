import { fetchCommentsById } from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";

export default function SingleReviewComments({ isLoading, setIsLoading, comments, setComments}) {
  const { review_id } = useParams();
  const [commentErr, setCommentErr] = useState(null)
  useEffect(() => {
    setIsLoading(true);
    fetchCommentsById(review_id).then((comments) => {
        setComments(comments);
      setIsLoading(false);
    }).catch((err)=>{
      setIsLoading(false)
      setCommentErr(true)
    })
  }, [review_id, setIsLoading, setComments]);

  const displayComments = (comments) => {
    return comments.length === 0?<h1>No comments here!</h1>:( 
      <>
      <p id="comment_count">{comments.length} Comments</p>
      {comments.map((comment) => {
      return  <article key={comment.comment_id} className="comment-card">
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

      })}
      </>
    );
  };

  return isLoading ||commentErr ?null:(
    <>
      <section id="comments"> {displayComments(comments)} </section>
    </>
  )
}
