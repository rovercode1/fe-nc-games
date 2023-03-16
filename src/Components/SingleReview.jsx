import { useEffect, useState } from "react";
import { fetchSingleReview } from "../api";
import { useParams } from "react-router-dom";

export default function SingleReview({ isLoading, setIsLoading }) {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState({});
  useEffect(() => {
    setIsLoading(true);
    fetchSingleReview(review_id).then((review) => {
      setSingleReview(review);
      setIsLoading(false);
    });
  }, [review_id, setIsLoading]);

  const displaySingleReview = (review) => {
    return (
      <div className="single-review-card" key={review.review_id}>
        <div className="loading">
        </div>
        <div className="review-card-header">
          <p>Posted by <span>{review.owner}</span></p>  
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
            <span><p>{review.votes} Votes</p></span>
          </div>
        </div>
      </div>
    );
  };
  return isLoading ? (
    <h1 className="loading">Loading...</h1>
  ) : (
    <section id="single-review">{displaySingleReview(singleReview)}</section>
  );
}