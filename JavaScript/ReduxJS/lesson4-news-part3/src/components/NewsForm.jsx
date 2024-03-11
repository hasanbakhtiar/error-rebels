import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNews } from '../tools/action/newsAction';

const NewsForm = () => {
    const [img,setImg] = useState();
    const [title,setTitle] = useState();
    const [desc,setDesc] = useState();
    const dispatch = useDispatch();
    const formSubmit=e=>{
        e.preventDefault();
        dispatch(addNews({cTitle:title,cImg:img,cDesc:desc}));

    }
    
    return (
        <div className='container'>

                    <div className="d-flex align-items-center justify-content-center">
                    <div className="col-6">
                <form onSubmit={formSubmit}>
                    <div className="mb-3">
                        <label  className="form-label">Photo</label>
                        <input onChange={e=>setImg(e.target.value)} type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Title</label>
                        <input onChange={e=>setTitle(e.target.value)} type="text" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label  className="form-label">Description</label>
                        <input onChange={e=>setDesc(e.target.value)} type="text" className="form-control" />
                    </div>


                    <button type="submit" className="btn btn-dark">Add</button>
                </form>
            </div>
                    </div>


        </div>
    )
}

export default NewsForm