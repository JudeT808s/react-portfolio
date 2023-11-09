import { Link } from 'react-router-dom'
import { Container, Nav } from 'react-bootstrap';
import NavbarClass from 'react-bootstrap/Navbar';
import Searchbar from './SearchBar';
import RegionDropdown from './RegionDropdown';



const NavBar = () => {
    return (
        <NavbarClass expand="lg" className="bg-body-tertiary">
            <Container>
                <Link to={`/`}><NavbarClass.Brand>Rest Countries
                </NavbarClass.Brand>
                </Link>
                <Searchbar />
                <Nav.Link>
                    <RegionDropdown/>
                </Nav.Link>
            </Container>

        </NavbarClass>
    )
}
export default NavBar