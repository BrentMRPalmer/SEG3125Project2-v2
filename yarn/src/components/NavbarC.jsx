import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarC() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/icons/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="logo"
          />
          {' '}
          <b>Yarn Repository</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/patterns">Patterns</Nav.Link>
            <Nav.Link as={Link} to="/guides">Guides</Nav.Link>
            <Nav.Link as={Link} to="/share">Share</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarC;