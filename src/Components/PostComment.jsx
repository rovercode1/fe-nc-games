import { useState } from "react"
import { postCommentById, fetchUsers } from "../api"
import { useParams } from "react-router-dom";
import { optimisticPostedComment } from "../handle";
export default function PostComment({ comments, setComments}){
  const { review_id } = useParams();
  const [postedComment, setPostedComment] = useState('')
  const [currentUser, setCurrentUser] = useState('grumpy19')
  const [postedErr, setPostErr] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault();
    const postInput = e.target.childNodes[0]
    const postButton = e.target.childNodes[1]
    optimisticPostedComment(postInput, postButton, setPostedComment)
    postCommentById(review_id, currentUser, postedComment ).then((newComment)=>{
      setPostErr(false)
      setComments((prevComments)=> [newComment,...prevComments])
    }).catch(()=>{
      setPostErr(true)
    })
  }

  return (
  <section id='post-comment'>
    <form action="" onSubmit={handleSubmit}>
      <textarea rows='6'  onChange={(event) => setPostedComment(event.target.value)} value={postedComment} required></textarea>
      <button type="submit">Submit</button>
      {postedErr?<p>Oops! Something went wrong</p>:false}
    </form>
  </section>
  )
}