"use client";

import { useCartStore } from "../../store/cartStore";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

export default function ProductCardVariant1({ product }) {
  const { addToCart, removeFromCart, items } = useCartStore();

  const cartItem = items.find((item) => item._id === product._id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="flex flex-col items-center">
      <Link href={`/products/${product._id}`}><Image
        src={product.image}
        alt={product.name}
        width={250}
        height={250}
        className="rounded-xl object-cover"
      />
      </Link>

      <div className="mt-3 text-center">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">₹{product.price}</p>
      </div>

      <div className="flex items-center gap-4 mt-2">
        {quantity > 0 ? (
          <>
            <button
              className="p-2 rounded-full bg-gray-200 cursor-pointer"
              onClick={() => removeFromCart(product._id)}
            >
              <Minus size={16} />
            </button>

            <span className="text-lg font-medium">{quantity}</span>

            <button
              className="p-2 rounded-full bg-gray-200 cursor-pointer"
              onClick={() => addToCart(product)}
            >
              <Plus size={16} />
            </button>
          </>
        ) : (
          <button
            className="px-4 py-2 bg-[#0b3b46] text-white rounded-lg cursor-pointer"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
