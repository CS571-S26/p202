import { useState, useEffect } from "react";
import './Home.css'
import { Button, Container, Row, Col, Image } from 'react-bootstrap'
import salImg from '../assets/SallyPortfolio.png';
import salPhoto from '../assets/salPhoto1.png';
import salPhoto2 from '../assets/salPhoto2.png';
import sparkles from '../assets/asset.png'

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
						alt="Animated Picture of Sally with sparkles" 
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
			<Row>
				<Col
				style={{ 
						background: '#be1e2d', 
						display: 'flex', 
						justifyContent: 'center',
						alignItems: 'center'
					}}
					>
				<img 
						src={sparkles}
						alt="sparkle desgin" 
						style={{ width: "45%" }}
				/>
				</Col>
				<Col 
					style={{ 
						background: '#be1e2d', 
						display: 'flex', 
						justifyContent: 'center',
						alignItems: 'center'
					}}
					>
						<p style={{color:'#fdf3e3', marginLeft:'4vw', marginRight:'4vw',  marginTop:'2vw', marginBottom:'2vw'}}>
							I’m a multidisciplinary artist and scientist working at the intersection of code and creativity. 
							I focus on UI and web development, and robotic process automation, building digital experiences 
							that are both intuitive and expressive. 
						<p></p>
							I’m driven by curiosity and a desire to create work that feels meaningful.
						</p>
				</Col>
			</Row>
			<Row>
				<div style={{color:'#fdf3e3', marginLeft:'4vw', marginRight:'4vw',  marginTop:'2vw'}}></div>
			</Row>
		</Container>
	</>
}

export default Home