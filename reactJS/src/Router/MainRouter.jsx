import { createBrowserRouter } from "react-router-dom";
import HedaerCompo from '../Component/Common/HedaerCompo'
import AboutUs from "./../Component/Pages/AboutUs"
import HomeCompo from "../Component/Pages/HomeCompo";

const roots = createBrowserRouter([
    {
        path: "/",
        element: (<HomeCompo />),
    }

])
export default roots;