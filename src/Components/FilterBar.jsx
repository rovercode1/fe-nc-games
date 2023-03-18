import { useState, useEffect } from "react";
import { fetchCategories, fetchReviewBySort } from "../api";
import {capitalizeFirstLetter} from '../utils'
import '../styles/SortBy.css'

export default function FilterBar({setSearchParams, setReviews}) {
  const [categories, setCategory] = useState([]);
  const sortBy =[
    "date",
    "votes",
    "comment_count"
  ]
  const [requestedSort, setRequestedSort] = useState({
    category: "",
    sort_by: "date",
    order: "asc",
  });
  const [query, setQuery] = useState('')

  useEffect(() => {
    fetchCategories().then((categories) => {
      setCategory(categories);
    });
  }, [requestedSort]);

  

  useEffect(()=>{
    fetchReviewBySort(query).then((reviews)=>{
      setReviews(reviews)
    })
  },[requestedSort, query, setReviews])
  
  const handleSubmit = () => {
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
    setQuery(query)
  };

  const handleChange = (e) => {
    setRequestedSort({ ...requestedSort, [e.target.id]: e.target.value });
    handleSubmit()
  };

  const displayFilterBar = ()=>{
    return (
      <section id="sort-by">
        <form
          id="listing-form"
          onSubmit={handleSubmit}>
          <div className="input-box">
            <label>Category</label>
            <select type="select" id="category" onChange={handleChange}>
              <option key="" value={""}>All reviews</option>
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
              <option value="ASC">asc</option>
              <option value="DESC">desc</option>
            </select>
          </div>
        </form>
      </section>
    );
  }

  return displayFilterBar()
}
