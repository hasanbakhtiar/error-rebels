import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();


export const ApiProvider =({children})=>{
    const [product,setProduct] = useState([]);

    
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(res=>setProduct(res.data))
  },[])
    
    
    return <ApiContext.Provider value={[product,setProduct]}>
        {children}
    </ApiContext.Provider>
}