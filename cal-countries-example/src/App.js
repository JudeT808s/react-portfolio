import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

//Import components
import Navbar from './components/NavBar';
//import pages

import Home from './pages/Home';
function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Row>
          <Col>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
