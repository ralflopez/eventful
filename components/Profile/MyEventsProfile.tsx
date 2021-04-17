import React from 'react';

const MyEventsProfile = () => {
    return (
        <div className="flex items-center justify-around max-w-lg mx-auto mb-16 md:block">
            <h4 className="hidden mb-5 text-xl font-bold text-center md:block">Profile</h4>
            <div className="w-40 h-40 bg-blue-600 rounded-full md:mb-5">
            
            </div>
            <div>
                <h4>Fullname</h4>
                <p>something@gmail.com</p>
                <p className="text-blue-600">History</p>
                <p className="text-blue-600">Settings</p>
            </div>
        </div>
    )
}

export default MyEventsProfile;
