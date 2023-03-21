import { fetchCommentsById } from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";
import PostComment from "./PostComment";

export default function SingleReviewComments({comments, setComments, isLoadingComments, setIsLoadingComments}) {
  const { review_id } = useParams();
  const [commentErr, setCommentErr] = useState(false)
  
  useEffect(() => {
    setIsLoadingComments(true);
    fetchCommentsById(review_id).then((comments) => {
      setComments(comments);
      setIsLoadingComments(false);
    }).catch((err)=>{
      setCommentErr(err)
      setComments(null)
      setIsLoadingComments(false)
    })
  }, [review_id, setComments, setIsLoadingComments]);

  const noComments = () => {
    return (
      <h1>No comments here!</h1>
    )
  }

  const displayComments = (comments) => {
   return isLoadingComments? <p>Loading...</p> : <section id="comments">
    { comments.length === 0 ?noComments() :( 
      <>
      <PostComment/>
      <p id="comment_count">{comments.length} Comments</p>
      {comments.map((comment) => {
      return  <article key={comment.comment_id} className="comment-card">
          <div className="comment-header">
            <p>{comment.author}</p>
            {!isLoadingComments? (
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
    )
  }
      </section>
    }


  return commentErr ? null:(
    <>
     {comments ?  <section id="comments"> {displayComments(comments)} </section>:null}
    </>
  )

}
