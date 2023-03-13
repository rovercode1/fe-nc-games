import { useEffect, useState } from "react";
import { fetchSingleReview } from "../api";
export default function SingleReview() {
  const [singleReview, setSingleReview] = useState({});
  const review_id = 2;

  useEffect(() => {
    fetchSingleReview(review_id).then((review) => {
      setSingleReview(review);
    });
  }, []);

  const displaySingleReview = (review) => {
    return (
      <div className="single-review-card" key={review.review_id}>
        <div className="review-card-header">
          <p>Posted by {review.owner}</p>
          <p>{review.created_at}</p>
        </div>
        <div className="review-card-body">
          <h2>{review.title}</h2>
          <img src={review.review_img_url} alt={review.title}></img>
          <p>{review.review_body}</p>
        </div>
        <div className="review-card-footer">
          <div className="review-card-tags">
            <span>
              <p className="single-category"> {review.category}</p>{" "}
            </span>
            <span>
              <p className="single-designer">{review.designer}</p>
            </span>
          </div>
          <div className="review-card-stats">
            <p>{review.votes} Votes</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="single-review">{displaySingleReview(singleReview)}</section>
  );
}
