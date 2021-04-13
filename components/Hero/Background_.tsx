import React from 'react';
import Image from 'next/image';

const Background_ = () => {
    return (
        <div style={{zIndex:-5}}>
            <Image 
                src="/assets/images/bg-curves.svg"
                alt="backgorund"
                className="bg-red-600"
                objectFit="cover"
                layout="fill"
            />
        </div>
    )
}

export default Background_;
