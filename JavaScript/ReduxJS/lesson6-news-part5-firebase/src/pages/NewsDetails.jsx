import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import slugify from 'react-slugify';

const NewsDetails = () => {
    const {slug} = useParams();
    const newsData = useSelector(p=>p);
    const newsdetails= newsData.filter(p=>slugify(p.title) === slug);
    console.log(newsdetails);
  return (
    <div>
        <h1>{newsdetails[0].title}</h1>
        <h1>{newsdetails[0].desc}</h1>
        <img src={newsdetails[0].img} alt="" />
    </div>
  )
}

export default NewsDetails