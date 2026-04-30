import { Card, Row, Col, Container } from 'react-bootstrap';
import './Pages.css';
import designdata from "../designdata.json";
import DesignCard from '../components/DesignCard';

function Design() {
	return <>
		<Container fluid>
			<p style={{margin:15}}> I'm a graphic designer focusing on UI and Web Development. Click on a project to learn more! </p>
			<Row>
				{designdata.map(design => (
					<Col xs={6} md={4} lg={3} key={design.id}>
						<DesignCard {...design} />
					</Col>
				))}
			</Row>
		</Container>
	</>
}
export default Design