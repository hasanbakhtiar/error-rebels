import { useContext } from "react";
import { Link, useParams } from "react-router-dom"
import { ApiContext } from "../context/ApiContext";

const ProductDetails = () => {
    const {url} = useParams();
    const products = useContext(ApiContext);
    const filterProduct = products[0].filter(p=>p.id == url);
    console.log(filterProduct);
  return (
    <>
    {filterProduct.length === 0 ? <div className="d-flex justify-content-center">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FkYqVAj5QNOXug%2Fgiphy.gif&f=1&nofb=1&ipt=e2503bf9d9e8ebfd6c30be7aea5511f025edcee72e987ddd6b8963d6a7ad88a0&ipo=images" alt="err" />
    </div>:
<div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img src={filterProduct[0].image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
    </div>
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{filterProduct[0].title} </h1>
      <p className="lead">{filterProduct[0].description}</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Add to card</button>
        <Link  to="/products" className="btn btn-outline-secondary btn-lg px-4">Back</Link>
      </div>
    </div>
  </div>
</div>

    }
    </>
    
            

  )
}

export default ProductDetails