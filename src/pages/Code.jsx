import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import './Pages.css';
import codedata from "../code.json";

function Code() {
	return <>
		 <Container fluid>
			<Row>
				{codedata.map(code => (
					<Col xs={6} md={4} lg={3} key={code.id}>
					<Card className="card-style">
						<Card.Img src={code.cover} className="photo-square" />
						<Card.Body>
						<Card.Title>{code.title}</Card.Title>
						</Card.Body>
					</Card>
					</Col>
				))}
			</Row>
		</Container>
	</>
}
export default Code