"use client";

export default function TextBannerWhite({
  heading,
  description,
  padding = "py-16 px-4", // default padding
  maxWidth = "max-w-4xl",
}) {
  return (
    <div className={`w-full bg-white flex items-center justify-center ${padding}`}>
      <div className={`text-center ${maxWidth}`}>
        {heading && (
          <h2 className="font-semibold mb-4 uppercase text-2xl md:text-3xl tracking-wide text-gray-900">
            {heading}
          </h2>
        )}
        {description && (
          <p className="text-base md:text-lg leading-relaxed font-medium text-gray-700">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
