"use client";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/navbar/page";
import { DataProvider } from "@/hooks/getData";
import dynamic from "next/dynamic";
const NavbarComp = dynamic(() => import("@/components/navbar/page"), {
  ssr:false
})
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body >
        <NavbarComp />
        <DataProvider>
        {children}
        </DataProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
