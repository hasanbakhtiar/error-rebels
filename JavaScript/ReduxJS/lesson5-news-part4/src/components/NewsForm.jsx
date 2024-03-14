import React, { useState } from 'react'

const NewsForm = ({formToProp,editnews}) => {
    const [img,setImg] = useState(editnews?editnews.img:"");
    const [title,setTitle] = useState(editnews?editnews.title:"");
    const [desc,setDesc] = useState(editnews?editnews.desc:"");
    
    const formSubmit=e=>{
        e.preventDefault();
        if (!img || !title || !desc) {
            alert('please, fill input')
        }else{
            formToProp({
                img:img,
                title:title,
                desc:desc
            })
        }

    }
    
    return (
        <div className='container'>

                    <div className="d-flex align-items-center justify-content-center">
                    <div className="col-6">
                <form onSubmit={formSubmit}>
                    <div className="mb-3">
                        <label  className="form-label">Photo</label>
                        <input value={img} onChange={e=>setImg(e.target.value)} type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Title</label>
                        <input value={title} onChange={e=>setTitle(e.target.value)} type="text" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label  className="form-label">Description</label>
                        <input value={desc} onChange={e=>setDesc(e.target.value)} type="text" className="form-control" />
                    </div>


                    <button type="submit" className="btn btn-dark">{editnews?"Edit":"Add"}</button>
                </form>
            </div>
                    </div>


        </div>
    )
}

export default NewsForm