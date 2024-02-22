import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useCart } from 'react-use-cart';

const Cart = () => {
  const {
    isEmpty,
    emptyCart,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart();
  return (
  <>
{isEmpty?<div className='d-flex justify-content-center w-100'><img src='https://cdn.dribbble.com/users/461802/screenshots/4421003/emptycart.gif'/></div>:<div>
<h1 
  className='text-center my-5'>Cart</h1>
    <Table striped bordered hover >
    <thead>
      <tr>
        <th>#</th>
        <th>Photo</th>
        <th>Title</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {items.map((i,c)=>(
        <tr>
        <td>{c+1}</td>
        <td><img width={70} src={i.image} alt="" /></td>
        <td>{i.title}</td>
        <td>{Math.round(i.price*i.quantity)}$</td>
        <td>
        <Button onClick={() => updateItemQuantity(i.id, i.quantity - 1)} variant='danger'>-</Button>
        <span className='mx-2'>{i.quantity}</span>
          <Button variant='success' onClick={() => updateItemQuantity(i.id, i.quantity + 1)}>+</Button>

        </td>
        <td><Button onClick={() => removeItem(i.id)} variant='danger'>X</Button></td>
      </tr>
      ))}
    
    </tbody>
  </Table>
  <h4>Total price: {cartTotal}$</h4>
  <Button variant='danger' onClick={()=>{emptyCart()}}>Clear all</Button>
  </div>}
  </>
  )
}

export default Cart