import React from 'react';
import Meta from './Meta';
import Nav from './Nav';

const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <Nav />
            <div className="max-w-6xl px-5 mx-auto sm:px-7">
                {children}
            </div>
        </>
    )
}

export default Layout;
