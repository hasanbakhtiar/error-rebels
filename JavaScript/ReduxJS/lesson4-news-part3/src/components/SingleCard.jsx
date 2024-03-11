import React from 'react'

const SingleCard = ({photo,title,desc}) => {
    return (
        <div className="col-12 col-sm-6 col-md-4">
            <div className="card">
                <img src={photo} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc.slice(0,100)}...</p>
                    <a href="#" className="btn btn-primary">Read more</a>
                </div>
            </div>

        </div>
    )
}

export default SingleCard