import ReactTimeAgo from "react-time-ago";
import { Link } from "react-router-dom";
export const displaySingleReview = (review, comments) => {
  return (
    <article
      id={review.review_id}
      className="single-review-card"
      key={review.review_id}
    >
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
          <span>
            <p className="single-category"> {review.category}</p>
          </span>
          <span>
            {" "}
            <p className="single-designer">{review.designer}</p>
          </span>
        </div>
      </div>
      <div className="review-card-footer">
        <div className="review-card-stats">
          <button> {review.votes} Votes</button>
          {/* <span>{!isLoading  && postedAt === undefined ? (<p> Posted <ReactTimeAgo date={new Date(postedAt.toString())} locale="en-US" /> </p>) : (false)}</span>          */}
        </div>
        <div className="review-card-stats">
          <button> {comments.length} Comments</button>
          {/* <span>{!isLoading  && postedAt === undefined ? (<p> Posted <ReactTimeAgo date={new Date(postedAt.toString())} locale="en-US" /> </p>) : (false)}</span>          */}
        </div>
      </div>
    </article>
  );
};

export const displayReviews = (review) => {
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
};

export const noReviews = (dog, category_name) => {
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

export const displayComments = (comment, comments, isLoading) => {
    return comments.length === 0?<h1>No comments here!</h1>:( 
      <article key={comment.comment_id} className="comment-card">
        <div className="comment-header">
          <p>{comment.author}</p>
          {!isLoading ? (
            <p>
              Posted  <ReactTimeAgo
                date={new Date(comment.created_at)}
                locale="en-US"
              />
            </p>
          ) : (
            false
          )}
        </div>
        <p className="comment-body">{comment.body}</p>
        <div className="comment-footer">
          <span>
            <p>{comment.votes} Votes</p>
          </span>
          <span>
            <p>Delete</p>
          </span>
        </div>
      </article>
    );
  };