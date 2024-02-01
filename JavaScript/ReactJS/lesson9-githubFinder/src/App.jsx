import { useEffect, useState } from "react"
import Header from "./components/Header"
import Search from "./components/Search"
import Users from "./components/Users"
import axios from "axios"

const App = () => {
  const [users,setUsers] = useState([]);
  const [status,setStatus] = useState("");
 const searchValue = (keyword)=>{
    axios.get(`https://api.github.com/search/users?q=${keyword}`)
    .then(res=>setUsers(res.data.items))
  };
const formStatus = (comingStatus)=>{
      setStatus(comingStatus);
}
  return (
    <div>
      <Header/>
      <div className="container">
      <Search comingkeyword = {searchValue} dataStatus={formStatus}  />
      {users.length === 0 ? <h1 className="text-center">{status}</h1>:
      <Users alldata={users}/>}
      </div>
    </div>
  )
}

export default App