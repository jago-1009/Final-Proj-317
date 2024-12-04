import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/navbar/page";
import { DataProvider } from "@/hooks/getData";
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body >
        <Navbar />
        <DataProvider>
        {children}
        </DataProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
