import React from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './index.css';
import reportWebVitals from './__tests__/reportWebVitals';
import Home from "./pages/Home"
import Login from './pages/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
    <Routes>
        <Route exact path="/" element={<Home/>}> </Route>
        <Route exact path="/login" element={<Login/>}></Route>
    </Routes>    
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
