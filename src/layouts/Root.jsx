import React from 'react';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            
        </div>
    );
};

export default Root;