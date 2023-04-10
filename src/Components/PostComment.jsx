import { useState, useContext } from "react"
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/User";
import { postCommentById } from "../api"
import { successfulPostedComment, postingComment, unsuccessfulPostedComment } from "../utils/optimisticRendering";
import '../styles/Comments.css'
import '../App.css'

export default function PostComment({setComments, err, isLoadingComments}){
  const { currentUser } = useContext(UserContext);
  const { review_id } = useParams();
  const [postedComment, setPostedComment] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault();
    const postInput = e.target.childNodes[0]
    const postButton = e.target.childNodes[1]
    postingComment(postInput, postButton)
    postCommentById(review_id, currentUser, postedComment )
    .then((newComment)=>{
      successfulPostedComment(postInput, postButton, setPostedComment)
      setComments((prevComments)=> [newComment,...prevComments])
    }).catch(()=>{
      unsuccessfulPostedComment(postInput, postButton, setPostedComment)

    })
  }

  const loadingPostComment= ()=>{
    return <div id="loading-post-comment">
      Loading...
    </div>
    
  }

  const displayPostComment = ()=>{
    return isLoadingComments? loadingPostComment():
    <section id='post-comment'>
    <form action="" onSubmit={handleSubmit}>
      <textarea rows='4'  onChange={(event) => setPostedComment(event.target.value)} value={postedComment} required></textarea>
      <button type="submit">Submit</button>
    </form>
  </section>
  }
  return err ? null : displayPostComment()
}