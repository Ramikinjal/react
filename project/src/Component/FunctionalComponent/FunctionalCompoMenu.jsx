import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';


const FunctionalCompoMenu = () => {
    return (
        <>
            <div className="row">
                <div className="col-6 offset-6">
                    <ol>
                        <li><Link to="whatisfunctionalcomponent">what is Functional Component</Link></li>
                        <li><Link to="Stateinfunccomp">state</Link></li>
                        <li><Link to="Propsinfunccomp">Props</Link></li>
                        <li><Link to="jsxinfunccomp">JSX</Link></li>
                        <li><Link to="controlledcomponent"> Controlled Component</Link></li>
                        <li><Link to="controlledcomponentmultipledata">Multiple Input in single State Component</Link></li>
                        <li><Link to="restandspread">Rest Vs Spread</Link></li>
                        <li><Link to="hooksinfunctionalcompo">Hooks</Link></li>

                    </ol>

                </div>

            </div>

            <div className="row">
                <div className="col">
                    <Outlet />
                </div>
            </div>
        </>
    );

};
export default FunctionalCompoMenu;