import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

//Import components
import NavBar from './components/NavBar';
//import pages
import Home from './pages/Home';
import SingleCountry from './pages/SingleCountry';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <Router>
      <NavBar />
      <Container>
        <Row>
          <Col>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/search/:input' element={<SearchResults />} />
              <Route path='/country/:name' element={<SingleCountry />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
