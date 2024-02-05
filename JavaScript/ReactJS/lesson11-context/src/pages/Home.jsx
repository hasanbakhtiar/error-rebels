import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import SingleCard from '../components/SingleCard';
import { Link } from 'react-router-dom';
import { ApiContext } from '../context/ApiContext';

const Home = () => {
    const [product] = useContext(ApiContext);
    

    return (
        <div>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/03/Galaxy-A52_A72_Violet.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://fscl01.fonpit.de/userfiles/7695213/image/Oppo_A94_5G.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://assets.mspimages.in/gear/wp-content/uploads/2023/06/RedMagic-8S-Pro-Colours.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            <div className='row g-5'>
                {product.slice(0,4).map(item => (
                    <SingleCard
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        img={item.image}
                    />
                ))}
            </div>
            <Link to="/products" className='btn btn-success text-center'>Buy more</Link>
        </div>
    )
}

export default Home