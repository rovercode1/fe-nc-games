import { useEffect, useState } from "react";
import { fetchSingleReview } from "../api";
import { useParams } from "react-router-dom";
import '../styles/SingleReview.css'

export default function SingleReview({ isLoadingReviews, setIsLoadingReviews, err, setError }) {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState(null);

  useEffect(() => {
    setIsLoadingReviews(true);
    fetchSingleReview(review_id).then((review) => {
      setSingleReview(review);
      setIsLoadingReviews(false);
    }).catch(({response})=>{
      setIsLoadingReviews(false);
      setError(response.data.msg)
    })
  }, [review_id, setIsLoadingReviews, setError]);

  const displaySingleReview = (review) => {
    return isLoadingReviews?<h1>Loading...</h1> : (
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
          </div>
        </div>
      </div>
    );
  };
  return  (
    <>
    {singleReview ? <section id="single-review">{displaySingleReview(singleReview)}</section>:null}
    </>
  );
}