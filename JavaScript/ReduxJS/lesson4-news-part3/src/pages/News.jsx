import React, { useContext } from 'react'
import SingleCard from '../components/SingleCard'
import { useSelector } from 'react-redux'
import { LangContext } from '../context/LangContext';

const News = () => {
    const newsdata = useSelector(p=>p);
    const [lang]= useContext(LangContext);
    return (
        <div className='container'>
            <h1 className='mt-5 text-center'>{lang==="AZ"?"Xeberler":""}</h1>
            <div className="row">
                    {newsdata.map(item=>(
                        <SingleCard 
                        photo={item.img}
                        title={item.title}
                        desc={item.desc}
                        key={item.id}
                        id={item.id}
                        />
                    ))}
            </div>
        </div>
    )
}

export default News