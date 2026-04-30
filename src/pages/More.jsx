import { Card, Row, Col, Container } from 'react-bootstrap';
import './Pages.css';
import miscdata from "../miscdata.json";
import MiscCard from '../components/MiscCard';

function More() {
	return <>
		<Container fluid>
			<p style={{margin:15}}> Here are some of my miscellaneous endeavours.</p>
			<Row>
				{miscdata.map(misc => (
					<Col xs={6} md={4} lg={3} key={misc.id}>
						<MiscCard {...misc} />
					</Col>
				))}
			</Row>
		</Container>
	</>
}
export default More;