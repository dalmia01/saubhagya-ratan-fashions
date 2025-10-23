"use client";

import { SHIPPING_INFO } from "../constants/app.constants";

export default function ShippingPage() {
  

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8 text-center">
        Shipping Information
      </h1>

      <div className="space-y-8">
        {SHIPPING_INFO.map((item, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-medium mb-2">{item.title}</h2>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
