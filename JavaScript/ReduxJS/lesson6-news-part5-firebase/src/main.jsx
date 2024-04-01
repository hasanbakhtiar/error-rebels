import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import App from './App'
import store from './tools/store/configureStore';
import { addNews, getNewsFromDatabase } from './tools/action/newsAction';
import { Provider } from 'react-redux';
import { LangProvider } from './context/LangContext';
const newstore = store();








const result = (
    <LangProvider>
      <Provider store={newstore}>
        <App />
      </Provider>
    </LangProvider>
)


ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

newstore.dispatch(getNewsFromDatabase()).then(() => {
    ReactDOM.render(result, document.getElementById('root'));
})