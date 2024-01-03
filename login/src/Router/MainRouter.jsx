import { createBrowserRouter } from 'react-router-dom';
import Header from '../Component/Header';
import HomeCompo from '../Pages/HomeComp';
import Aboutus from '../Pages/Aboutus';
import ContactComp from '../Pages/ContactComp';
import Login from '../Pages/Login';


const router = createBrowserRouter([

    {
        path: "/",
        element: (<HomeCompo />),
    },
    {
        path: "/About",
        element: (<><Header /><Aboutus /></>),
    },
    {
        path: "/Contact",
        element: (<><Header /><ContactComp /></>),
    },
    {
        path: "/Login",
        element: (<><Header /><Login /></>)
    },
]);

export default router;

