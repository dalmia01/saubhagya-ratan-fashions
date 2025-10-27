"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FooterLinks({links, headText}) {
  const pathname = usePathname();

  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">{headText}</h3>
      <ul className="space-y-2">
        {links.map((link) => {
          // ✅ Active if exact match OR nested path for non-collection routes
          const isActive =
            pathname === link.href ||
            (pathname.startsWith(link.href + "/") &&
              link.href !== "/jewellery");

          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`text-sm relative inline-block hover:text-white transition ${
                  isActive ? "text-white font-medium" : "text-gray-300"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white"></span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
