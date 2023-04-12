import { Link } from "react-router-dom"
export default function Header(){
  return (
    <section id='header'>
      {<Link to='/'> <h1>Home</h1></Link>}
      {<Link to='/endpoints'> <h1>Endpoints</h1></Link>}
    </section>
    
  )
}