import NextAuth, { NextAuthRequest, NextAuthResponse } from 'next-auth';
import Providers from 'next-auth/providers';

export default (req: NextAuthRequest, res: NextAuthResponse) => NextAuth(req, res, {
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    database: {
        type: 'postgres',
        port: 5432,
        username: 'postgres',
        password: 'root',
        database: 'mydb'
    }
});