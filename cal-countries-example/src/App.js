import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

//Import components
import NavBar from './components/NavBar';
import RegionDropdown from './components/RegionDropdown';

//import pages
import Home from './pages/Home';
import SingleCountry from './pages/SingleCountry';
import NoCountryFound from './pages/NoCountryFound';



function App() {
  return (
    <Router>
      <NavBar />
      <Container>
        <Row>
          <Col>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/filter/:filter' element={<Home />} />
              <Route path='/search/:input' element={<Home />} />
              <Route path='/country/:name' element={<SingleCountry />} />
              <Route path='*' element={<NoCountryFound />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
