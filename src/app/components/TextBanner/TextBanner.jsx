"use client";

export default function TextBanner({
  imageUrl,
  heading,
  description,
  height = "h-[500px]",       // default height, can override
  overlayColor = "bg-black/40" // overlay opacity
}) {
  return (
    <div
      className={`relative w-full ${height} bg-cover bg-center flex items-center justify-center`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayColor}`}></div>

      {/* Text Content */}
      <div className="relative text-center px-4 max-w-[48rem] text-white">
        {heading && (
          <h2 className="font-semibold mb-4  uppercase text-[1.5rem] tracking-[0.5rem]">
            {heading}
          </h2>
        )}
        {description && (
          <p className="text-base leading-relaxed font-medium">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
