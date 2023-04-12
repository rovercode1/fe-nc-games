import { useEffect, useState } from "react";
import { updateReviewVotes, updateCommentVotes } from "../api";
import { successfulVotedReview } from "../utils/optimisticRendering";

export default function VotesButton ({review, comment}){
  const [inc_votes, setIncVotes] = useState('0')
  const [buttonId, setButtonId] = useState('0')
  const [displayVotes, setDisplayVotes] = useState('0')

    useEffect(()=>{
      if(review){
        setDisplayVotes(review)
        setButtonId(review.review_id)
        updateReviewVotes(review.review_id, inc_votes)
      }else{
        setDisplayVotes(comment)
        setButtonId(comment.comment_id)
        updateCommentVotes(comment.comment_id, inc_votes)
      }
    },[inc_votes, comment, review])

  const handleVotes = (e)=>{ 
    const button = e.target
    successfulVotedReview(button)
    const isPressed =  button.className === 'button' 
    isPressed ? setIncVotes('-1') : setIncVotes('+1');
  }

return (
  <button onClick={handleVotes} className="button" id={buttonId}>
    {displayVotes.votes} Vote(s)
  </button>
)
}