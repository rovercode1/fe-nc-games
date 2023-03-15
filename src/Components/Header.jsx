import { Link } from "react-router-dom"
import { fetchReviewsByCategories } from "../api"
export default function Header(){
  return (
    <section id='header'>
      {<Link to='/'>Home</Link>}
    </section>
  )
}