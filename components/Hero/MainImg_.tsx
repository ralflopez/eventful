import React from 'react';
import Image from 'next/image';

const MainImg_ = () => {
    return (
        <div className="p-6 bg-white rounded-full shadow-lg w-72 h-72 md:w-96 md:h-96">
            <div className="relative w-64 h-64 p-20 mx-auto md:bottom-4 bottom-6 right-1 md:w-80 md:h-80">
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
