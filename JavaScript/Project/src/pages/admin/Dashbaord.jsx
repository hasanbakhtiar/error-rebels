import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import slugify from 'react-slugify';
import { deleteNews } from '../../tools/action/newsAction';

const Dashbaord = () => {
    const newsdata = useSelector(p=>p);
    const dispath = useDispatch();
    return (
        <div className='container'>
            <h1 className='text-center my-5 ' >All news table</h1>
            <div className="d-flex flex-column ">
            <Link className='btn btn-success text-start my-3' style={{width:"60px"}} to="/dashboard/add">Add</Link>
                <div className="col-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Photo</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                                
                            </tr>
                        </thead>
                        <tbody>

                            {newsdata.map((item,count)=>(
                                    <tr>
                                    <th scope="row">{count+1}</th>
                                    <td><img src={item.img} width={70} alt="err" /></td>
                                    <td>{item.title.slice(0,10)}...</td>
                                    <td>{item.desc.slice(0,30)}...</td>
                                    <th scope="col"><Link to={`/dashboard/edit/${slugify(item.title)}`} className='btn btn-warning'>Edit</Link></th>
                                    <th scope="col"><button onClick={()=>{
                                        dispath(deleteNews({id:item.id}))
                                    }} className='btn btn-danger'>X</button></th>
                                </tr>
                            ))}
                        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Dashbaord