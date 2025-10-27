"use client";

import Link from "next/link";
import "./footer.css";
import FooterLinks from "./FooterLinks";
import { ADDRESS, EMAIL_ID, FOOTER_MENU_LINKS, MENU_LINKS, PHONE_NO, QUICK_LINKS } from "../../constants/app.constants";

export default function Footer() {
  return (
    <footer className="footer text-gray-300 py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1: Logo / Brand */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Socials</h2>
          <p className="text-white text-sm ">
            <a href="https://www.instagram.com/">Instagram</a>
          </p>
          <p className="text-white text-sm mt-2">
            <a href="https://www.youtube.com/">Youtube</a>
          </p>
          <p className="text-white text-sm mt-1">
            <a href="https://www.facebook.com/">Facebook</a>
          </p>
        </div>

        {/* Column 2: Pages Links */}
        <FooterLinks links={FOOTER_MENU_LINKS} headText={"Shop"} />

        {/* Column 3: Quick Links */}
        <FooterLinks links={QUICK_LINKS} headText={"Quick Links"} />

        {/* Column 4: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p>
            Email:{" "}
            <a
              href={`mailto:${EMAIL_ID}`}
              className="hover:text-white text-sm "
            >
              {EMAIL_ID}
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href={`tel:${PHONE_NO}`} className="hover:text-white text-sm ">
              {PHONE_NO}
            </a>
          </p>
          <p>
            Address:{" "}
            <span  className="hover:text-white text-sm ">
              {ADDRESS}
            </span>
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} saubhagya ratan fashions. All rights reserved.
      </div>
    </footer>
  );
}
