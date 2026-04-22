import { Card, Modal, Carousel, Container, Row, Col, Button} from 'react-bootstrap';
import { useState } from "react";
import '../pages/Pages.css';
import XButton from '../assets/XButton.png'

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
		<Modal className='photo-modal'
			show={show}
			onHide={handleClose}
			backdrop="static"
			size="xl"
			centered
		>
	<Modal.Body >
		<Container fluid>
			<Row>
				<Col md={6}>
					{props.carousel && props.carousel.length > 0 ? (
						<Carousel>
							{props.carousel.map((img, index) => (
								<Carousel.Item key={index}>
									<img
										className="photo"
										src={img}
										alt={`Slide ${index}`}
									/>
								</Carousel.Item>
							))}
						</Carousel>
					) : (
						<Card.Img src={props.cover} className="photo" />
					)}
				</Col>

				<Col md={5} className="d-flex flex-column justify-content-center">
					<Button
						alt="Close"
						onClick={handleClose}
						className="close-btn"
					> X
					</Button>
					<h4 style={{fontSize:45}}>{props.title}</h4>
					<p>{props.description}</p>
				</Col>

			</Row>
		</Container>
	</Modal.Body>
</Modal>
	</>
}

export default PhotoCard;