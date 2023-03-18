import { useState, useContext } from "react"
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/User";
import { postCommentById } from "../api"
import { successfulPostedComment, postingComment, unsuccessfulPostedComment } from "../utils/handle";
import '../styles/Comments.css'

export default function PostComment({setComments}){
  const { currentUser } = useContext(UserContext);
  const { review_id } = useParams();
  const [postedComment, setPostedComment] = useState('')
  const [postedErr, setPostErr] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault();
    const postInput = e.target.childNodes[0]
    const postButton = e.target.childNodes[1]
    postingComment(postInput, postButton)
    postCommentById(review_id, currentUser, postedComment ).then((newComment)=>{
      successfulPostedComment(postInput, postButton, setPostedComment)
      setPostErr(false)
      setComments((prevComments)=> [newComment,...prevComments])
    }).catch(()=>{
      unsuccessfulPostedComment(postInput, postButton, setPostedComment)
      setPostErr(true)
    })
  }

  return (
  <section id='post-comment'>
    <form action="" onSubmit={handleSubmit}>
      <textarea rows='4'  onChange={(event) => setPostedComment(event.target.value)} value={postedComment} required></textarea>
      <button type="submit">Submit</button>
      {postedErr?<p>Oops! Something went wrong</p>:false}
    </form>
  </section>
  )
}