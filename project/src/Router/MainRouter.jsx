import { createBrowserRouter } from "react-router-dom";
import Slider from "../Slider";
import ClassComponent from '../Component/ClassComponent/01ComponentInReact';
import ComponentInReact from "../Component/ClassComponent/01ComponentInReact";
import ClassComponentInReact from "../Component/ClassComponent/02ClassComponentInReact";
import LoaderCompo from "../Component/Commen/LoaderCompo";
// import Header from "../Component/Commen/Header";
import Headerk from "../Component/Commen/Header"
// import Home from "../Component/Pages/Home"
// import RouterProvider from 'your-router-provider-package'; // Adjust the import statement based on your package and file structure
import About from "../Component/Pages/About";
import ClassCompo from "../Component/Pages/ClassCompo";
import ContactCompo from "../Component/Pages/ContactCompo";
import ExampleCompo from "../Component/Pages/ExampleCompo";
import FunctionalCompo from "../Component/Pages/FunctionalCompo";
import ClassComponentRoute from "../Component/ClassComponent/ClassCompoRoute";
import FunctionalComponentRoute from "../Component/FunctionalComponent/FunctionalCompoRoute"

import { Suspense } from "react";

const router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: (<Slider />),
    // },
    // {
    //     path: "/",
    //     element: (<ClassComponent />),
    // },
    // {
    //     path: "/",
    //     element: (<ComponentInReact />)
    // },
    // {
    //     path: "/",
    //     element: (<ClassComponentInReact />)
    // },
    {
        path: "/",
        element: (<Headerk />),
    }, {
        path: "/about",
        element: (<><Headerk /> <About /></>),
    }, {
        path: "/contact",
        element: (<><Headerk /><ContactCompo /></>),
    }, {
        path: "/example",
        element: (<><Headerk /><ExampleCompo /></>),

        children: [
            {
                path: "/example/classComponent/*",
                element: (<><ClassComponentRoute /></>),
            }, {
                path: "/example/functionalComponent/*",
                element: (<><FunctionalComponentRoute /></>)
            }
        ]
    }
])

export default router;