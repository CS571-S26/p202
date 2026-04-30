import './App.css'
import { Route, Routes, HashRouter, Navigate } from 'react-router-dom';
import SallyLayout from './SallyLayout';
import Photography from '../pages/Photography';
import NoMatch from '../pages/NoMatch'
import Design from '../pages/Design';
import Home from '../pages/Home';
import Code from '../pages/Code';
import More from '../pages/More';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<SallyLayout/>}>
            <Route index element={<Navigate to="/home" />} />
            <Route path="home" element={<Home />}></Route>
            <Route path="photography" element={<Photography />}></Route>
            <Route path="design" element={<Design />}></Route>
            <Route path="code" element={<Code />}></Route>
            <Route path="more" element={<More />}></Route>
            <Route path="*" element={<NoMatch />}></Route>
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
