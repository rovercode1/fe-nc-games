import axios from "axios";

const forumsData = axios.create({
  baseURL: 'https://games-forum.onrender.com/api',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
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
  export const fetchReviewBySort = (query)=>{

    return forumsData.get(`/reviews${query}`).then(({data})=>{
      return data.reviews
    }).catch((err)=>{
      console.error(err)
    })
  }