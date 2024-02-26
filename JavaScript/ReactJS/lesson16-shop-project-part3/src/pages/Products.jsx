import React, { useContext, useState } from 'react'
import { Row } from 'react-bootstrap'
import SingleProduct from '../components/SingleProduct'
import { ProductContext } from '../context/ProductContext'

const Products = () => {
  const [product] = useContext(ProductContext);
  const [catProduct,setCatProduct] = useState([]);
  const filterCategory = (cat)=>{
    const catData = product.filter(p=>p.category === cat);
    setCatProduct(catData);
  }
  return (
    <>
      <h1 className='text-center text-dark my-5'>Product List</h1>
      <Row>
        <div className="col-12 col-sm-12 col-md-3">
          <ul className="list-group">
            <li className="list-group-item" onClick={()=>{filterCategory("men's clothing")}}>Men's clothing</li>
            <li className="list-group-item" onClick={()=>{filterCategory("women's clothing")}}>Women's clothing</li>
            <li className="list-group-item" onClick={()=>{filterCategory("jewelery")}}>Jewelery</li>
            <li className="list-group-item" onClick={()=>{filterCategory("electronics")}}>Electronics</li>
          </ul>

        </div>
      <div className="col-12 col-sm-12 col-md-9">
        <Row className='g-5'>
      {catProduct.length ===0 ?  product.map(item => (
          <SingleProduct
            id={item.id}
            title={item.title}
            photo={item.image}
            price={item.price}
            key={item.id}
            alldata={item}
          />
        )):  catProduct.map(item => (
          <SingleProduct
            id={item.id}
            title={item.title}
            photo={item.image}
            price={item.price}
            key={item.id}
            alldata={item}
          />
        ))}
        </Row>
      </div>
      </Row>
    </>
  )
}

export default Products