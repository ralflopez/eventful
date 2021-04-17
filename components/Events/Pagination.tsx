import React from 'react';

interface Props {
    count: number,
    active: number
}

const Pagination = ({ count, active }: Props) => {
    let nowActive: string = active.toString();
    let itemNum: string[] = [];
    for(let i = 1; i <= 5; i++)
        itemNum.push(i.toString());
        itemNum.push('Last');

    return (
        <div className="flex justify-center mb-4 text-center text-blue-500">
            {
                itemNum.map((num: string) => (
                    <div className={`p-2 px-3 mx-1 bg-transparent rounded-md cursor-pointer transition-colors duration-200 ease-out  ${nowActive === num ? 'bg-blue-600 text-white hover:bg-blue-700' : 'hover:bg-blue-600 hover:text-white'}`}>{num}</div>
                ))
            }
        </div>
    )
}

export default Pagination;
