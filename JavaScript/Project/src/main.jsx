import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/css/bootstrap.min.css';
import { ProductProvider } from './context/ProductContext'
import { CartProvider } from 'react-use-cart';
import store from './tools/store/configureStore';
import { addNews } from './tools/action/newsAction';
import { Provider } from 'react-redux';

const newstore = store();

newstore.dispatch(addNews({ title: "React Labs: What We've Been Working On – February 2024 ", img: "https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/React_18_New_features_a9ebb05f34.jpg", desc: "In React Labs posts, we write about projects in active research and development. We’ve made significant progress since our last update, and we’d like to share our progress." }))

newstore.dispatch(addNews({ title: "React Canaries: Enabling Incremental Feature Rollout Outside Meta", img: "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png", desc: "We’d like to offer the React community an option to adopt individual new features as soon as their design is close to final, before they’re released in a stable version—similar to how Meta has long used bleeding-edge versions of React internally. We are introducing a new officially supported Canary release channel. It lets curated setups like frameworks decouple adoption of individual React features from the React release schedule." }))



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <ProductProvider>
        <Provider store={newstore}>
          <App />
        </Provider>
      </ProductProvider>
    </CartProvider>
  </React.StrictMode>,
)
