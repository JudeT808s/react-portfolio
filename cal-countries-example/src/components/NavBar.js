import { Link } from 'react-router-dom'
import { Container, Nav } from 'react-bootstrap';
import NavbarClass from 'react-bootstrap/Navbar';



const Navbar = () => {
    return (
        <NavbarClass expand="lg" className="bg-body-tertiary">
            <Container>
                <Link to={`/`}><NavbarClass.Brand>Rest Countries
                </NavbarClass.Brand>
                </Link>
                <NavbarClass.Toggle aria-controls="basic-navbar-nav" />
                <Nav.Link>
                    <Link to={`/`}>Home</Link>
                </Nav.Link>

            </Container>

        </NavbarClass>
    )
}
export default Navbar