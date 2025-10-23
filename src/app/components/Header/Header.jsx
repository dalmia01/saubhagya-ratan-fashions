"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { useCartStore } from "../../store/cartStore";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import BadgeUI from "../Badge/Badge";
import Navbar from "../Navbar/Navbar";

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
    <div className="py-6 px-6 flex flex-col gap-4">
      <header className="flex items-center justify-between">
        <div></div>

        {/* Logo */}
        <div>
          <Image
            src="/suabhagya-ratan-fashions-logo.jpeg"
            alt="logo"
            width={120}
            height={120}
            priority
          />
        </div>

        {/* Cart Icon */}
        <div>
          <div className="relative">
            <ShoppingBag />
            {mounted && cartItems > 0 && (
              <div className="absolute -right-2 -bottom-2">
                <BadgeUI value={cartItems} />
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Navigation */}
      <Navbar />
    </div>
  );
}
