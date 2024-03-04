import React from 'react'
import SingleCard from '../components/SingleCard'

const News = () => {
    return (
        <div className='container'>
            <h1 className='mt-5 text-center'>News</h1>
            <div className="row">
                    <SingleCard />
            </div>
        </div>
    )
}

export default News