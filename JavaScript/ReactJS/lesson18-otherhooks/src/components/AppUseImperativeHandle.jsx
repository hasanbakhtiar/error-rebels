import React from 'react'
import {Helmet} from "react-helmet";

const MyInput = ()=>{
  return(
    <button>send</button>
  )
} 

const AppUseImperativeHandle = () => {
  
  return (
    <div className="application">
    <Helmet>
        <meta charSet="utf-8" />
        <title>AppUseImperativeHandle</title>
    </Helmet>
    
    <MyInput />
    
</div>
  )
}

export default AppUseImperativeHandle