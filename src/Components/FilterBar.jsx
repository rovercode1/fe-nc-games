import { useState, useEffect } from "react";
import { fetchCategories, fetchReviewBySort } from "../api";
import {capitalizeFirstLetter} from '../utils'
import '../styles/SortBy.css'

export default function FilterBar({setSearchParams, setReviews}) {
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
    category: "",
    sort_by: "",
    order: "",
  });

  useEffect(() => {
    fetchCategories().then((categories) => {
      setCategory(categories);
    });
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(requestedSort.category === ''){
      delete requestedSort.category
    }
    if(requestedSort.sort_by === 'date'){
      requestedSort.sort_by = 'created_at'
    }
    if(requestedSort.sort_by === ''){
      delete requestedSort.sort_by
    }
    if(requestedSort.order === ''){
      delete requestedSort.order
    }

    setSearchParams(requestedSort);
    const query = window.location.href.split('/')[3]

    fetchReviewBySort(query).then((reviews)=>{
      setReviews(reviews)
    })
  };

  const handleChange = (e) => {
    setRequestedSort({ ...requestedSort, [e.target.id]: e.target.value });
  };

  return (
    <section id="sort-by">


      <form
        id="listing-form"
        onSubmit={handleSubmit}>
        <div className="input-box">
          <label>Category</label>
          <select type="select" id="category" onChange={handleChange}>
            <option key="" value={""}></option>
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
          <option key="" value={""}></option>
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
          <option key="" value={""}></option>
            <option value="ASC">asc</option>
            <option value="DESC">desc</option>
          </select>
        </div>
          <button type="submit">Filter reviews</button>
      </form>
    </section>
  );
}
