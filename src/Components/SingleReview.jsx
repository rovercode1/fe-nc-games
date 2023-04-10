import { useEffect, useState } from "react";
import { fetchSingleReview } from "../api";
import { useParams, Link } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";
import { loadingSingleReview } from "../utils/loadingData";
import VotesButton from "./VotesButton";
import "../styles/SingleReview.css";
export default function SingleReview({ err, setError, comments }) {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState([]);
  const [isLoadingSingleReviews, setIsLoadingReviews] = useState(true);

  useEffect(() => {
    setIsLoadingReviews(true);
    fetchSingleReview(review_id)
      .then((review) => {
        setSingleReview(review);
        setIsLoadingReviews(false);
      })
      .catch(({ response }) => {
        setIsLoadingReviews(false);
        setError(response.data.msg);
      });
  }, [review_id, setIsLoadingReviews, setError]);

  const displaySingleReview = (review, comments) => {
    return isLoadingSingleReviews ? (
      loadingSingleReview()
    ) : (
      <article
        id={review.review_id}
        className="single-review-card"
        key={review.review_id}
      >
        <div className="review-card-header">
          <p>
            Posted by <span>{review.owner}</span>
          </p>
          <p>
            Posted
            <ReactTimeAgo date={new Date(review.created_at)} locale="en-US" />
          </p>
        </div>
        <div className="review-card-body">
          <h2>{review.title}</h2>
          <img src={review.review_img_url} alt={review.title}></img>
          <p>{review.review_body}</p>
          <div className="review-card-tags">
            <Link to={`/reviews?category=${review.category}`}>
              <p className="single-category"> {review.category}</p>
            </Link>
            <span>
              <p className="single-designer">{review.designer}</p>
            </span>
          </div>
        </div>
        <div className="review-card-footer">
          <div className="review-card-stats">
          <VotesButton review={review}/>
          </div>
          <div className="review-card-stats">
            <button> {comments.length} Comments</button>
          </div>
        </div>
      </article>
    );
  };

  const nonExistentReview = () => {
    return (
      <>
        <h1> Oops! this page doesn’t exist. </h1>
        <p>
          Vaild reviews will be displayed on the <Link to={"/"}>home</Link>
          page.
        </p>
      </>
    );
  };

  return err ? (
    nonExistentReview()
  ) : (
    <>
      <section id="single-review">
        {displaySingleReview(singleReview, comments)}
      </section>
    </>
  );
}
