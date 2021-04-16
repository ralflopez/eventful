import React from 'react';
import Image from 'next/image';

const Ticket = () => {
    return (
        <div className="flex w-full h-48 max-w-lg pt-2 mx-auto mb-5">
           {/* left */}
           <div className="flex w-full p-6 bg-white shadow-2xl sm:w-4/5 rounded-xl min-w-max">
                <div className="relative flex-grow-0 h-full mr-5 w-14">
                    <Image 
                        src="/assets/images/barcode.png"
                        alt="barcode"
                        layout="fill"
                    />
                </div>
                <div className="text-left">
                    <h1 className="mb-1 text-3xl font-bold text-blue-600">This is an event</h1>
                    <p className="mb-8">This is a caption</p>
                    <p className="text-blue-600">Start: 7:00AM</p>
                </div>
            </div> 
           {/* right */}
           <div className="items-center justify-center hidden w-1/5 bg-white shadow-2xl sm:flex rounded-xl">
                <p className="text-blue-600 transform rotate-90">Admit 1</p>
           </div>
        </div>
    )
}

export default Ticket;
