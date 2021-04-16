import React from 'react';
import Image from 'next/image';

const Ticket = () => {
    return (
        <div className="flex w-full h-48 max-w-lg pt-2 mx-auto mb-5">
           {/* left */}
           <div className="flex w-full p-6 mx-auto bg-white shadow-2xl sm:w-4/5 rounded-xl sm:mx-0">
                <div className="relative flex-grow-0 w-10 h-full mr-5">
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
           <div className="items-center justify-center hidden p-3 bg-white shadow-2xl sm:flex rounded-xl">
                <p className="text-blue-600 transform rotate-90">Admit 1</p>
           </div>
        </div>
    )
}

export default Ticket;
