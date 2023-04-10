import { useEffect, useState } from "react";
import { updateReviewVotes, updateCommentVotes } from "../api";
import { successfulVotedReview } from "../utils/optimisticRendering";
export default function VotesButton ({review, comment}){
  
  const [inc_votes, setIncVotes] = useState('0')
  useEffect(()=>{
  if(review){
    updateReviewVotes(review.review_id, inc_votes)
  }else{
    updateCommentVotes(comment.review_id, comment.comment_id, inc_votes)
  }
  
  },[inc_votes])
  const handleVotes = (e)=>{
  const button = e.target
  successfulVotedReview(button)
  const isPressed =  button.className === 'button' 
  isPressed ? setIncVotes('-1') : setIncVotes('+1');
  }

return (
  <button onClick={handleVotes}className="button" id={review.review_id}>
  {review.votes} Votes
  </button>
)
}