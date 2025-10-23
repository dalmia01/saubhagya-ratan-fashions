"use client";

import { SAMPLE_PRODUCTS } from "../../constants/app.constants";
import ProductCardVariant1 from "../ProductCard/ProductCardVariant1";

export default function FeaturedProducts({ onAddToCart }) {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-16 bg-gray-50 w-full">
      <div className=" w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SAMPLE_PRODUCTS.map((product) => (
            <ProductCardVariant1
              key={product._id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
