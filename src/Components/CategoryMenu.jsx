import { useState } from "react";
import { fetchCategories } from "../api";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CategoryMenu() {
  const [categories, setCategories] = useState([]);
  fetchCategories().then((categories) => {
    setCategories(categories);
  });
  return (
    <DropdownButton id="dropdown-basic-button" title="Review categories">
      {categories.map((category) => {
        return (
          <Dropdown.Item
            key={category.slug}
            as={Link}
            to={`/reviews?category=${category.slug.replaceAll("-", "+")}`}>
            {category.slug.replaceAll("-", " ")}
          </Dropdown.Item>
        );
      })}
    </DropdownButton>
  );
}
