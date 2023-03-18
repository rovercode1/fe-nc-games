import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import CategoryMenu from "./CategoryMenu";
import FilterBar from "./FilterBar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { fetchCategories, fetchAllReviews } from "../api";
import '../styles/MultipleReviews.css'
import "../styles/MultipleReviews.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ArticleList({
  isLoading,
  setIsLoading,
  reviews,
  setReviews,
}) {
  let [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetchAllReviews().then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [setIsLoading, setReviews]);

  useEffect(() => {
    setIsLoading(true);
    fetchCategories().then((categories) => {
      setCategories(categories);
    });
  }, [setIsLoading]);

  const displayReviews = (review) => {
    return (
      <article
        id={review.review_id}
        className="review-card"
        key={review.review_id}
      >
        <div className="review-card-header">
          <p>
            Posted by <span>{review.owner}</span>
          </p>
          <p>{review.created_at}</p>
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
                <button className="button">{review.comment_count} Comment</button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  };

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <>
    <CategoryMenu/>
      <FilterBar
        searchParams={searchParams}
        setReviews={setReviews}
        setSearchParams={setSearchParams}
      />
      <section id="reviews-container">
        <DropdownButton id="dropdown-basic-button" title="Review categories">
          {categories.map((category) => {
            return (
              <Dropdown.Item
                key={category.slug}
                as={Link}
                to={`/reviews?category=${category.slug.replaceAll("-", "+")}`}
              >
                {category.slug.replaceAll("-", " ")}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
        {reviews.map((review) => {
          return displayReviews(review);
        })}
      </section>
    </>
  );
}