import axios from "axios";
const baseUrl = 'https://games-forum.onrender.com/api'
export const fetchAllReviews = () => {
  return axios
    .get(baseUrl + '/reviews')
    .then((res) => {
      return res.data.reviews
    })
    .catch((err) => {
      console.error(err);
    });
};
