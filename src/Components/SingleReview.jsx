import { useEffect, useState } from "react";
import { fetchSingleReview } from "../api";
import { useParams } from "react-router-dom";
import '../styles/SingleReview.css'

export default function SingleReview({ isLoading, setIsLoading, comments }) {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState({});
  useEffect(() => {
    setIsLoading(true);
    fetchSingleReview(review_id).then((review) => {
      setSingleReview(review);
      setIsLoading(false);
    });
  }, [review_id, setIsLoading]);

  const displaySingleReview = (review, comments) => {
    return (
      <article
        id={review.review_id}
        className="single-review-card"
        key={review.review_id}
      >
        <div className="review-card-header">
          <p>
            Posted by <span>{review.owner}</span>
          </p>
          <p>{review.created_at}</p>
        </div>
        <div className="review-card-body">
          <h2>{review.title}</h2>
          <img src={review.review_img_url} alt={review.title}></img>
          <p>{review.review_body}</p>
          <div className="review-card-tags">
            <span>
              <p className="single-category"> {review.category}</p>
            </span>
            <span>
              {" "}
              <p className="single-designer">{review.designer}</p>
            </span>
          </div>
        </div>
        <div className="review-card-footer">
          <div className="review-card-stats">
            <button> {review.votes} Votes</button>
            {/* <span>{!isLoading  && postedAt === undefined ? (<p> Posted <ReactTimeAgo date={new Date(postedAt.toString())} locale="en-US" /> </p>) : (false)}</span>          */}
          </div>
          <div className="review-card-stats">
            <button> {comments.length} Comments</button>
            {/* <span>{!isLoading  && postedAt === undefined ? (<p> Posted <ReactTimeAgo date={new Date(postedAt.toString())} locale="en-US" /> </p>) : (false)}</span>          */}
          </div>
        </div>
      </article>
    );
  };
  return isLoading ? (
    <h1 className="loading">Loading...</h1>
  ) : (
    <>
    <section id="single-review">{displaySingleReview(singleReview, comments)}</section>
    </>
  );
}