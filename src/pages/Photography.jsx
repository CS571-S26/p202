import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import './Pages.css';
import photos from '../photos.json';
import PhotoCard from '../components/PhotoCard';

function Photography() {

	return (
	  <Container fluid>
	    <Row>
			{photos.map(photo => (
				<Col xs={6} md={4} lg={3} key={photo.id}>
					<PhotoCard {...photo} />
				</Col>
			))}
		</Row>
	  </Container>
	);
}
export default Photography