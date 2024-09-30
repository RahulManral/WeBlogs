import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './Navbar.css';
function BasicExample() {
  return (

    <Navbar expand="sm" className="mx-4">
      <Navbar.Brand href="/" className="mx-4">WeBlogs</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto"> {/* Centering the nav links */}
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/author">Authors</Nav.Link>
          <Nav.Link href="/blogs">Blogs</Nav.Link>
          <Nav.Link href="#createBlogs">Create Blog</Nav.Link>
          <Nav.Link href="#yourBlogs">Your Blogs</Nav.Link>
        </Nav>
        {/* <Button variant="" className="custom-button ml-auto mx-4">Login</Button> */}
        <Button variant="" className="custom-button ml-auto mx-4">Logout</Button>
      </Navbar.Collapse>
    </Navbar>



  );
}

export default BasicExample;
