import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import { Container, Col, Row, Nav, Navbar, Button, Form } from "react-bootstrap";
import '../structural/App.css';

function Footer() {
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

	return <>
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
	</>
}

export default Footer;