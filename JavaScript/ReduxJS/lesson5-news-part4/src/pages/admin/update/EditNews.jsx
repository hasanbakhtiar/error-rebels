import React from 'react'
import NewsForm from '../../../components/NewsForm'
import { useDispatch, useSelector } from 'react-redux'
import { addNews, editNews } from '../../../tools/action/newsAction';
import { useNavigate, useParams } from 'react-router-dom';
import slugify from 'react-slugify';

const AddNews = () => {
  const dispatch = useDispatch();
  const {slug} = useParams();
  const newsdata = useSelector(p=>p);
  const singlenewsdata = newsdata.find(p=>slugify(p.title)===slug);
  const navigate = useNavigate();
    console.log(singlenewsdata);

  return (
    <div>
        <h1 className='text-center my-5'>Edit news</h1>
        <NewsForm 
        editnews={singlenewsdata} 
        formToProp={fd=>{
          dispatch(editNews(singlenewsdata.id,fd))
          navigate("/dashboard")
        }} />
    </div>
  )
}

export default AddNews