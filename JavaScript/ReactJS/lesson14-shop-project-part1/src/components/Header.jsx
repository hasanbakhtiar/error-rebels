
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';

const Header = () => {
    const { totalItems } = useCart();
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <LinkContainer to="/"><Navbar.Brand href="#home">Best Shop</Navbar.Brand></LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                        <LinkContainer to="/products"><Nav.Link>Products</Nav.Link></LinkContainer>

                    </Nav>
                    <div>
                        <Link to="/cart" className="btn btn-dark position-relative">
                        <FaShoppingCart />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {totalItems}
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header