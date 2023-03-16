import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchCategories } from "../api";
import {capitalizeFirstLetter} from '../utils'

export default function SortBy() {
  const [categories, setCategory] = useState([]);
  const [sortBy, setSortBy] = useState([
    "date",
    "title",
    "designer",
    "owner",
    "review_body",
    "category",
    "votes",
  ]);
  const [requestedSort, setRequestedSort] = useState({
    category_name: "All reviews",
    sort_by: "Date",
    order: "DESC",
  });

  useEffect(() => {
    fetchCategories().then((categories) => {
      setCategory(categories);
    });
  }, []);

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(requestedSort);
  };

  const handleChange = (e) => {
    setRequestedSort({ ...requestedSort, [e.target.id]: e.target.value });
  };

  return (
    <section id="sort-by">
      <form
        id="listing-form"
        onSubmit={handleSubmit}
        action={`/reviews?category=strategy`} method="GET"
      >
        <div className="input-box">
          <label>Category</label>
          <select type="select" id="category_name" onChange={handleChange}>
            <option key="all-reviews" value={"All reviews"}>
              All Reviews
            </option>
            {categories.map((category) => {
              return (
                <option key={category.slug} value={category.slug}>
                  {capitalizeFirstLetter(category.slug.replaceAll('-',' '))}
                </option>
              );
            })}
          </select>
        </div>
        <div className="input-box">
          <label>Sort by</label>
          <select type="select" id="sort_by" onChange={handleChange}>
            {sortBy.map((sort) => {
              return (
                <option key={sort} value={sort.toLowerCase()}>
                  {capitalizeFirstLetter(sort.replaceAll("_", " "))}
                </option>
              );
            })}
          </select>
        </div>
        <div className="input-box">
          <label>Order</label>
          <select type="select" id="order" onChange={handleChange}>
            <option value="ASC">ASC</option>
            <option value="DESC">DESC</option>
          </select>
        </div>
        <button type="submit">Create Listing</button>
      </form>
    </section>
  );
}
