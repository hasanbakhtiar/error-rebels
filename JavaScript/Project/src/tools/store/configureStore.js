import { createStore } from "redux"
import { newsReducer } from "../reducer/newsReducer";



 const configureStore=()=>{
    const store = createStore(newsReducer);
    return  store;
}

export default configureStore;