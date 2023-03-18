import FilterBar from "./FilterBar";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCategories, fetchAllReviews } from "../api";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/ArticleList.css'

export default function ArticleList ({isLoading, setIsLoading, reviews, setReviews}){
  let [searchParams, setSearchParams] = useSearchParams();
    const [reviews, setReviews] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(()=>{
    setIsLoading(true)
    fetchAllReviews().then((reviews)=>{
      setReviews(reviews)
      setIsLoading(false)
    })
  },[setIsLoading, setReviews])


  fetchCategories().then((categories) => {
    setCategories(categories);
  });

  useEffect(() => {
    setIsLoading(true);
    fetchAllReviews().then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [setIsLoading]);

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
      <DropdownButton id="dropdown-basic-button" title="Review categories">
        {categories.map((category) => {
          return (
            <Dropdown.Item
              key={category.slug}
              as={Link}
              to={`/reviews?category=${category.slug.replaceAll("-", "+")}`}>
              {category.slug.replaceAll("-", " ")}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>

  return isLoading?<h1>Loading...</h1>:(
    <>
    <section id='reviews-container'>
    <FilterBar searchParams={searchParams} setReviews={setReviews} setSearchParams={setSearchParams}/>
      {reviews.map((review)=>{
        return displayReviews(review)
      })}
    </section>
    
    </>
  )
}

