import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.scss';

import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Page404 from "./pages/404";
import App from "./pages/App";
import Settings from "./pages/Settings";

import { AuthProvider } from './hooks/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <Router>
            <Routes>
                <Route path="/" element={<Home />}> </Route>
                <Route path="/app" element={<App />}> </Route>
                <Route path="/settings" element={<Settings />}> </Route>
                <Route path="*" element={<Page404 />}> </Route>
            </Routes>
        </Router>
    </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
