import { useState, useEffect } from "react";
import { fetchCategories } from "../api";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
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

  const displayDropdown = ()=>{
   return( <DropdownButton id="dropdown-basic-button" title="Review categories">
      {categories.map((category) => {
        return (
          <Dropdown.Item key={category.slug} as={Link} to={`/reviews?category=${category.slug.replaceAll("-", "+")}`}>
            {category.slug.replaceAll("-", " ")}
          </Dropdown.Item>
        );
      })}
    </DropdownButton>)
  }

  const loadingDropdown = ()=>{
  return(  <DropdownButton id="dropdown-basic-button" title="Loading...">
    </DropdownButton>)
  }

  return isLoadingCategories || isLoadingReviews || isLoadingFilters? loadingDropdown() : displayDropdown()
}
