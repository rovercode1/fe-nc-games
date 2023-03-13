import { useEffect, useState } from "react"
import { fetchAllReviews } from "../api"
export default function List (){
  const [reviews, setReviews] = useState([])
  useEffect(()=>{
    fetchAllReviews().then((reviews)=>{
      setReviews(reviews)
    })
  })

  const displayReviews = (review)=>{
    return (
      <div className="review-card">
        <div className="review-header">
          <p> Posted by <span>{review.owner}</span></p>
          <p>{review.created_at}</p>
        </div>
        <a href="#">
        <div className="review-body">
          <h3>{review.title}</h3>
          <img src={review.review_img_url}></img>
        </div>
        </a>
        <div className="review-footer">
          <p>{review.votes} Votes</p>
          <p>Comments</p>
        </div>
      </div>
    )
  }

  return (
    <section id='reviews-container'>
      {reviews.map((review)=>{
        return displayReviews(review)
      })}
    </section>
  )
}