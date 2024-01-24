import { useState } from 'react';
import { phonesOne, phonesTwo } from './data/productdata';
import Login from './components/Login';

const App = () => {
  const [data, setData] = useState(phonesOne);
  const filterData = data.filter(ph=>ph.stock>=15);


  return (
    <>
      {/* <div>{filterData.map(i => <li>{i.title}</li>)}</div>
      <button onClick={() => {
        setData(phonesTwo)
      }}>submit</button> */}

      <Login/>
    </>
  )
}

export default App