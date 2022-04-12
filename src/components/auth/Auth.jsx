import React from 'react';
import { Outlet } from "react-router-dom";

const Auth = () => {
    return (
        <>
            <header>
                Auth Base
            </header>
            <Outlet />
        </>
    );
};

export default Auth;