import { useState } from 'react'
import './Home.css'
import { Button, Container, Row, Col, Image } from 'react-bootstrap'
import salImg from '../assets/SallyPortfolio.png';

function Home() {

	return <>
		<Container fluid>
			<Row >
				<Col>
					<img 
						src={salImg} 
						alt="Hello I'm Sal" 
						style={{ width: "100%" }}
					/>
					<p style={{marginLeft:40, marginTop:'-4vw', marginBottom:40, fontSize:'3.5vw', lineHeight:1.2}}> 
						I’m a Computer Science
						and Graphic Design grad
						from University of 
						Wisconsin-Madison 
					</p>
				</Col>
				<Col style={{background:'#fdf3e3'}}>
				</Col>
			</Row>
		</Container>
			
		
		<div className="grain"></div>
	</>
}

export default Home