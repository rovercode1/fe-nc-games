import SingleReview from "./SingleReview"
import SingleReviewComments from "./SingleReviewComments"
import PostComment from "./PostComment"
import { useState } from "react"
import '../styles/Comments.css'
export default function SinglePage ({setReviews}){
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [err, setError] = useState(null)
  return (
    <section id='single-page'>
      {isLoading?<h1>Loading...</h1>:null}
      {err?<h1>Error! {err}</h1>:null}
      <SingleReview  isLoading={isLoading} setIsLoading={setIsLoading} setReviews={setReviews}  err={err} setError={setError}/>
      <PostComment isLoading={isLoading} setIsLoading={setIsLoading} comments={comments} setComments={setComments} err={err}/>
      <SingleReviewComments isLoading={isLoading} setIsLoading={setIsLoading} comments={comments} setComments={setComments}  />
    </section>
  )
}
