import React from 'react';
import Search from '../Elements/Search';
import Background_ from './Background_';
import MainImg_ from './MainImg_';
import Title_ from './Title_';

const Hero = () => {
    return (
        <div className="flex flex-col justify-around min-h-screen pt-16 md:items-center md:pt-0 md:flex-row">
            <div className="flex-grow max-w-md text-center">
                <Title_ />
                <Search />
            </div>
            <div className="md:ml-10">
                <MainImg_ />
            </div>
            <Background_ />
        </div>
    )
}

export default Hero;
