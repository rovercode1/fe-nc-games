import SingleReview from "./SingleReview"
import SingleReviewComments from "./SingleReviewComments"
import PostComment from "./PostComment"
import { useState } from "react"
import '../styles/Comments.css'
export default function SinglePage ({isLoading, setIsLoading, setReviews}){
  const [comments, setComments] = useState([]);
  const currentUser = 'cooljmessy'
  return (
    <section id='single-page'>
      <SingleReview  isLoading={isLoading} setIsLoading={setIsLoading} setReviews={setReviews} comments={comments}/>
      <PostComment isLoading={isLoading} setIsLoading={setIsLoading} comments={comments} setComments={setComments} currentUser={currentUser}/>
      <SingleReviewComments isLoading={isLoading} setIsLoading={setIsLoading} comments={comments} setComments={setComments} currentUser={currentUser}/>
    </section>
  )
}