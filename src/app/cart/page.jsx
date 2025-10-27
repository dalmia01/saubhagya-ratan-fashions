"use client";

import { useState } from "react";
import Image from "next/image";
import { useCartStore } from "../store/cartStore";
import { Trash2 } from "lucide-react";
import CartModal from "../components/modal/CartModal";
import EmptyCart from "../components/EmptyCart/EmptyCart";
import Link from "next/link";

export default function CartPage() {
  const {
    items: cart,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalPrice,
    deleteFromCart,
  } = useCartStore();

  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sending, setSending] = useState(false);

  const total = getTotalPrice();

  const handleCheckout = async (customerName, customerPhone) => {
    setSending(true);
    if (!customerName || !customerPhone) {
      alert("Please enter your name and phone number.");
      setSending(false);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/send-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart, customerName, customerPhone }),
      });

      const data = await res.json();
      if (data.success) {
        alert("Order sent successfully via WhatsApp!");
        clearCart();
      } else {
        alert("Failed to send order: " + data.error);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong: " + err.message);
    } finally {
      setLoading(false);
      setSending(false);
    }
  };

  if (cart.length === 0) return <EmptyCart />;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
      {/* Left: Cart Items */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <a
            href="/jewellery"
            className="text-sm text-[#0b3b46] underline underline-offset-4"
          >
            Continue Shopping
          </a> 
        </div>

        {cart.map((item) => (
          <div
            key={item._id}
            className="flex flex-col sm:flex-row sm:items-center justify-between border rounded-lg p-4 gap-4 transition"
          >
            {/* Product Image */}
            <div className="relative w-full sm:w-24 h-40 sm:h-24 flex-shrink-0">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Product Info */}
            <div className="flex-1 flex flex-col gap-1 sm:px-4">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-[#0b3b46] font-medium">₹{item.price}</p>
            </div>

            {/* Quantity + Delete */}
            <div className="flex justify-between gap-3 items-center">
              <div className="flex gap-3 items-center">
                <div className="flex items-center justify-between sm:justify-center gap-3 border rounded-md px-3 py-2  ">
                  <div className="flex items-center gap-3">
                    <button
                      className="px-2 py-1  rounded hover:bg-gray-200"
                      onClick={() => removeFromCart(item._id)}
                    >
                      -
                    </button>
                    <span className="font-medium">{item.quantity}</span>
                    <button
                      className="px-2 py-1  rounded hover:bg-gray-200"
                      onClick={() => addToCart(item)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="text-red-600 hover:text-red-700"
                  onClick={() => deleteFromCart(item._id)}
                  title="Remove item"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              {/* Price */}
              <p className="font-semibold text-lg sm:w-20 text-right">
                ₹{item.price * item.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right: Order Summary */}
      <div className="flex flex-col gap-6 p-6 rounded-lg border h-max sticky top-20">
        <h3 className="text-xl font-bold">Order Summary</h3>

        <div className="flex justify-between text-lg font-medium border-t pt-4">
          <span>Estimated Total:</span>
          <span className="font-bold">₹{total}</span>
        </div>

        <small>
          Taxes included. Discounts and{" "}
          <Link className="text-[#0b3b46] underline underline-offset-2" href="/shipping">shipping</Link> calculated at
          checkout.
        </small>

        {/* Buttons */}
        <div className="flex flex-col gap-3 mt-2">
          <button
            className="w-full bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-md transition"
            onClick={clearCart}
          >
            Clear Cart
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            disabled={loading}
            className={`w-full ${
              loading ? "bg-[#1c9985]" : "bg-[#0b3b46]"
            } text-white py-3 rounded-md font-semibold transition`}
          >
            {loading ? "Sending..." : "Checkout via WhatsApp"}
          </button>
        </div>
      </div>

      {/* Checkout Modal */}
      <CartModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleCheckout}
        loading={sending}
      />
    </div>
  );
}
