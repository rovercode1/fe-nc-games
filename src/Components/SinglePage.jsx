import SingleReview from "./SingleReview"
import SingleReviewComments from "./SingleReviewComments"
import PostComment from "./PostComment"
export default function SinglePage ({isLoading, setIsLoading, setReviews}){
  return (
    <section id='single-page'>
      <SingleReview  isLoading={isLoading} setIsLoading={setIsLoading} setReviews={setReviews}/>
      <PostComment isLoading={isLoading} setIsLoading={setIsLoading} />
      <SingleReviewComments isLoading={isLoading} setIsLoading={setIsLoading} />
    </section>
  )
}