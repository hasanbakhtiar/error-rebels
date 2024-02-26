import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext';
import slugify from 'react-slugify';
import { useCart } from 'react-use-cart';

const ProductDetails = () => {
  const { slug } = useParams();
  const [product] = useContext(ProductContext);
  const productDetails = product.filter(p => slugify(p.title) === slug);
  const { addItem } = useCart();
  console.log(productDetails);
  return (
    <>
      {product.length === 0 ? <h1 className='text-center mt-5'>Loading...</h1> : <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={productDetails[0].image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{productDetails[0].title}</h1>
            <p className="lead">{productDetails[0].description}</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to="/products" className="btn btn-outline-secondary btn-lg px-4">Back</Link>
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={() => { addItem(productDetails[0]) }}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>}

    </>

  )
}

export default ProductDetails