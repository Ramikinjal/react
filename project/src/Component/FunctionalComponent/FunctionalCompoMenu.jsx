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