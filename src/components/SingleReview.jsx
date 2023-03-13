import { useEffect, useEffect } from "react"
const [singleReview, setSingleReview] = useState({})
const SingleReview = ()=>{

const review_id = 2;
useEffect(()=>{
  fetchSingleReview(review_id).then((review)=>{
    console.log(review)
  })
})
return (
  
)
}