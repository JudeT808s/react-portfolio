import { Link } from 'react-router-dom'
import { Container, Nav } from 'react-bootstrap';
import NavbarClass from 'react-bootstrap/Navbar';
import Searchbar from './SearchBar';



const NavBar = () => {
    return (
        <NavbarClass expand="lg" className="bg-body-tertiary">
            <Container>
                <Link to={`/`}><NavbarClass.Brand>Rest Countries
                </NavbarClass.Brand>
                </Link>
                <Nav.Link>
                    <Link to={`/`}>Home</Link>
                </Nav.Link>
            <Searchbar/>
            </Container>

        </NavbarClass>
    )
}
export default NavBar