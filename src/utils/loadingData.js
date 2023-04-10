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

export const loadingSingleReview = () => {
  return (
    <article className="single-review-card loading-single-card">
      <div className="review-card-header">
        <span>
          <p>orem ipm </p>
        </span>
        <span>
          <p>orem ipm dolooo lol</p>
        </span>
      </div>
      <div className="review-card-body">
        <span>
          <h2>Lorem ipsum dolor sit amet consamet consectetur a</h2>
        </span>
        <div id="single-loading-img"></div>
        <span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            officiis sit aspernatur nam quia ad eligendi sed, rerum neque
            voluptatibus cumque harum earum, modi, voluptatem commodi sunt
            enim illum labore possimus maiores sapiente iste. Rem quia ipsa
            voluptate ea id, cupiditate quo, optio alias nemo deleniti,
            accusantium corporis error veritatis iure eligendi tenetur porro
            ad mollitia beatae cumque a commodi? Quidem dolores nihil
            exercitationem molestias, neque fugit atque, dolore, ab aliquam
            dicta optio? Necessitatibus totam alias modi nesciunt quam placeat
            eos, vero voluptatem! Maiores corrupti aut consectetur facilis
            totam. Quam modi inventore tenetur velit cupiditate, alias
            consequatur eum officiis. Tempora!
          </p>
        </span>
        <div className="review-card-tags">
          <span className="single-category">lorem ips</span>
          <span className="single-designer">consec</span>
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
    </article>
  );
};

export const loadingReviews = () => {
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
        <div className="review-bottom">
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