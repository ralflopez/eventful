import React from 'react';
import GoogleSignIn from '../../components/Elements/GoogleSignIn';
import Title_ from '../../components/Hero/Title_';
import Container from '../../components/Util/Container';
import MainImg_ from '../../components/Hero/MainImg_';
import { signIn } from 'next-auth/client';

const login = () => {
    const callback: {callbackUrl: string} = {
        callbackUrl: '/'
    }

    return (
        <Container className="flex items-center justify-center min-h-screen p-5 text-center bg-blue-500">
            <MainImg_ className="mb-5"/>
            <Title_ className="text-center text-blue-600"/>
            <GoogleSignIn 
            onClick={() => signIn('google')}
            />
        </Container>
    )
}

export default login;
