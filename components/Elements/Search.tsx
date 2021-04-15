import React from 'react'

const Search = (props) => {
    return (
        <div className={`flex items-center justify-between w-full px-3 py-2 transition-colors duration-200 bg-blue-600 shadow-lg rounded-3xl ${props.className} ${props.hover && 'hover:bg-white'}`}>
            <input 
                className="w-full p-2 mr-4 text-white placeholder-white bg-transparent outline-none hover:text-black"
                placeholder="Search"
            />
            <div className="w-10 px-4 py-1 text-black bg-white hover:text-white hover:bg-blue-400 rounded-2xl">
                S
            </div>
        </div>
    )
}

export default Search
