import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, NextRouter } from 'next/router';

const Nav = () => {
    const [hidden, setHidden] = useState<boolean>(false);
    const [atTop, setAtTop] = useState<boolean>(false);
    const { pathname }: NextRouter = useRouter();

    const toggleColor = (e: Event) => {
        if(window.scrollY === 0)
            setAtTop(true)
        else
            setAtTop(false)
    }

    useEffect(() => {
        if(pathname !== '/' && pathname !== '/events/[id]') return;
        else setAtTop(true);
        
        document.addEventListener('scroll', toggleColor);

        return () => {
            setAtTop(false);
            document.removeEventListener('scroll', toggleColor);
        }
        
    }, [pathname]);

    useEffect(() => {
        if(pathname.includes('/auth') && !hidden)
            setHidden(true);
        else if(hidden)
            setHidden(false);
    }, [pathname]);

    if(hidden) return (null);

    return (
        <div className={`fixed font-nunito z-10 w-full transition-all ease-out duration-300 ${atTop ? 'bg-transparent text-white' : 'bg-white shadow-sm'}`}>
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
                            ${pathname.includes('/events') && 'text-blue-400 font-bold'
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
