import { Container, Nav, Navbar, NavDropdown, Dropdown, NavItem, NavLink } from "react-bootstrap";
import { Link, Outlet } from "react-router";
import Photography from "../pages/Photography";

import SallyContext from "../contexts/SallyContext";

function BadgerLayout(props) {

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
						 <Nav.Link as={Link} to="/photography">Photography</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div style={{ margin: "1rem" }}>
            </div>
        </div>
    );
}

export default BadgerLayout;