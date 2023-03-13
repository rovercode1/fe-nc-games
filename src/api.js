import axios from "axios";
const baseUrl = 'https://games-forum.onrender.com/api'
export const fetchSingleReview = (review_id) => {
  return axios
    .get(baseUrl + '/reviews/' + review_id)
    .then((res) => {
      console.log(res.review)
      return res.review
    })
    .catch((err) => {
      console.error(err);
    });
};