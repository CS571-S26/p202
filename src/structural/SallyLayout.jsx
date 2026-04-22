import { Container, Col, Row, Nav, Navbar, Button, Form } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import './App.css';
import crest from '../assets/Crest.png';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";

function SallyLayout(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await addDoc(collection(db, "messages"), {
            name: name,
            email: email,
            message: message,
            createdAt: new Date()
            });

            alert("Thank you for your message!");
            setName("");
            setEmail("");
            setMessage("");

        } catch (err) {
            console.error(err);
            alert("Error sending message");
        }
    }

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
                        <Form className="contact-form">
                            <Form.Label htmlFor="name"> Name </Form.Label>
                            <Form.Control 
                                id="name"
                                value={name}
                                onChange={(e) => {setName(e.target.value)}}/>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control 
                                id="email" 
                                value={email}
                                onChange={(e) => {setEmail(e.target.value)}}/>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control 
                                id="message"
                                value={message}
                                onChange={(e) => {setMessage(e.target.value)}}/>
                            <Button type="submit" style={{marginTop: 20}} onClick={handleSubmit} className="form-btn">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SallyLayout;