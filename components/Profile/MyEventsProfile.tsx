import React from 'react';

const MyEventsProfile = () => {
    return (
        <div className="flex flex-wrap items-center justify-around max-w-lg p-3 mx-auto mb-16 text-white bg-blue-600 rounded-lg md:block md:text-center">
            <h4 className="hidden mb-5 text-xl font-bold text-center md:block">Profile</h4>
            <div className="w-32 h-32 mx-auto bg-blue-400 rounded-full md:mb-5">
            
            </div>
            <div>
                <h4>Fullname</h4>
                <p>something@gmail.com</p>
                <p className="text-blue-800">History</p>
                <p className="text-blue-800">Settings</p>
                <button>organization</button>
            </div>
        </div>
    )
}

export default MyEventsProfile;
