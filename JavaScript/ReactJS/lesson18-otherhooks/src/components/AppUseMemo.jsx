import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Helmet } from "react-helmet";
import axios from 'axios';
import { useMemo } from 'react';

const AppUseMemo = () => {
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUser(res.data))
  }, [])

  const getUserList = () => {
    console.log("email");
  return  user.map(item => (
      <li key={item.id} onClick={() => { setEmail(item.email);  }}>{item.name}</li>
    ))
  }

  const userRows = useMemo(()=>getUserList(),[email])
  

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>AppUseMemo</title>
      </Helmet>

      <h4 className='text-danger'>{email}</h4>
      <ul>
{userRows}
      </ul>

      <div>
        <button onClick={() => { setCount(count + 1); console.log("counter"); }} className='btn btn-success'>+</button>
        <h3>{count}</h3>
      </div>

    </div>
  )
}

export default AppUseMemo