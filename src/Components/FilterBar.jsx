import { useState, useEffect } from "react";
import { fetchCategories, fetchReviewBySort } from "../api";
import {capitalizeFirstLetter} from '../utils/utils'
import '../styles/FilterBar.css'

export default function FilterBar({setSearchParams, setReviews, setIsLoadingReviews, isLoadingFilters, setIsLoadingFilters }) {
  const [categories, setCategory] = useState([]);
  const sortBy =[
    "date",
    "votes",
    "comment_count"
  ]
  const [requestedSort, setRequestedSort] = useState({
    category: "All",
    sort_by: "date",
    order: "asc",
  });
  const {category, sort_by, order} = requestedSort
  const [query, setQuery] = useState('')

  useEffect(() => {
    setIsLoadingFilters(true)
    fetchCategories().then((categories) => {
      setCategory([{slug: 'All Categories', description:'All Categories'}])
      setCategory((prevCategories)=> [...categories,...prevCategories])

      setIsLoadingFilters(false)
    });
  }, [requestedSort, setIsLoadingFilters]);

  useEffect(()=>{
    setIsLoadingReviews(true)
    fetchReviewBySort(query).then((reviews)=>{
      setReviews(reviews)
      setIsLoadingReviews(false)
    })
  },[requestedSort, query, setReviews, setIsLoadingReviews])
  
  const handleSubmit = (e) => {
    if(requestedSort.category === 'All'){
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
    e.preventDefault()
    setRequestedSort({ ...requestedSort, [e.target.id]: e.target.value });
    handleSubmit()
  };

  const displayFilterBar = ()=>{
    return (
      <section id="filter-bar" className="responsive-container filter-bar">
        <form
          id="listing-form"
          onSubmit={handleSubmit}>
          <div className="input-box">
            <label>Category</label>
            <select value={category}type="select" id="category" onChange={handleChange}>
              <option key="" value={"All"}>All reviews</option>
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
            <select value={sort_by}type="select" id="sort_by" onChange={handleChange}>
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
            <select value={order} type="select" id="order" onChange={handleChange}>
              <option value="ASC">asc</option>
              <option value="DESC">desc</option>
            </select>
          </div>
        </form>
      </section>
    );
  }

 const displayLoadingBar = ()=>{
  return (
    <>
    <section className="responsive-container filter-bar">
      <div id="loading-filter-bar">
        <h1>Loading...</h1>
      </div>
    </section>
    </>
  );
  }
  return isLoadingFilters ? displayLoadingBar() : displayFilterBar()

}
