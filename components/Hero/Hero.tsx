import React from 'react';
import Search from '../Elements/Search';
import Container from '../Util/Container';
import MainImg_ from './MainImg_';
import Title_ from './Title_';
import DraggableDiv from '../Elements/DraggableDiv';

const Hero = () => {
    return (
        <Container className="bg-blue-500">
            <div className="flex flex-col justify-around min-h-screen pt-16 md:items-center md:pt-0 md:flex-row">
                <div className="flex-grow w-full max-w-sm pt-3 mx-auto text-center">
                    <Title_ />
                    <Search hover={true}/>
                </div>
                <div className="flex-grow flex-shrink-0 mx-auto md:ml-10 md:flex-grow-0">
                    <MainImg_ className="p-6 m-10"/>
                </div>
            </div>
        </Container>
    )
}

export default Hero;
