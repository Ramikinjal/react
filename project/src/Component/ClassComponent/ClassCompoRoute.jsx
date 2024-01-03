import { useRoutes } from 'react-router-dom';
import ClassCompoMenu from './ClassCompoMenu.jsx';
import ComponentInReact from './01ComponentInReact.jsx';
import ClassComponentInReact from './02ClassComponentInReact';
// import StateClassComponentInReact from './03StateClassComponentInReact.jsx';
import StateClassComponentInReact from './03StateClassComponentInReact.jsx';

const ClassComponentRoute = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <ClassCompoMenu />,
            children: [
                {
                    path: "whatiscomponent",
                    element: <ComponentInReact />,
                }, {
                    path: "classcomponent",
                    element: <ClassComponentInReact />,
                }, {
                    path: "stateclasscomponent",
                    element: <StateClassComponentInReact />,
                },
            ]

        }])
    return routes;
}

export default ClassComponentRoute;