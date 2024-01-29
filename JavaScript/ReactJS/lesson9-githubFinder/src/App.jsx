import { useEffect, useState } from "react"
import Header from "./components/Header"
import Search from "./components/Search"
import Users from "./components/Users"
import axios from "axios"

const App = () => {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    axios.get('https://api.github.com/users')
    .then(res=>setUsers(res.data))
  },[])
  
  return (
    <div>
      <Header/>
      <div className="container">
      <Search/>
      <Users alldata={users}/>
      </div>
    </div>
  )
}

export default App