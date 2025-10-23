import { MENU_LINKS } from "../../constants/app.constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css"

export default function Navbar () {
    const pathname = usePathname();

    return <nav className="nav flex gap-4 justify-center">
          {MENU_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`navLink underline-offset-4 text-sm ${isActive ? "active underline" : ""}`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
}