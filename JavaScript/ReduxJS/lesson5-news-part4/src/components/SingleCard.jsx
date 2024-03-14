import React from 'react'
import { Link } from 'react-router-dom'
import slugify from 'react-slugify'

const SingleCard = ({photo,title,desc,id}) => {
    return (
        <div className="col-12 col-sm-6 col-md-4">
            <div className="card">
                <img src={photo} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc.slice(0,100)}...</p>
                    <Link to={`/news/${slugify(title)}`} className="btn btn-primary">Read more</Link>
                </div>
            </div>

        </div>
    )
}

export default SingleCard