import React from 'react';

interface Props {
    className?: string,
    hover?: boolean,
    light?: boolean
}

const Search = ({ className, hover, light }: Props) => {
    return (
        <div className={`flex items-center justify-between w-full px-3 py-3 transition-colors duration-200 shadow-lg rounded-3xl ${light ? 'bg-white text-black' : 'bg-blue-600'} ${className} ${hover && 'hover:bg-white'}`}>
            <input 
                className={`w-full p-2 mr-4 text-white ${light ? 'placeholder-black' : 'placeholder-white'} bg-transparent outline-none hover:text-black`}
                placeholder="Search"
            />
            <div className={`w-10 px-4 py-1 ${light ? 'text-white bg-blue-600' : 'text-black bg-white'} hover:text-white hover:bg-blue-400 rounded-2xl`}>
                S
            </div>
        </div>
    )
}

export default Search
