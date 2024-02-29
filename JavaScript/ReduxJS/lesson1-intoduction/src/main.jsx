import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createStore } from 'redux';



const mystate = {
    count:0
};
const countReducer = (state=mystate,action)=>{
    switch (action.type) {
      case "increment":
        return {
          count:state.count+1
        }
        case "decrement":
          return {
            count:state.count-1
          }
      default:

    }
}

const store = createStore(countReducer);

store.subscribe(()=>{
  console.log(store.getState());
})

store.dispatch({
  type:"increment"
})

store.dispatch({
  type:"increment"
})



store.dispatch({
  type:"decrement"
})
store.dispatch({
  type:"increment"
})










// const basket = [];

// const dataReducer = (state=basket,action)=>{
//   switch (action.type) {
//     case "Increment":
//       return  state=['new product'];
//       case "Decrement":
//         return  state=[];
//     default:
//         return  "no action"
//   }
// }


// const store = createStore(dataReducer);

// store.subscribe(()=>{
//   console.log(store.getState());
// })


// store.dispatch({
//   type:"Increment"
// });

// store.dispatch({
//   type:"Decrement"
// });








ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
