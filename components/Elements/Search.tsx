import React from 'react'

const Search = () => {
    return (
        <div className="flex items-center justify-between w-full px-3 py-2 bg-white shadow-lg rounded-3xl">
            <input 
                className="w-full p-2 mr-4 text-black placeholder-black bg-white outline-none"
                placeholder="Search"
            />
            <div className="w-10 px-4 py-1 text-white bg-blue-400 rounded-2xl">
                S
            </div>
        </div>
    )
}

export default Search
