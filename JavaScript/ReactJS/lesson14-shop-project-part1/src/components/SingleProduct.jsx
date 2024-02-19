import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap'
import { useCart } from 'react-use-cart';
const SingleProduct = ({id,title,price,photo,alldata}) => {
  const { addItem } = useCart();
  return (
    <Col sm={6} md={3}>
      <Card >
        <Card.Img height={300} style={{objectFit:"contain"}} variant="top" src={photo} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {price}$
          </Card.Text>
          <Button variant="dark">View Details</Button>
          <Button   onClick={() => addItem(alldata)} variant="info ms-3">Add to cart</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleProduct