import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import './Photography.css';
import bella1 from '../photo/bella1.jpg';
import janae1 from '../photo/janae1.jpeg';
import diego1 from '../photo/diego1.jpg';
import ellie1 from '../photo/ellie1.jpg';
import chloe1 from '../photo/chloe1.jpg';

function Photography() {

	return (
	  <Container fluid>
	    <Row style={{marginTop:'0.5vw'}}>
			<Col xs={6} md={4} lg={3} xl={2} style={{ margin: '2vw' }}>
				<Card style={{ width: '18rem', borderRadius: 20 }}>
	          <Card.Img variant="top" src={bella1} className="photo-square" />
	          <Card.Body>
	            <Card.Title>Bella, 18</Card.Title>
	          </Card.Body>
	        </Card>
	      </Col>
			<Col xs={6} md={4} lg={3} xl={2} style={{ margin: '2vw' }}>
				<Card style={{ width: '18rem', borderRadius: 20 }}>
	          <Card.Img variant="top" src={janae1} className="photo-square" />
	          <Card.Body>
	            <Card.Title>Janae, 19</Card.Title>
	          </Card.Body>
	        </Card>
	      </Col>
			<Col xs={6} md={4} lg={3} xl={2} style={{ margin: '2vw' }}>
				<Card style={{ width: '18rem', borderRadius: 20 }}>
	          <Card.Img variant="top" src={diego1} className="photo-square" />
	          <Card.Body>
	            <Card.Title>Diego, 18</Card.Title>
	          </Card.Body>
	        </Card>
	      </Col>
			<Col xs={6} md={4} lg={3} xl={2} style={{ margin: '2vw' }}>
				<Card style={{ width: '18rem', borderRadius: 20 }}>
	          <Card.Img variant="top" src={ellie1} className="photo-square" />
	          <Card.Body>
	            <Card.Title>Ellie, 18</Card.Title>
	          </Card.Body>
	        </Card>
	      </Col>
			<Col xs={6} md={4} lg={3} xl={2} style={{ margin: '2vw' }}>
				<Card style={{ width: '18rem', borderRadius: 20 }}>
	          <Card.Img variant="top" src={chloe1} className="photo-square" />
	          <Card.Body>
	            <Card.Title>Chloe, 18</Card.Title>
	          </Card.Body>
	        </Card>
	      </Col>
	    </Row>
	  </Container>
	);
}
export default Photography