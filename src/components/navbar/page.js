'use client';
import Navstyles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SignedIn, SignInButton, SignedOut, UserButton } from '@clerk/nextjs';
import { slide as Menu } from 'react-burger-menu';
 function DesktopNav({}) {
    const [width, setWidth] = useState(window.innerWidth);
    const [isOpen, setOpen] = useState(false);
    
    if (width > 600) {
        return <div className={Navstyles.container}>
        <div className={Navstyles.navLinks}>
            <Link href="/">Home</Link>
            <Link href="/medieval">The Medieval Times</Link>
            <Link href="/roles/archer">Archer</Link>
            <Link href="/roles/knight">Knight</Link>
            <Link href="/roles/monk">Priest</Link>
        </div>

        <div className={Navstyles.signIn}>
            <SignedIn>
                <UserButton />
            </SignedIn>
            <SignedOut>
                <SignInButton />
            </SignedOut>
        </div>
    </div>
}
else {
    return <div className={Navstyles.container}>
        <Menu styles={{
            bmBurgerButton: {
                position: 'fixed',
                width: '36px',
                height: '30px',
                left: '36px',
                top: '36px'
            },
            bmBurgerBars: {
                background: 'black'
            },
            bmBurgerBarsHover: {
                background: '#a90000'
            },
            bmCrossButton: {
                height: '24px',
                width: '24px'
            },
            bmCross: {
                background: '#bdc3c7'
            },
        }}><div className={Navstyles.navLinksMobile}>
            <Link href="/">Home</Link>
            <Link href="/medieval">The Medieval Times</Link>
            <Link href="/roles/archer">Archer</Link>
            <Link href="/roles/knight">Knight</Link>
            <Link href="/roles/monk">Priest</Link>
        </div></Menu>
    </div>
}
}
export default function Navbar() {
    

    const [open, setOpen] = useState(false);
    return (
        <DesktopNav />
    );
}