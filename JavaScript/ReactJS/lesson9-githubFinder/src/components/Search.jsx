import React, { useState } from 'react'

const Search = ({comingkeyword}) => {
    const [inputvalue, setInputvalue] = useState("");

    const handleForm = (e) => {
        e.preventDefault();
            if (!inputvalue) {
                alert('please, fill search box');
            }else{
                comingkeyword(inputvalue);
                setInputvalue("");
            }
           
        }
    return (


        <form onSubmit={handleForm} className="input-group  my-5">
            <input value={inputvalue} onChange={e=>setInputvalue(e.target.value)} type="text" className="form-control" placeholder="Search username" />
            <button className="btn btn-dark" type="submit" >Search</button>
            <button onClick={()=>{
                window.location.reload();
            }} className="btn btn-warning" type="button" >Reset</button>
        </form>


    )
}

export default Search