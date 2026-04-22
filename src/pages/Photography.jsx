import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import './Pages.css';
import photos from '../photos.json';

function Photography() {

	return (
	  <Container fluid>
	    <Row>
		{photos.map(photo => (
			<Col xs={6} md={4} lg={3} key={photo.id}>
			<Card className="card-style">
				<Card.Img src={photo.cover} className="photo-square" />
				<Card.Body>
				<Card.Title>{photo.title}</Card.Title>
				</Card.Body>
			</Card>
			</Col>
		))}
		</Row>
	  </Container>
	);
}
export default Photography