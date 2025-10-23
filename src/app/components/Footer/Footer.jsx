"use client";

import Link from "next/link";
import "./footer.css"

export default function Footer() {
  return (
    <footer className="footer text-gray-300 py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Column 1: Logo / Brand */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Socials</h2>
          <p className="text-white">
            <a href="https://www.instagram.com/">Instagram</a>
          </p>
        </div>

        {/* Column 2: Pages Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Shop</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/collections" className="hover:text-white">Collections</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/shipping" className="hover:text-white">Shipping</Link></li>
            <li><Link href="/returns" className="hover:text-white">Returns</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p>Email: <a href="mailto:contact@mystore.com" className="hover:text-white">contact@mystore.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="hover:text-white">+1 234 567 890</a></p>
          <p className="mt-2 text-gray-400 text-sm">123 Main Street, City, Country</p>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} MyStore. All rights reserved.
      </div>
    </footer>
  );
}
