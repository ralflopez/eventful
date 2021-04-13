import React from 'react';
import Link from 'next/link';
import { useRouter, NextRouter } from 'next/router';

const Nav = () => {
    const { pathname }: NextRouter = useRouter();
    console.log(pathname)
    return (
        <div className="fixed z-10 w-full bg-transparent">
            <div className="left-0 right-0 flex items-center justify-between h-16 max-w-6xl px-5 mx-auto sm:px-7">
                <h2 className="text-2xl font-bold">E</h2>
                <nav className="flex items-center">
                    <Link href="/">
                        <a className={
                            `ml-4 
                            ${pathname === '/' && 'text-blue-400 font-bold'
                        }`}>Home</a>
                    </Link>
                    <Link href="/events">
                    <a className={
                            `ml-4 
                            ${pathname === '/events' && 'text-blue-400 font-bold'
                        }`}>Events</a>
                    </Link>
                    <Link href="/myevents">
                    <a className={
                            `ml-4 
                            ${pathname === '/myevents' && 'text-blue-400 font-bold'
                        }`}>My Events</a>
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default Nav;
