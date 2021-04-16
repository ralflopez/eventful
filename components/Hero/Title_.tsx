import React from 'react';

interface Props {
    light?: boolean,
    className?: string
}

const Title_ = ({ light, className }: Props) => {
    return (
        <div className={className}>
            <h1 className={`mt-3 mb-2 text-5xl font-bold tracking-wider ${light ? 'text-black' : 'text-white'} md:mt-0 md:text-6xl`}>
                Eventful
            </h1>
            <p className={`mb-10 text-sm ${light ? 'text-black' : 'text-white'} md:mt-0 md:text-xl`}>Gain knowledge. Build Connection Online</p>
        </div>
    )
}

export default Title_;
