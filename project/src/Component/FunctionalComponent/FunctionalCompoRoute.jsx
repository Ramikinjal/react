import { useRoutes } from 'react-router-dom';
import FunctionalCompoMenu from './FunctionalCompoMenu.jsx';
import FunctionalComponentInReact from './001FunctionalComponentInReact.jsx'
import StateFunctionalComponentInReact from './02StateFunctionalComponentInReact.jsx';


const FunctionalComponentRoute = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <FunctionalCompoMenu />,
            children: [
                {
                    path: "whatisfunctionalcomponent",
                    element: <FunctionalComponentInReact />,
                }, {
                    path: "stateinfunccomp",
                    element: <StateFunctionalComponentInReact />
                },
            ]
        }
    ])
    return routes;
}
export default FunctionalComponentRoute;