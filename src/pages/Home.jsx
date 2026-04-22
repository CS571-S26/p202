import { useState, useEffect } from "react";
import './Home.css'
import { Button, Container, Row, Col, Image } from 'react-bootstrap'
import salImg from '../assets/SallyPortfolio.png';
import salPhoto from '../assets/salPhoto1.png';
import salPhoto2 from '../assets/salPhoto2.png';

function Home() {
	
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst(prev => !prev);
    }, 600);

    return () => clearInterval(interval);
  }, []);

	return <>
		<Container fluid>
			<Row >
				<Col style={{marginLeft:35}}>
					<img 
						src={salImg} 
						alt="Hello I'm Sal" 
						style={{ width: "100%" }}
					/>
					<p style={{marginLeft:40, marginTop:'-2vw', fontSize:'2.4vw', lineHeight:1.2}}> 
						I’m a Computer Science
						and Graphic Design grad
						from University of 
						Wisconsin-Madison.
					</p>
					<p style={{marginLeft:40, marginTop:'1.5vw', marginBottom:30, fontSize:'2.4vw', lineHeight:1.2}}> 
						Take a look around
						to see what I'm all about!
					</p>
				</Col>
				<Col 
					style={{ 
						background: '#fdf3e3', 
						display: 'flex', 
						justifyContent: 'center',
						alignItems: 'center'
					}}
					>
					<img 
						src={showFirst ? salPhoto : salPhoto2}
						alt="Hello I'm Sal" 
						style={{ width: "65%" }}
					/>
				</Col>
			</Row>
		</Container>
			
		
		<div className="grain"></div>
	</>
}

export default Home