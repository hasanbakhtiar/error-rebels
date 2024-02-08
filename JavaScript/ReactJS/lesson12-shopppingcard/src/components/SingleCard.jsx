import React from 'react'
import { Link } from 'react-router-dom'

const SingleCard = ({ img, title, price, id }) => {
    return (
        <div className="col-12 col-sm-6 col-md-3">
            <div className="card" >
                <img height={300} style={{objectFit:"contain"}} src={img} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0,20)}...</h5>
                    <p className="card-text">{price}$</p>
                    <Link to={`/products/${id}`} className="btn btn-primary">View details</Link>
                </div>
            </div>
        </div>
    )
}

export default SingleCard