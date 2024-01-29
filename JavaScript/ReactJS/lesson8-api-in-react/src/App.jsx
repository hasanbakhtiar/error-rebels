import axios from "axios";
import { useEffect, useState } from "react"

const App = () => {
    const [data,setData] = useState([]); 

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res=>setData(res.data))
    },[])
  return (
    <div className="container">{data.map(i=><li key={i.id}>{i.title}</li>)}</div>
  )
}

export default App