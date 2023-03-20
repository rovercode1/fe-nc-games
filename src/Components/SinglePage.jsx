import SingleReview from "./SingleReview"
import SingleReviewComments from "./SingleReviewComments"
import PostComment from "./PostComment"
import { useState } from "react"
import '../styles/Comments.css'
export default function SinglePage ({setReviews}){
  const [comments, setComments] = useState([]);
  const [err, setErr] = useState(null);
  const [isLoadingComments, setLoadingComments] = useState(false)
  return (
    <section id='single-page'>
      <SingleReview   setReviews={setReviews} comments={comments} err={err} setErr={setErr}/>
      <PostComment  comments={comments} setComments={setComments}  err={err} setErr={setErr} isLoadingComments={isLoadingComments} />
      <SingleReviewComments  comments={comments} setComments={setComments}  err={err} setErr={setErr} isLoadingComments={isLoadingComments} setLoadingComments={setLoadingComments}/>
    </section>
  )
}