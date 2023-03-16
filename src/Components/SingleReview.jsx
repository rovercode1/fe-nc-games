import { useEffect, useState } from "react";
import { fetchSingleReview } from "../api";
// import ReactTimeAgo from "react-time-ago";
import { useParams } from "react-router-dom";
import '../styles/SingleReview.css'

export default function SingleReview({ isLoading, setIsLoading, setReviews }) {
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
            <h2>View more of: </h2>
            <span>
              <p className="single-category"> {review.category}</p>{" "}
            </span>
            <span>
              <p className="single-designer">{review.designer}</p>
            </span>
          </div>
          <div className="review-card-stats">
          <button> {review.votes} Votes</button>
            {/* <span>{!isLoading  && postedAt === undefined ? (<p> Posted <ReactTimeAgo date={new Date(postedAt.toString())} locale="en-US" /> </p>) : (false)}</span>          */}
          </div>
        </div>
      </div>
    );
  };
  return isLoading ? (
    <h1 className="loading">Loading...</h1>
  ) : (
    <>
    <section id="single-review">{displaySingleReview(singleReview)}</section>
    </>
  );
}