"use client";

import { use, useState } from "react";
import Image from "next/image";
import { useCartStore } from "../../store/cartStore";
import { SAMPLE_PRODUCTS } from "../../constants/app.constants";

export default function ProductPage({ params }) {
  const { productId } = use(params);
  const product = SAMPLE_PRODUCTS.find((p) => p._id == productId);

  const { addToCart, removeFromCart, items } = useCartStore();

  const cartItem = items.find((item) => item._id === product._id);
  const quantity = cartItem ? cartItem.quantity : 0;
  const [mainImage, setMainImage] = useState(product?.images[0]);

  if (!product) return <p className="text-center mt-20">Product not found</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-12">
      {/* Left - Images */}
      <div className="flex flex-col md:w-1/2 gap-4">
        <div className="w-full h-96 relative">
          <Image
            src={mainImage}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="flex gap-4">
          {product.images.map((img, idx) => (
            <div
              key={idx}
              className={`w-20 h-20 relative cursor-pointer border rounded-lg ${
                img === mainImage ? "border-green-600" : "border-gray-300"
              }`}
              onClick={() => setMainImage(img)}
            >
              <Image
                src={img}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right - Product Details */}
      <div className="md:w-1/2 flex flex-col gap-6">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-2xl text-black-600 font-semibold">
          ₹ {product.price}
        </p>
        <p className="text-gray-700">{product.description}</p>

        {/* Quantity + Add to Cart */}
        <div className="flex items-center gap-4">
          <div className="flex items-center border rounded">
            <button
              className="px-3 py-1 hover:bg-gray-200 cursor-pointer"
              onClick={() => removeFromCart(product._id)}
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              className="px-3 py-1 hover:bg-gray-200 cursor-pointer"
              onClick={() => addToCart(product)}
            >
              +
            </button>
          </div>

          <button
            className="bg-black hover:bg-black-700 text-white px-6 py-2 rounded-md transition cursor-pointer"
            onClick={() => addToCart({ ...product, quantity })}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
