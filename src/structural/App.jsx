import { useState } from 'react'
import './App.css'
import { Card, Button, NavItem, Navbar, Nav } from 'react-bootstrap'
import { HashRouter, Route, Routes } from 'react-router';
import SallyLayout from './SallyLayout';
import Photography from '../pages/Photography';
import NoMatch from '../pages/NoMatch'

function App() {
  const [count, setCount] = useState(0)

  function updateCount() {
    setCount(count + 1);
  }

  return (
   <>

      <Routes>
        <Route path="/" element={<SallyLayout/>}>
          <Route index element={<App />} />
          <Route path="/photography" element={<Photography />}></Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>


   <Button style={{padding: 5, width: 100}} onClick={() => updateCount()}>Click me!</Button>
   <h1 className="inter-bold" style={{fontSize:(count+10)*10}}>{count}</h1>

   <h1 className="inter-bold" style={{marginTop: 200, color: 'fffff'}}>Hello</h1>
   <div className="grain"></div>
   <div className="canvas">
   <div className="aurora-bg">
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>
      <div className="blob blob4"></div>
    </div>
    </div>
    

    
    </>
  )
}

export default App
