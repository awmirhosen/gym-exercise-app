import React from "react";
import './font/IRANSansWeb.woff2'
import ReactDOM from 'react-dom';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ExerciseDetail from "./pages/ExerciseDetail";
import { BrowserRouter } from "react-router-dom";

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);