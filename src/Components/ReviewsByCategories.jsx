import {useLocation} from "react-router-dom";
import { fetchReviewsByCategories, fetchDog } from "../api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

export default function ReviewsByCategories(){
  const search = useLocation().search;
  const category = new URLSearchParams(search).get('category');
  const [categoryReviews, setCategoryReviews] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [dog, setDog] = useState('')
  let category_name = category.replaceAll("'", '%27')

  useEffect(() => {
    setIsLoading(true)
    fetchDog().then((dog)=>{
      setDog(dog)
    })
    fetchReviewsByCategories(category_name).then((reviews)=>{
      setCategoryReviews(reviews)
      setIsLoading(false)
    }) 
  }, [setCategoryReviews]);

  const noReviews = ()=>{
   return <>
    <h1>Oops! No '<strong>{category_name}</strong>' reviews found.</h1>
    <h3>Here, have a dog!</h3>
     <img src={dog} alt="cute doggy" />
    </>
  }

  const displayReview = ()=>{
    return categoryReviews.length < 1 ? (noReviews() ):( 
      <section id='category-review'>
        <h1>{category_name.replaceAll('+',' ')} reviews</h1>
        {categoryReviews.map((review)=>{
       return <article className="review-card" key={review.review_id}>
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
          <p>{review.votes} Votes</p>
          <p>Comments</p>
        </div>
      </article>
        })}
      </section>
    );
  }

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (displayReview())

}