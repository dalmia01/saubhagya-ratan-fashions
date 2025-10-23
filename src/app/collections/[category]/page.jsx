"use client";

import { use } from "react";
import Image from "next/image";
import { useCartStore } from "../../store/cartStore";
import { COLLECTION_CATEGORIES } from "../../constants/app.constants";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

export default function CategoryPage({ params }) {
  const { category } = use(params);

  const categoryInfo = COLLECTION_CATEGORIES.find(
    (c) => c.name.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="flex flex-col gap-12">
      {/* Banner */}
      <div
        className="relative w-full h-64 md:h-96 flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url('${categoryInfo.image}')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white px-6 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold uppercase mb-4">
            {categoryInfo.name}
          </h1>
          <p className="text-lg md:text-xl">{categoryInfo.description}</p>
        </div>
      </div>

      {/* Product Grid */}
      <FeaturedProducts />
      
    </div>
  );
}
