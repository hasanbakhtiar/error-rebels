import React from 'react'
import { useLayoutEffect } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from "react-helmet";
const AppUseLayoutEffect = () => {
  const [state,setState] = useState('default value'); 
  useLayoutEffect(()=>{
    setState('updated')
  },[])
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>AppUseLayoutEffect</title>
      </Helmet>
      <h1>{state}</h1>
    </div>
  )
}

export default AppUseLayoutEffect