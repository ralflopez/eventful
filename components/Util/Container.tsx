import React from 'react';

interface Props {
    className?: string
    children?: any
}

const Container = ({ className, children, ...props }: Props) => {

    return (
        <div className={`w-full h-full ${className}`}>
            <div className="max-w-6xl px-5 mx-auto sm:px-7">
                {children}
            </div>
        </div>
    )
}

export default Container;
