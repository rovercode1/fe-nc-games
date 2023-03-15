import {useLocation} from "react-router-dom";
import { fetchReviewsByCategories } from "../api";

export default function ReviewsByCategories({match, location}){
  const search = useLocation().search;
  const category = new URLSearchParams(search).get('category');
  let category_name = category.replaceAll("'", '%27')
  console.log(category_name)
  fetchReviewsByCategories(category_name).then((reviews)=>{
    console.log(reviews)
  })
  return (
      <h1>{category_name.replaceAll('+',' ')}</h1>
  );
}