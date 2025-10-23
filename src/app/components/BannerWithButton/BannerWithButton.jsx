"use client";

import Link from "next/link";

export default function BannerWithButton({
  imageUrl,
  heading,
  description,
  buttonText = "Shop Now",
  buttonLink = "/collections",
  height = "h-[500px]",
  overlayColor = "bg-black/40",
  color = "white",
}) {
  return (
    <div
      className={`relative w-full ${height} bg-cover bg-center flex items-center justify-center`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayColor}`}></div>

      {/* Content */}
      <div className="relative text-center px-4 max-w-4xl text-white">
        {heading && (
          <h2 className="font-bold text-3xl md:text-5xl mb-4">{heading}</h2>
        )}
        {description && (
          <p className="text-base md:text-lg mb-6">{description}</p>
        )}
        <Link
          href={buttonLink}
          className={`
        inline-block px-6 py-3 rounded border-2 font-semibold
        border-${color}-600 text-${color}-600
        hover:bg-${color}-600 hover:text-white
        transition-colors
      `}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
