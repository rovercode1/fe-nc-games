import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllReviews } from "../api";
export default function ArticleList({ isLoading, setIsLoading }) {
  const [reviews, setReviews] = useState([]);

  //Initial get req vote state
  
  useEffect(() => {
    setIsLoading(true);
    fetchAllReviews().then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [setIsLoading]);

  const displayReviews = (review) => {
    return (
      <article
        id={review.review_id}
        className="review-card"
        key={review.review_id}
      >
        <div className="review-header">
          <p>
            Posted by <span>{review.owner}</span>
          </p>
          <p>{review.created_at}</p>
        </div>
        <div className="review-body">
          <h3>{review.title}</h3>
          <Link to={`/reviews/${review.review_id}`}>
            <img src={review.review_img_url} alt={review.title}></img>
          </Link>
        </div>
        <div className="review-footer">
          <button
            className="default-vote"
            id={review.votes}
          >
            {review.votes} Votes
          </button>
          <p>Comments</p>
        </div>
      </article>
    );
  };

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section id="reviews-container">
      {reviews.map((review) => {
        return displayReviews(review);
      })}
    </section>
  );
}
