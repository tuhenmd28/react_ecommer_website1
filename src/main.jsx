import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import  './main.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/font-awesome/css/font-awesome.min.css"
import 'react-loading-skeleton/dist/skeleton.css';
import { Provider } from 'react-redux';
import store from './component/redux/store'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <App /> 
    </Provider>
  </React.StrictMode>
)
