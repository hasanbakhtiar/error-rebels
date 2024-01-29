import UserCard from "./UserCard"

const Users = ({alldata}) => {
  return (
    <div className="row g-5">
        
        {alldata.map(i=>(

        <UserCard 
        photo={i.avatar_url} 
        name={i.login} 
        url={i.html_url} 
        key={i.id} 
        nodeid={i.node_id} />
        ))}
      
    </div>
  )
}

export default Users