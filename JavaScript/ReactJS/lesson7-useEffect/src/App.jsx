import { useEffect, useState } from "react"

const App = () => {
  const [count,setCount] = useState(0);
  const [test,setTest] = useState(0);
  useEffect(()=>{
    console.log('useEffect is running');
  });
  return (
    <div className="container mt-5">
      {test}
        <button onClick={()=>{setTest(test+1)}}>test</button>
      
      {count}
        <button onClick={()=>{setCount(count+1)}}>increment</button>

    </div>
  )
}

export default App