import { applyMiddleware, createStore } from "redux"
import { newsReducer } from "../reducer/newsReducer";
import { thunk } from "redux-thunk";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const configureStore=()=>{
    const store = createStore(newsReducer,composeEnhancers(applyMiddleware(thunk)));
    return  store;
}

export default configureStore;







