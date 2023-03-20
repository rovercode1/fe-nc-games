import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { fetchReviewsByCategories } from "../api";
import { fetchDog } from "../utils/optimisticRendering";
import CategoryMenu from "./CategoryMenu";
import "../styles/MultipleReviews.css";

export default function ReviewsByCategories() {
  const [ loadingReviewsByCategogies, setLoadingReviewsByCategories ] =
    useState(false);
  const [ isLoadingDog, setLoadingDog ] = useState(false);
  const [categoryReviews, setCategoryReviews] = useState([]);
  const [dog, setDog] = useState("");
  const search = useLocation().search;
  const category = new URLSearchParams(search).get("category");
  let category_name = category.replaceAll("'", "%27");
  const queryCategory = category_name.replaceAll(" ", "-");

  const noReviews = (dog, category_name) => {
    return (
      <>
        <h1>
          Oops! No '<strong>{category_name}</strong>' reviews found.
        </h1>
        <h3>Here, have a dog!</h3>
        <img src={dog} alt="cute doggy" />
      </>
    );
  };

  useEffect(() => {
    setLoadingReviewsByCategories(true);
    fetchReviewsByCategories(queryCategory).then((reviews) => {
      setCategoryReviews(reviews);
      setLoadingReviewsByCategories(false);
    });
  }, [setCategoryReviews, queryCategory]);

  useEffect(() => {
    setLoadingDog(true);
    fetchDog().then((dog) => {
      setDog(dog)
      setLoadingDog(false);
    });
  }, []);

  const loadingReviews = ()=>{
    return(<h1>Loading...</h1>)
  }

  const loadingDog = (category_name)=>{
    return ( <>
    <h1>Oops! No <strong>'{category_name}'</strong> reviews found.</h1>
    <div id='loading-dog'>
      <h1>Loading dog...</h1>
    </div> 
      </>
    )
  }

  const displayCategoryReviews = () => {
    return categoryReviews.length < 1 ? (
      isLoadingDog ?loadingDog(category_name): noReviews(dog, category_name)
    ) : (
      <>
        <CategoryMenu />
         <section id="category-review">
          <h1>{category_name.replaceAll("+", " ")} reviews</h1>
          {categoryReviews.map((review) => {
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
                        <button className="button">
                          {review.comment_count} Comment
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </>
    );
  };

  return loadingReviewsByCategogies ? loadingReviews() : displayCategoryReviews()
}
