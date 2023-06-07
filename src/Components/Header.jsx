import CategoryMenu from "./CategoryMenu";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import OffCanvas from "./OffCanvas";

import "../styles/MultipleReviews.css";
import "../styles/MultipleReviews.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Filter from "./Filter";
export default function Header({ setReviews }) {

  const MainNavbar = () => {
    return (
      <Navbar id="navbar" bg="light" expand="lg">
        <Navbar.Brand href="/">NC Games</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/endpoints">Endpoints</Nav.Link>
            <NavDropdown title="Filter" id="basic-nav-dropdown" href='/'>
              <p id="nav-title">Categories:</p>
              <CategoryMenu />
              <NavDropdown.Divider />
              <NavDropdown.Item>
                {<OffCanvas setReviews={setReviews}/>}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };

  const FilterBar = () => {
    return (
      <div>
        
      </div>
      // <Navbar class='' bg="light" expand="lg">
      //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
      //   <Navbar.Collapse id="basic-navbar-nav">
      //     <Nav className="mr-auto">
      //       <Nav.Link href="/endpoints">category</Nav.Link>
      //       <Nav.Link href="/endpoints">category</Nav.Link>
      //       <Nav.Link href="/endpoints">category</Nav.Link>
      //     </Nav>
      //   </Navbar.Collapse>
      // </Navbar>
    );
  };

  return (
    <header>
      {MainNavbar() }
      {FilterBar()}
    </header>
  )
}
