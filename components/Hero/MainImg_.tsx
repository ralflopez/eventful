import React from 'react';
import Image from 'next/image';
import Container from '../Util/Container';

const MainImg_ = () => {
    return (
        <div className="w-64 h-64 p-6 m-10 bg-gray-100 rounded-full shadow-lg md:w-72 md:h-72">
            <div className="relative p-20 mx-auto w-60 h-60 md:bottom-5 bottom-8 right-4 md:right-1 md:w-64 md:h-64">
                <Image  
                src="/assets/images/hero-main.png"
                alt="laptop"
                layout="fill"
                />
            </div>
        </div>
    )
}

export default MainImg_;
