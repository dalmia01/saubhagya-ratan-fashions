"use client";

import { Cormorant_Garamond } from 'next/font/google';
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300','400','500','600','700'],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`${cormorant.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
