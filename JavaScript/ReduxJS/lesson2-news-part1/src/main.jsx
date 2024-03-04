import React from 'react'
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App'
import store from './tools/store/configureStore';
import { addNews } from './tools/action/newsAction';
const newstore = store();

newstore.subscribe(()=>{
  console.log(newstore.getState());
})

newstore.dispatch(addNews({cTitle:"React Labs: What We've Been Working On – February 2024 ",cImg:"#",cDesc:"In React Labs posts, we write about projects in active research and development. We’ve made significant progress since our last update, and we’d like to share our progress."}))

newstore.dispatch(addNews({cTitle:"React Canaries: Enabling Incremental Feature Rollout Outside Meta",cImg:"#",cDesc:"We’d like to offer the React community an option to adopt individual new features as soon as their design is close to final, before they’re released in a stable version—similar to how Meta has long used bleeding-edge versions of React internally. We are introducing a new officially supported Canary release channel. It lets curated setups like frameworks decouple adoption of individual React features from the React release schedule."}))





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
