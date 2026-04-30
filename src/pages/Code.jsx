import { Card, Row, Col, Container } from 'react-bootstrap';
import './Pages.css';
import code from "../code.json";
import CodeCard from '../components/CodeCard';

function Code() {
	return <>
		<Container fluid>
			<p style={{margin:15}}> I'm a software engineer focusing on Robotic Process Automation and Web Development. Click on a project to learn more! </p>
			<Row>
				{code.map(code => (
					<Col xs={6} md={4} lg={3} key={code.id}>
						<CodeCard {...code} />
					</Col>
				))}
			</Row>
		</Container>
	</>
}
export default Code