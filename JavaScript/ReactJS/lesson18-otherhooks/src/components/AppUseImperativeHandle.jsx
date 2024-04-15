import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useImperativeHandle } from 'react';
import { forwardRef } from 'react';
import {Helmet} from "react-helmet";

// const MyInput = forwardRef((props,ref)=>{
//   useImperativeHandle(ref,()=>({
//     hi:sayhi
//   }))
  
  
//   const sayhi = ()=>{
//     alert('Hello')
//   }
  
//   return(
//     <div><input type="text" /></div>
//   )
// } )






const AppUseImperativeHandle = () => {
  // const inputRef = useRef();
  // const handleClick = ()=>{
  //   inputRef.current.hi()
  // }
  const [data,setData] = useState("");
  const inputRef = useRef();
  return (
    <div className="application">
    {/* <Helmet>
        <meta charSet="utf-8" />
        <title>AppUseImperativeHandle</title>
    </Helmet>
    
    <div className="d-flex">
    <MyInput ref={inputRef} /><button onClick={handleClick}>send</button>
    </div> */}


    {/* {inputRef} */}
    <input type="text" ref={inputRef} /><button onClick={()=>{setData(inputRef.current.value)}}>test</button>
      {data}
</div>
  )
}

export default AppUseImperativeHandle