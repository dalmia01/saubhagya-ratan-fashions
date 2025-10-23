"use client";

import { COLLECTION_CATEGORIES } from "../constants/app.constants";
import Link from "next/link";

export default function CollectionsPage({ color = "black" }) {
  return (
    <div className="flex flex-col gap-12">
      {COLLECTION_CATEGORIES.map((cat, index) => {
        const isLeft = index % 2 === 0;
        return (
          <div
            key={index}
            className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${cat.image})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div
              className={`relative max-w-6xl mx-auto w-full px-6 flex flex-col md:flex-row items-center justify-between gap-6 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="text-white max-w-lg space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">{cat.name}</h2>
                <p className="text-lg md:text-xl">{cat.description}</p>
                <Link
                  href={cat.href}
                  className={`
        inline-block px-6 py-3 rounded border-2 font-semibold
        border-${color}-600 text-${color}-600
        hover:bg-${color}-600 hover:text-white
        transition-colors
      `}
                >
                  Explore {cat.name}
                </Link>
              </div>
            </div>
          </div>
        );
      })}

      <div className="h-8"> </div>
    </div>
  );
}
