import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchAllReviews } from "../api";
import '../styles/ArticleList.css'
export default function ArticleList({ isLoading, setIsLoading, setReviews, reviews }) {

  //Initial get req vote state
  
  useEffect(() => {
    setIsLoading(true);
    fetchAllReviews().then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [setIsLoading, setReviews]);

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
            id={review.votes}>
            {review.votes} Votes
          </button>
          <Link className="comment_count" to={`/reviews/${review.review_id}`}>
           <p> {review.comment_count} Comments</p>
          </Link>
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
