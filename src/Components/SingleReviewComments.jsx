import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/User";
import { fetchCommentsById, deleteComment } from "../api";
import { successfulDeletedComment } from "../utils/optimisticRendering";
import ReactTimeAgo from "react-time-ago";
import PostComment from "./PostComment";
import VotesButton from "./VotesButton";
export default function SingleReviewComments({ comments, setComments, err, setErr, isLoadingComments, setIsLoadingComments }) {
  const { currentUser } = useContext(UserContext);
  const { review_id } = useParams();
  const [commentErr, setCommentErr] = useState(false);
  
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
    return isLoadingComments?<h1>Loading comments...</h1>:(
       comments.length === 0 ?noComments() :( 
     ( <section id="comments">
        <PostComment setComments={setComments} err={err} isLoadingComments={isLoadingComments} />
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
                <VotesButton comment={comment}/>
                {isCurrentUser(currentUser, comment, setComments)}
              </div>
            </article>
          );
        })}
        
      </section>
    )

    )
    )
  }


return commentErr ? null:(
  <>{comments ? displayComments(comments):null}</>
)
}