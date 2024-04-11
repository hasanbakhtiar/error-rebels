import React, {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "./features/todoSlice";

const App: React.FC = () => {
  const [list,setList] = useState<string>("");
  const data = useSelector((p: any) => p.todos);
const dispatch = useDispatch();
  const todoSubmit =(e:React.FormEvent)=>{
    e.preventDefault();
  if (!list) {
    alert('')
  }else{
    dispatch(add(list));
    setList("");
  }
    
  }
  return (
    <div className="container my-5">
      <div className="d-flex align-items-center justify-content-center">
        <div className="col-9">
          <form onSubmit={todoSubmit} className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={list}
              onChange={(e)=>{setList(e.target.value)}}
            />
            <button
              className="btn btn-dark"
              type="submit"
              id="button-addon2"
            >
              Send
            </button>
          </form>
          <ul className="list-group">
            {data.map((item:any)=>(
              <li className="list-group-item d-flex align-items-center justify-content-between" key={item.id}>{item.text}<button className="btn btn-danger" onClick={()=>{
                dispatch(remove(item.id))
              }}>Del</button></li>
            ))}
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default App;
