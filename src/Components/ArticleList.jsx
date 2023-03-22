import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";

import CategoryMenu from "./CategoryMenu";
import FilterBar from "./FilterBar";
import { fetchAllReviews } from "../api";
import "../styles/MultipleReviews.css";
import "../styles/MultipleReviews.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ArticleList({ reviews, setReviews }) {
  const [isLoadingReviews, setIsLoadingReviews] = useState(false);
  const [isLoadingFilters, setIsLoadingFilters] = useState(false)
  let [searchParams, setSearchParams] = useSearchParams();

  const loadingReviewData = [
    {
      id:1,
      owner: "lorem ip",
      created_at:'Lorem ipsum dolor sit.',
      title: "Lorem ipsum dolor sit amet consectetur a",
      votes: 100,
      comment_count: 2,
    },
    {
      id:2,
      owner: "Lorem, ipsum.",
      title: " Lorem, ipsum dolor.",
      created_at:'Lorem ipsum dolor .',
      votes: 10,
      comment_count: 300,
    },
    {
      id:3,
      owner: "Lorem, ipsum sit amet .",
      title: " Losit amet or.",
      created_at:'Lorem ipsum dolor sit.',
      votes: 1,
      comment_count: 0,
    },
    {
      id:4,
      owner: "Lorem, ipsum sit a.",
      title: " Loresit amet m dolor.",
      created_at:'Lorem ipsum  sit.',
      votes: 1,
      comment_count: 30,
    },
    {
      id:5,
      owner: "Lorem, ipsit amet .",
      title: " Lorem, ipssit amet .",
      created_at:'Lorem ipsum dolor sit.',
      votes: 10,
      comment_count: 0,
    },
  ];

  useEffect(() => {
    setIsLoadingReviews(true);
    fetchAllReviews().then((reviews) => {
      setReviews(reviews);
      setIsLoadingReviews(false);
    });
  }, [setReviews]);


  const displayReviewCard = (review)=>{
    return (    <article
    id={review.review_id}
    className="review-card"
    key={review.review_id}
  >
    <div className="review-card-header">
      <p>
        Posted by <span>{review.owner}</span>
      </p>
        <p>Posted <ReactTimeAgo
            date={new Date(review.created_at)}
            locale="en-US"
          />
        </p>
    </div>
    <div className="review-body">
      <Link to={`/reviews/${review.review_id}`}>
        <img src={review.review_img_url} alt={review.title}></img>
      </Link>
      <div className="review-card-bottom">
        <h3>{review.title}</h3>
        <div className="review-card-button">
          <button className="button" id={review.votes}>
            {review.votes} Votes
          </button>
          <Link to={`/reviews/${review.review_id}`}>
            <button className="button">
              {review.comment_count} Comments
            </button>
          </Link>
        </div>
      </div>
    </div>
  </article>)
  }

  const displayReviews = () => {
    return (
      <section id="reviews-container">
        {reviews.map((review) => {
          return (
            displayReviewCard(review)
          );
        })}
      </section>
    );
  };

  const loadingReviews = () => {
    return (
    <section id="reviews-container">
     { loadingReviewData.map((review)=>{
      return(
        <article  key={review.id} className="review-card loading-review">
        <div className="review-card-header">
          <span>
            <p>{review.owner}</p>
          </span>
          <span>
            <p>{review.created_at}</p>
          </span>
        </div>
        <div className="review-body">
          <div className="loading-review-img"></div>
          <div className="review-card-bottom">
            <span>
              <h3>{review.title}</h3>
            </span>
            <div className="review-card-button">
              <button className="button">
                <span>
                  <p> {review.votes} Lorem </p>
                </span>
              </button>
              <button className="button">
                <span>
                  <p>{review.comment_count} ipsum</p>
                </span>
              </button>
            </div>
          </div>
        </div>
      </article>
      )
      })} 
    </section>
    )
  };

  return (
    <>
      <CategoryMenu isLoadingReviews={isLoadingReviews} isLoadingFilters={isLoadingFilters}/>
      <FilterBar
        searchParams={searchParams}
        setReviews={setReviews}
        setSearchParams={setSearchParams}
        setIsLoadingReviews={setIsLoadingReviews}
        isLoadingReviews={isLoadingReviews}
        isLoadingFilters={isLoadingFilters}
        setIsLoadingFilters={setIsLoadingFilters}
      />
      {isLoadingReviews || isLoadingFilters? loadingReviews() : displayReviews()}
    </>
  );
}
