import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap'
import { useCart } from 'react-use-cart';
import { LinkContainer } from 'react-router-bootstrap';
import slugify from 'react-slugify';
const SingleProduct = ({title,price,photo,alldata}) => {
  const { addItem } = useCart();
  return (
    <Col sm={6} md={3}>
      <Card >
        <Card.Img height={300} style={{objectFit:"contain"}} variant="top" src={photo} />
        <Card.Body>
          <Card.Title>{title.slice(0,10)}...</Card.Title>
          <Card.Text>
            {price}$
          </Card.Text>
        <div className="d-flex">
        <LinkContainer to={`/products/${slugify(title)}`}><Button variant="dark">View Details</Button></LinkContainer>
          <Button onClick={() => addItem(alldata)} variant="info ms-3">Add to cart</Button>
        </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleProduct