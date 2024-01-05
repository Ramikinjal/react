import { useRoutes } from 'react-router-dom';
import FunctionalCompoMenu from './FunctionalCompoMenu.jsx';
import FunctionalComponentInReact from './001FunctionalComponentInReact.jsx'
import StateFunctionalComponentInReact from './02StateFunctionalComponentInReact.jsx';
import PropsFunctionalComponentInReact from './03PropsFunctionalComponentInReact.jsx';
import JSXFunctionalComponentInReact from './05JSXFunctionalComponentInReact.jsx';
import ControlledComponentInReact from './06ControlledComponentInReact.jsx';
import MultipleDataComponentInReact from './07MultipleDataComponentInReact.jsx'
import RestVsSpreadComponentInReact from './08RestVsSpreadComponentInReact.jsx'
import HooksInFunctionCompo from './09HooksInFunctionalCompo.jsx';
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
                    element: <StateFunctionalComponentInReact />,
                }, {
                    path: "Propsinfunccomp",
                    element: <PropsFunctionalComponentInReact />,
                }, {
                    path: "jsxinfunccomp",
                    element: <JSXFunctionalComponentInReact />
                }, {
                    path: "controlledcomponent",
                    element: <ControlledComponentInReact />
                }, {
                    path: "controlledcomponentmultipledata",
                    element: <MultipleDataComponentInReact />
                }, {
                    path: "restandspread",
                    element: <RestVsSpreadComponentInReact />
                }, {
                    path: "hooksinfunctionalcompo",
                    element: <HooksInFunctionCompo />
                }
            ]
        }
    ])
    return routes;
}
export default FunctionalComponentRoute;