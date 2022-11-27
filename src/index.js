import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Login from './Login'
import Home from './home'
import Manage from './Manage'
import Profile from './Profile'
import Live from './Live'
import Request from './Request'
import User from './User'



ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/Manage" element={<Manage/>}/>
        <Route path="/Live" element={<Live/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Request" element={<Request/>}/>
        <Route path="/User" element={<User/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
