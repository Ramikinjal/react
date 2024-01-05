import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

class ClassCompo extends Component {
    render() {
        return (
            <div>
                ClassCompo
                menu
                <Outlet></Outlet>
            </div>
        );
    }
}

export default ClassCompo;