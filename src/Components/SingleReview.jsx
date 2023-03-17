import { useEffect, useState } from "react";
import { fetchSingleReview } from "../api";
import { displaySingleReview } from "../utils/display";
import { useParams } from "react-router-dom";
import '../styles/SingleReview.css'


export default function SingleReview({ isLoading, setIsLoading, comments }) {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState({});
  useEffect(() => {
    setIsLoading(true);
    fetchSingleReview(review_id).then((review) => {
      setSingleReview(review);
      setIsLoading(false);
    });
  }, [review_id, setIsLoading]);

  return isLoading ? (
    <h1 className="loading">Loading...</h1>
  ) : (
    <>
    <section id="single-review">{displaySingleReview(singleReview, comments)}</section>
    </>
  );
}