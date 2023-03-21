import SingleReview from "./SingleReview"
import SingleReviewComments from "./SingleReviewComments"
import { useState } from "react"
import '../styles/Comments.css'
export default function SinglePage ({setReviews}){
  const [comments, setComments] = useState([]);
  const [isLoadingReviews, setIsLoadingReviews] = useState(true)
  const [err, setError] = useState(false)
  const [isLoadingComments, setIsLoadingComments] = useState(true)
  return (
    <section id='single-page'>
      {err?<h1>Error! {err}</h1>:null}
      <SingleReview  isLoadingReviews={isLoadingReviews} setIsLoadingReviews={setIsLoadingReviews} setReviews={setReviews}  err={err} setError={setError}/>
      <SingleReviewComments isLoadingComments={isLoadingComments} setIsLoadingComments={setIsLoadingComments} comments={comments} setComments={setComments}  />
    </section>
  )
}
