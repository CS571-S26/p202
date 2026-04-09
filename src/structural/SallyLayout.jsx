import { Container, Col, Row, Nav, Navbar, Button, Form } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import './App.css'
import crest from '../assets/Crest.png'

function SallyLayout(props) {

    return (
        <div>
            <Navbar className="navbar" sticky="top">
                 <Navbar.Brand as={Link} to="/">
                    <img src={crest} 
                        alt='home sparkle crest' 
                        style={{width:60, 
                            height:60, 
                            marginLeft: 10, 
                            marginTop: -10, 
                            marginBottom: -10}} />
                    </Navbar.Brand>
                    <Nav className="ms-auto" style={{ marginRight: '10px' }}>
                        <Button as={Link} to="/" variant="outline-light" className="me-2">
                        home
                        </Button>

                        <Button as={Link} to="/code" variant="outline-light" className="me-2">
                        code
                        </Button>

                        <Button as={Link} to="/design" variant="outline-light" className="me-2">
                        design
                        </Button>

                        <Button as={Link} to="/photography" variant="outline-light" className="me-2">
                        photo
                        </Button>

                        <Button as={Link} to="/*" variant="outline-light" className="me-2">
                        more
                        </Button>
                    </Nav>
            </Navbar>
            <Outlet/>
            <Container fluid>
                <Row style={{background:'#be1e2d', verticalAlign:'bottom'}}>
                    <Col style={{margin:20}}>
                    <p style={{color:'#fdf3e3'}}>Let's Chat!</p>
                    <Form>
                        <Form.Label htmlFor="name">Name</Form.Label>
                        <Form.Control id="name"></Form.Control>
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control id="email"></Form.Control>
                        <Form.Label htmlFor="message">Message</Form.Label>
                        <Form.Control id="message"></Form.Control>
                    </Form>
                    <Button style={{marginTop: 20}}>
                        Submit
                    </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SallyLayout;