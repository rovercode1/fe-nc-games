import axios from "axios";

const baseUrl = 'https://games-forum.onrender.com/api'

export const fetchSingleReview = (review_id) => {
  return axios
    .get(baseUrl + '/reviews/' + review_id)
    .then((res) => {
      return res.data.review
    })
    .catch((err) => {
      console.error(err);
    });
};


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