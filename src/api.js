import axios from "axios";

export const fetchCommentsById = (review_id) => {
  return axios
    .get(`https://games-forum.onrender.com/api/reviews/${review_id}/comments`)
    .then((res) => {
      return res.data.comments;
    })
    .catch((err) => {
      console.error(err);
    });
};