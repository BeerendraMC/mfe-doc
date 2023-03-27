import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

const TopNav = () => {
  return (
    <Navbar bg="light" expand="lg" className="top_nav_bar shadow">
      <Container>
        <Navbar.Brand>
          <NavLink to="/">MFE Doc</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Framework guide" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink
                  to="/angular-guide"
                  style={{ display: 'block', width: `100%` }}
                >
                  Angular
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
