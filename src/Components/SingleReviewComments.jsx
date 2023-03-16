import { fetchCommentsById } from "../api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { displayComments } from "../utils";


export default function SingleReviewComments({ isLoading, setIsLoading, comments, setComments }) {
  const { review_id } = useParams();
  useEffect(() => {
    setIsLoading(true);
    fetchCommentsById(review_id).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [review_id, setIsLoading, setComments]);


  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section id="comments">
      {comments.length < 1 ? <h1 id="no-comments">No Comments here!</h1>:false}
      {comments.map((comment) => {
        return displayComments(comment, comments, isLoading);
      })}
    </section>
  );
}
