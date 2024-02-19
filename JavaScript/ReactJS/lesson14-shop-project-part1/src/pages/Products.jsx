import React, { useContext } from 'react'
import { Row } from 'react-bootstrap'
import SingleProduct from '../components/SingleProduct'
import { ProductContext } from '../context/ProductContext'

const Products = () => {
    const [product] = useContext(ProductContext);
  return (
    <>
    <h1 className='text-center text-dark my-5'>Product List</h1>
    <Row className='g-5'>
       {product.map(item=>(
        <SingleProduct
        id={item.id}
        title={item.title}
        photo={item.image}
        price={item.price}
        key={item.id}
        alldata={item}
        />
       )) }
    </Row>
    </>
  )
}

export default Products