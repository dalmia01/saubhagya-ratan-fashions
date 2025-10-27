import { JEWELLERY_LINK } from "../../constants/app.constants";
import Image from "next/image";
import Link from "next/link";

export default function EmptyCart() {
  return (
    <div className="relative flex flex-col items-center justify-center my-6 overflow-hidden text-center px-6">
      

      {/* Foreground Content */}
      <div className="relative z-10 max-w-xl">
        {/* Icon or Illustration */}
        <div className="w-28 h-28 mx-auto mb-6">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
            alt="Empty Cart"
            width={112}
            height={112}
            className="opacity-80"
          />
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 tracking-wide">
          Your Cart is Empty
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
          Looks like you haven’t added anything to your cart yet.  
          Explore our exquisite collection of jewellery pieces to find your next favourite.
        </p>

        {/* CTA Button */}
        <Link
          href={JEWELLERY_LINK}
          className="inline-block bg-[#0b3b46] hover:bg-[#1c9985] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-300"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
