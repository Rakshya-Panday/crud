import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from "./pages/Home";

import Update from './pages/Update.jsx';
import Profile from "./pages/Profile";
import {store} from './store/store.js'
import { Provider } from 'react-redux'

import { createBrowserRouter,createRoutesFromElements, RouterProvider,Route} from 'react-router-dom'


const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = '/' element = {<App/>}>
        <Route path = "" element = {<Home/>}/>
        <Route path="/profile" element = {<Profile/>}/>  
        <Route path="/update/:id" element = {<Update/>}/>  
      </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store} >
   
   <RouterProvider router={router}/>
    
  </Provider>
)
