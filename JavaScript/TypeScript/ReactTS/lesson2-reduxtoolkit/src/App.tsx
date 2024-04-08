import React from "react";
import { useSelector } from "react-redux";

const App: React.FC = () => {
  const data = useSelector((p: any) => p.todos);
  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-center">
        <div className="col-9">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-dark"
              type="button"
              id="button-addon2"
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <li>{data[0].text}</li>
    </div>
  );
};

export default App;
