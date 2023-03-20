import { useEffect, useState } from "react";
import { fetchSingleReview } from "../api";
import { useParams, Link } from "react-router-dom";
import '../styles/SingleReview.css'
export default function SingleReview({comments, err, setErr}) {
  const [isLoadingSingleReviews, setLoadingSingleReviews] = useState(false)
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState({});

  useEffect(() => {
    setLoadingSingleReviews(true);
    fetchSingleReview(review_id).then((review) => {
      setSingleReview(review);
      setLoadingSingleReviews(false);
    }).catch((err)=>{
      setErr(err)
    })
  }, [review_id, setLoadingSingleReviews, setErr]);

  const loadingData = [
    {
      owner: "lorem ip",
      created_at:'Lorem ipsum dolor sit.',
      title: "Lorem ipsum dolor sit amet consectetur a",
      votes: 100,
      comment_count: 2,
    }
  ]

  const loadingSingleReview = ()=>{
  return (<article
    className="single-review-card loading-single-card"
    >
    <div className="review-card-header">
        <span> <p>orem ipm </p> </span>
      <span><p>orem ipm dolooo lol</p></span>
    </div>
    <div className="review-card-body">
      <span>
      <h2>Lorem ipsum dolor sit  amet consamet consectetur a</h2>
      </span>
      <div id='single-loading-img'></div>
      <span>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus fuga numquam eum doloribus debitis aliquid quibusdam necessitatibus corporis voluptas beatae nesciunt hic magnam molestias vitae at fugit qui, iure nobis.</p>
      </span>

      <div className="review-card-tags">
        <span className="single-category">
           lorem ips
        </span>
        <span className="single-designer">
           consec
        </span>
      </div>
    </div>
    <div className="review-card-footer">
      <div className="review-card-stats">
        <button> x Votes</button>
      </div>
      <div className="review-card-stats">
        <button> x Comments</button>
      </div>
    </div>
  </article>)
  }

  const displaySingleReview = (review, comments) => {
    return isLoadingSingleReviews? loadingSingleReview():(
      <article
        id={review.review_id}
        className="single-review-card"
        key={review.review_id}>
        <div className="review-card-header">
          <p>
            Posted by <span>{review.owner}</span>
          </p>
          <p>{review.created_at}</p>
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
            <button> {review.votes} Votes</button>   
          </div>
          <div className="review-card-stats">
            <button> {comments.length} Comments</button>
          </div>
        </div>
      </article>
    );
  };

  const nonExistentReview = ()=>{
    return (
      <> 
      <h1>   Oops! this page doesn’t exist. </h1> 
      <p>   Vaild reviews will be displayed on the <Link to={'/'}>home</Link> page. </p>
      </>
    );
  }

  return  err? nonExistentReview():<section id="single-review">{displaySingleReview(singleReview, comments)}</section>


}