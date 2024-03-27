import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// import Slider from './Slider'
// import Kinjal from './HeaderCompo'
import Headerk from "./Component/Commen/Header.jsx";
import ComponentInReact from './Component/ClassComponent/01ComponentInReact.jsx';
import ClassComponentInReact from './Component/ClassComponent/02ClassComponentInReact';
import LoaderCompo from './Component/Commen/LoaderCompo';
// import Header from './Component/Commen/Header';
import Routes from './Router/MainRouter.jsx'
import { RouterProvider } from 'react-router-dom';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={Routes} />,
);