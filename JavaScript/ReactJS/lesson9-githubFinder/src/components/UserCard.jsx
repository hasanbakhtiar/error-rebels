
const UserCard = ({photo,url,name,nodeid}) => {
    return (
        <div className="col-12 col-sm-6 col-md-3">
            <div className="card" >
                <img src={photo} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{nodeid}</p>
                    <a href={url} target="_blank" rel="noreferrer" className="btn btn-outline-dark">Go profile</a>
                </div>
            </div>
        </div>
    )
}

export default UserCard