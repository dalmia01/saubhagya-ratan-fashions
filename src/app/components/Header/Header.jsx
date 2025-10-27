"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { useCartStore } from "../../store/cartStore";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import BadgeUI from "../Badge/Badge";
import Navbar from "../Navbar/Navbar";
import Link from "next/link";
import MobileSidebarMenu from "../MobileSidebarMenu/MobileSidebarMenu";
import { MENU_LINKS } from "../../constants/app.constants";

// ✅ Small helper: useIsomorphicLayoutEffect avoids hydration errors in SSR
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Header() {
  const { getItemCount } = useCartStore();
  const [mounted, setMounted] = useState(false);

  // ✅ useLayoutEffect only runs on the client, before paint
  useIsomorphicLayoutEffect(() => {
    setMounted(true);
  }, []);

  const cartItems = mounted ? getItemCount() : 0;

  return (
    <div className="pt-2 pb-4 px-6 flex flex-col gap-4">
      <header className="flex items-center justify-between">
        <div>
          <div className="md:hidden">
            <MobileSidebarMenu links={MENU_LINKS} />
          </div>
        </div>

        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="/suabhagya-ratan-fashions-logo.jpeg"
              alt="logo"
              width={120}
              height={120}
              priority
            />
          </Link>
        </div>

        {/* Cart Icon */}
        <div>
          {  (
            <Link href="/cart">
              <div className="relative">
                <ShoppingBag />
                {mounted && cartItems > 0 && (
                  <div className="absolute -right-2 -bottom-2">
                    <BadgeUI value={cartItems} />
                  </div>
                )}
              </div>
            </Link>
          ) }
        </div>
      </header>

      {/* Navigation */}

      <div className="hidden md:block">
        <Navbar />
      </div>
    </div>
  );
}
