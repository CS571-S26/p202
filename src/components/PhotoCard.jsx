import { Card, Modal, Carousel, Container, Row, Col, Button} from 'react-bootstrap';
import { useState } from "react";
import '../pages/Pages.css';

function PhotoCard(props) {
	const [show, setShow] = useState(false);
  	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return <>
		<Card className="card-style" onClick={handleShow}>
			<Card.Img src={props.cover} className="photo-square" />
			<Card.Body>
			<Card.Title>{props.title}</Card.Title>
			</Card.Body>
		</Card>
		<Modal
	show={show}
	onHide={handleClose}
	backdrop="static"
	keyboard={false}
	size="xl"
	centered
>
	<Modal.Body>
		<Container fluid>
			<Row>
				<Col md={7}>
					{props.carousel && props.carousel.length > 0 ? (
						<Carousel>
							{props.carousel.map((img, index) => (
								<Carousel.Item key={index}>
									<img
										className="d-block w-100 photo-square"
										src={img}
										alt={`Slide ${index}`}
									/>
								</Carousel.Item>
							))}
						</Carousel>
					) : (
						<Card.Img src={props.cover} className="photo-square" />
					)}
				</Col>

				<Col md={5} className="d-flex flex-column justify-content-center">
					<Button></Button>
					<h4>{props.title}</h4>
					<p>{props.description}</p>
				</Col>

			</Row>
		</Container>
	</Modal.Body>
</Modal>
	</>
}

export default PhotoCard;