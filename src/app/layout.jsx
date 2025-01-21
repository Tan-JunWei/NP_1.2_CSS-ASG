import Navbar from "@/src/components/navbar/navbar";
import Footer from "@/src/components/footer/footer";

import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Plateful',
  description: `Discover the vibrant flavors of Singapore through authentic recipes and stories behind iconic dishes. 
  Share and celebrate our culinary heritage with the world.`, 
  keywords: [ 'Plateful', 'Recipes', 'Singapore food', 'Culinary heritage', 'Food blog', 'Cooking', 'Eating', 'Diverse cuisines' ],
}

// Defines the structure of the root layout for the entire application.
export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body className={inter.className}>
        <Navbar className="fixed-navbar" />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
