import SingleReview from "./SingleReview"
import SingleReviewComments from "./SingleReviewComments"
import PostComment from "./PostComment"
import { useState } from "react"
import '../styles/Comments.css'
export default function SinglePage ({isLoading, setIsLoading, setReviews}){
  const [comments, setComments] = useState([]);
  return (
    <section id='single-page'>
      <SingleReview  isLoading={isLoading} setIsLoading={setIsLoading} setReviews={setReviews}/>
      <PostComment isLoading={isLoading} setIsLoading={setIsLoading} comments={comments} setComments={setComments}/>
      <SingleReviewComments isLoading={isLoading} setIsLoading={setIsLoading} comments={comments} setComments={setComments}/>
    </section>
  )
}