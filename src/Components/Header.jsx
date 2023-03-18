import { Link } from "react-router-dom"
export default function Header(){
  return (
    <section id='header'>
      {<Link to='/'> <h1>Home</h1></Link>}
    </section>
  )
}