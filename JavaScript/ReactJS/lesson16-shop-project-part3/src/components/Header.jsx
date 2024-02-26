
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";
import { LinkContainer } from 'react-router-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { FaSearch } from "react-icons/fa";
import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { ListGroup } from 'react-bootstrap';
import { ProductContext } from '../context/ProductContext';
import slugify from 'react-slugify';


const Header = () => {
  const [product] = useContext(ProductContext)
  const [query, setQuery] = useState("");
  const { totalItems } = useCart();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
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
          <div className='d-flex align-items-center justify-content-center'>
            {localStorage.getItem('login') === 'true' ? <div className='d-flex justify-content-center align-items-center'>
            <p className='my-3'>Hello, {localStorage.getItem("fullname")}</p>
            <Button variant='danger mx-3' onClick={()=>{localStorage.setItem("login",'false');
          window.location.assign('/login');
          }}>Log out</Button>
            </div> : <div>
              <LinkContainer to="/login"><Button variant='outline-dark'>Login</Button></LinkContainer>
              <LinkContainer to="/register"><Button variant='outline-primary mx-3'>Register</Button></LinkContainer>
            </div>}
            <Button variant='info me-3' onClick={handleShow}><FaSearch />
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Search area</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Enter product"
                    onChange={e => setQuery(e.target.value)}

                  />
                  <Button variant="outline-secondary" id="button-addon2">
                    Search
                  </Button>
                </InputGroup>
                <ListGroup>
                  {query.length === 0 ? "" : product.filter(p => p.title.toLowerCase().includes(query)).map(item => (
                    <LinkContainer to={`/products/${slugify(item.title)}`}><ListGroup.Item onClick={() => { setShow(false) }}><img src={item.image} width={70} />{item.title}</ListGroup.Item></LinkContainer>
                  ))}
                </ListGroup>
              </Modal.Body>
              <Modal.Footer>

              </Modal.Footer>
            </Modal>
            <Button onClick={()=>{{localStorage.getItem("login") === 'true' ? navigate("/cart"): navigate("/login")}}} className="btn btn-dark position-relative">
              <FaShoppingCart />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {localStorage.getItem("login") === 'true' ? totalItems: "0"}  
              </span>
            </Button>
            
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header