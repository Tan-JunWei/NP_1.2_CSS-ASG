import Navbar from "@/app/UI/navbar/Navbar";
// import Link from "next/link";
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// This is used to set the title and description of the page (useful for Search Engine Optimisation (SEO))
export const metadata = {
  title: '<Name of website>',
  description: 'Generated by create next app', // This is the default description
}

// This is a functional React component that defines the structure of the root layout for the entire application.
export default function RootLayout({ children }) {
  /* 
    This is the layout for the entire application. 
    It includes the Navbar and the children (the content of the page).
  */
  return (
    <html lang="en"> 
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}