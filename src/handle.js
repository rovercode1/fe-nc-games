export const toggleVotes = (event, setReviews) => {
  const voteButton = event.target;
  const reviewId = voteButton.parentNode.parentNode.id;
  setReviews((prevReviews) => {
    if (voteButton.className.includes("voted")) {
      return prevReviews.map((review) => {
        if (review.review_id === +reviewId) {
          voteButton.className = "default-vote";
          review.votes -= 1;
        }
        return review;
      });
    } else {
      return prevReviews.map((review) => {
        if (review.review_id === +reviewId) {
          voteButton.className = "voted";
          review.votes += 1;
        }
        return review;
      });
    }
  });
};