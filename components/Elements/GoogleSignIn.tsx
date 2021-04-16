import React from 'react';

const GoogleSignIn = (props: any) => {
    return (
        <div className="inline-block px-4 py-3 mx-auto text-white transition-colors duration-200 ease-out bg-red-500 cursor-pointer rounded-xl hover:bg-red-600"
        {...props}
        >
            <p>Sign in With Google</p>
        </div>
    )
}

export default GoogleSignIn;
