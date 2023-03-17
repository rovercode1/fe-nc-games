import { useEffect, useState } from "react";
import { fetchAllReviews } from "../api";
import CategoryMenu from "./CategoryMenu";
import { displayReviews } from "../utils/utils";
import '../styles/MultipleReviews.css'

export default function ArticleList({ isLoading, setIsLoading }) {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetchAllReviews().then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [setIsLoading]);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <>
    <CategoryMenu/>
    <section id="reviews-container">
      {reviews.map((review) => {
        return displayReviews(review);
      })}
    </section>
    </>
  );
}
