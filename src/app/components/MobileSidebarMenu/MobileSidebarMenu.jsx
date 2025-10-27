"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JEWELLERY_LINK } from "../../constants/app.constants";

export default function MobileSidebarMenu({ links = null }) {

  const menuLinks = links;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const closeButtonRef = useRef(null);
  const previousActiveElement = useRef(null);

  // Disable page scroll when open
  useEffect(() => {
    if (open) {
      previousActiveElement.current = document.activeElement;
      document.body.classList.add("overflow-hidden");
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.classList.remove("overflow-hidden");
      previousActiveElement.current?.focus?.();
    }
  }, [open]);

  // Close on ESC key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const onOverlayClick = (e) => {
    if (e.target === e.currentTarget) setOpen(false);
  };

  return (
    <>
      {/* Hamburger button */}
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((s) => !s)}
        className="relative z-10 inline-flex items-center justify-center w-10 h-10 rounded-md focus:outline-none"
      >
        {/* Animated Hamburger */}
        <div className="w-6 h-6 relative">
          <span
            className={`block absolute left-0 top-1/2 w-6 h-[2px] bg-current transform transition duration-300 ${
              open ? "rotate-45 -translate-y-1/2" : "-translate-y-2"
            }`}
          />
          <span
            className={`block absolute left-0 top-1/2 w-6 h-[2px] bg-current transform transition duration-300 ${
              open ? "opacity-0" : "-translate-y-1/2"
            }`}
          />
          <span
            className={`block absolute left-0 top-1/2 w-6 h-[2px] bg-current transform transition duration-300 ${
              open ? "-rotate-45 -translate-y-1/2" : "translate-y-2"
            }`}
          />
        </div>
      </button>

      {/* Sidebar overlay */}
      <div
        aria-hidden={!open}
        onClick={onOverlayClick}
        className={`fixed inset-0 z-20 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Dark overlay */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Sidebar (FROM LEFT) */}
        <aside
          role="dialog"
          aria-modal="true"
          className={`fixed top-0 left-0 h-full w-80 max-w-[90vw] bg-white shadow-xl transform transition-transform duration-300
            ${open ? "translate-x-0" : "-translate-x-full"}
            flex flex-col`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <div className="text-lg font-semibold">Menu</div>
            <button
              ref={closeButtonRef}
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-1 rounded-md focus:outline-none"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6L18 18M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Menu links */}
          <nav className="flex-1 overflow-auto px-4 py-6">
            <ul className="space-y-2">
              {menuLinks.map((link) => {
                  const isActive = pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block px-3 py-3 rounded-md transition-colors ${
                        isActive
                          ? "bg-green-50 text-[#0b3b46] font-medium"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer Section */}
          <div className="px-4 py-4 border-t hidden">
            <Link
              href={JEWELLERY_LINK}
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-[#0b3b46] text-white px-4 py-2 rounded-md font-semibold transition"
            >
              Explore Collections
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
