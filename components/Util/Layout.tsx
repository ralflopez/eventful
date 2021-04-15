import React from 'react';
import Meta from './Meta';
import Nav from './Nav';

const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <Nav />
            <div className="">
                {children}
            </div>
        </>
    )
}

export default Layout;
