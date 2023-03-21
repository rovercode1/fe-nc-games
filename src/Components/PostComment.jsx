import { useState } from "react"
import { postCommentById } from "../api"
import { useParams } from "react-router-dom";
import { optimisticPostedComment } from "../handle";

export default function PostComment({setComments, isLoadingComments, err}){
  const { review_id } = useParams();
  const [postedComment, setPostedComment] = useState('')
  const currentUser = 'grumpy19'
  const handleSubmit = (e)=>{
    e.preventDefault();
    const postInput = e.target.childNodes[0]
    const postButton = e.target.childNodes[1]
    optimisticPostedComment(postInput, postButton, setPostedComment)
    postCommentById(review_id, currentUser, postedComment )
    .then((newComment)=>{
      setComments((prevComments)=> [newComment,...prevComments])
    })
  }

  const displayPostComment = ()=>{
   return isLoadingComments ? null : (
    <section id='post-comment'>
    <form action="" onSubmit={handleSubmit}>
      <textarea rows='6'  onChange={(event) => setPostedComment(event.target.value)} value={postedComment} required></textarea>
      <button type="submit">Submit</button>
    </form>
  </section>
   )
  }

  return err ? null: displayPostComment()

}