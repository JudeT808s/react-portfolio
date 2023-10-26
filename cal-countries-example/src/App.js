import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

//Import components
import Navbar from './components/NavBar';
//import pages
import Home from './pages/Home';
import SingleCountry from './pages/SingleCountry';

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Row>
          <Col>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/country/:name' element={<SingleCountry />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
