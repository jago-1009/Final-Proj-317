'use client';
import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { SignedIn, SignInButton, SignedOut, UserButton } from '@clerk/nextjs';
export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <div className={styles.container}>
            <div className={styles.navLinks}>
                <Link href="/">Home</Link>
                <Link href="/medieval">The Medieval Times</Link>
                <Link href="/roles/archer">Archer</Link>
                <Link href="/roles/knight">Knight</Link>
                <Link href="/roles/monk">Priest</Link>
            </div>

            <div className={styles.signIn}>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
            </div>
        </div>
    );
}