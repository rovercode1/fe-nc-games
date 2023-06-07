import { useState, useEffect } from "react";
import { fetchCategories } from "../api";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CategoryMenu({isLoadingReviews, isLoadingFilters}) {
  const [ isLoadingCategories, setIsLoadingCategories]  = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    setIsLoadingCategories(true)
    fetchCategories().then((categories) => {
      setCategories(categories);
    });
    setIsLoadingCategories(false)

  },[])

  const displayCategories = ()=>{
    return( <>
    {categories.map((category) => {
      return (
        <NavDropdown.Item key={category.slug} as={Link} to={`/reviews?category=${category.slug.replaceAll("-", "+")}`}>
          {category.slug.replaceAll("-", " ")}
        </NavDropdown.Item>
      );
    })}
  </>)
  }

  const loadingDropdown = ()=>{
  return( 
    <NavDropdown.Item >
      Loading...
  </NavDropdown.Item>
  )
  }

  return isLoadingCategories || isLoadingReviews || isLoadingFilters? loadingDropdown() : displayCategories()
}
