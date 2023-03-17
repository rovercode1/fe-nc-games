import axios from "axios";

const forumsData = axios.create({
  baseURL: 'https://games-forum.onrender.com/api',
});

export const fetchAllReviews = () => {
  return forumsData.get('/reviews').then(({data})=>{
    return data.reviews
  })
    .catch((err) => {
      console.error(err);
    });
};

export const fetchSingleReview = (review_id) => {
  return forumsData.get('/reviews/' + review_id).then(({data})=>{
    return data.review
  })
    .catch((err) => {
      console.error(err);
    });
};

export const fetchCommentsById = (review_id) => {
  return forumsData.get(`/reviews/${review_id}/comments`).then(({data})=>{
    return data.comments
  }).catch((err)=>{
    console.error(err)
  })
}


  export const fetchCategories = ()=>{
    return forumsData.get(`/categories`).then(({data})=>{
      return data.categories
    }).catch((err)=>{
      console.error(err)
    })
  }

  export const fetchReviewsByCategories = (category_name)=>{
    return forumsData.get(`/reviews?category=${category_name}`).then(({data})=>{
      return data.reviews
    }).catch((err)=>{
      console.error(err)
    })
  }


export const postCommentById = (review_id, username, body) => {
  return forumsData.post(`/reviews/${review_id}/comments`,{
    username: username,
    body: body,
  }).then(({data})=>{
    return data.comment
  }).catch((err)=>{
    console.error(err)
  })
}

export const deleteComment = (comment_id)=>{
  return forumsData.delete(`/comments/${comment_id}`)
  .then(({data})=>{
    // return data.comment
  }).catch((err)=>{
    console.error(err)
  })
}
