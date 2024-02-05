import React from 'react'

const SingleCard = ({ img, title, price }) => {
    return (
        <div className="col-12 col-sm-6 col-md-3">
            <div className="card" >
                <img height={300} style={{objectFit:"contain"}} src={img} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{price}$</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </div>
    )
}

export default SingleCard