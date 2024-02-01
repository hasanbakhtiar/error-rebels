import { useEffect, useState } from "react"
import Header from "./components/Header"
import Search from "./components/Search"
import Users from "./components/Users"
import axios from "axios"

const App = () => {
  const [users,setUsers] = useState([]);
 const searchValue = (keyword)=>{
    axios.get(`https://api.github.com/search/users?q=${keyword}`)
    .then(res=>setUsers(res.data.items))
  };
  return (
    <div>
      <Header/>
      <div className="container">
      <Search comingkeyword = {searchValue} />
      <Users alldata={users}/>
      </div>
    </div>
  )
}

export default App