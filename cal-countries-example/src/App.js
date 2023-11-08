import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

//Import components
import NavBar from './components/NavBar';
//import pages
import Home from './pages/Home';
import SingleCountry from './pages/SingleCountry';
import SearchResults from './pages/SearchResults';
import FilterResults from './pages/FilterResults';
import RegionDropdown from './components/RegionDropdown';

function App() {
  return (
    <Router>
      <NavBar />
      <Container>
        <RegionDropdown/>
        <Row>
          <Col>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/filter/:region' element={<FilterResults />} />
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
