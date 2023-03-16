import '../styles/MultipleReviews.css'
import { useLocation } from "react-router-dom";
import { fetchReviewsByCategories, fetchDog } from "../api";
import { useState, useEffect } from "react";
import { displayReviews, noReviews } from '../utils';
import CategoryMenu from "./CategoryMenu";

export default function ReviewsByCategories() {
  const [isLoading, setIsLoading] = useState(false);
  const [categoryReviews, setCategoryReviews] = useState([]);
  const [dog, setDog] = useState("");
  const search = useLocation().search;
  const category = new URLSearchParams(search).get("category");
  let category_name = category.replaceAll("'", "%27");
  const queryCategory = category_name.replaceAll(" ", "-");

  useEffect(() => {
    setIsLoading(true);
    fetchDog().then((dog) => {
      setDog(dog);
    });

    fetchReviewsByCategories(queryCategory).then((reviews) => {
      setCategoryReviews(reviews);
      setIsLoading(false);
    });
  }, [setCategoryReviews, queryCategory]);

  const displayReview = () => {
    return categoryReviews.length < 1 ? (
      noReviews(dog, category_name)
    ) : (
      <>
      <CategoryMenu/>
      <section id="category-review">
        <h1>{category_name.replaceAll("+", " ")} reviews</h1>
        {categoryReviews.map((review) => {
          return displayReviews(review)
        })}
      </section>
      </>
    );
  };
  return isLoading ? <h1>Loading...</h1> : displayReview();
}
