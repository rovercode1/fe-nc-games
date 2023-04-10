import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";
import CategoryMenu from "./CategoryMenu";
import FilterBar from "./FilterBar";
import VotesButton from "./VotesButton";
import { fetchAllReviews } from "../api";
import { loadingReviews } from "../utils/loadingData";
import "../styles/MultipleReviews.css";
import "../styles/MultipleReviews.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ArticleList({ reviews, setReviews }) {
  const [isLoadingReviews, setIsLoadingReviews] = useState(false);
  const [isLoadingFilters, setIsLoadingFilters] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setIsLoadingReviews(true);
    fetchAllReviews().then((reviews) => {
      setReviews(reviews);
      setIsLoadingReviews(false);
    });
  }, [setReviews]);

  const displayReviewCard = (review) => {
    return (
      <article
        id={review.review_id}
        className="review-card"
        key={review.review_id}
      >
        <div className="review-card-header">
          <p>
            Posted by <span>{review.owner}</span>{" "}
          </p>
          <p>
            Posted
             <ReactTimeAgo date={new Date(review.created_at)} locale="en-US" />
          </p>
        </div>
        <div className="review-body">
          <Link to={`/reviews/${review.review_id}`}>
            <img src={review.review_img_url} alt={review.title}></img>
          </Link>
          <div className="review-bottom">
            <h3>{review.title}</h3>
            <div className="review-card-button">
              <VotesButton review={review}/>
              <Link to={`/reviews/${review.review_id}`}>
                <button className="button">
                  {review.comment_count} Comments
                </button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  };

  const displayReviews = () => {
    return (
      <section id="reviews-container">
        {reviews.map((review) => {
          return displayReviewCard(review);
        })}
      </section>
    );
  };

  return (
    <>
      <CategoryMenu
        isLoadingReviews={isLoadingReviews}
        isLoadingFilters={isLoadingFilters}
      />
      <FilterBar
        searchParams={searchParams}
        setReviews={setReviews}
        setSearchParams={setSearchParams}
        setIsLoadingReviews={setIsLoadingReviews}
        isLoadingReviews={isLoadingReviews}
        isLoadingFilters={isLoadingFilters}
        setIsLoadingFilters={setIsLoadingFilters}
      />
      {isLoadingReviews || isLoadingFilters
        ? loadingReviews()
        : displayReviews()}
    </>
  );
}
