import React from 'react'
import NewsForm from '../../../components/NewsForm'
import { useDispatch } from 'react-redux'
import { addNews } from '../../../tools/action/newsAction';
import { useNavigate } from 'react-router-dom';

const AddNews = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
        <h1 className='text-center my-5'>Add news</h1>
        <NewsForm formToProp={fd=>{
          dispatch(addNews(fd))
          navigate('/dashboard')
        }} />
    </div>
  )
}

export default AddNews