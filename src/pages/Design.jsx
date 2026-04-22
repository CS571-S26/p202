import { Card, Row, Col, Container } from 'react-bootstrap';
import './Pages.css';
import designdata from "../designdata.json";

function Design() {
	return <>
		<Container fluid>
			<Row>
				{designdata.map(design => (
					<Col xs={6} md={4} lg={3} key={design.id}>
					<Card className="card-style" >
						<Card.Img src={design.cover} className="design-photo" />
						<Card.Body>
						<Card.Title>{design.title}</Card.Title>
						</Card.Body>
					</Card>
					</Col>
				))}
			</Row>
		</Container>
	</>
}
export default Design