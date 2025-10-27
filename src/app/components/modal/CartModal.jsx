"use client";

import { X } from "lucide-react";
import { useState } from "react";

export default function CartModal({ isOpen, onClose, onConfirm, loading }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const resetStates = () => {
    setName("");
    setPhone("");
    setErrors({});
  };

  const onCloseHandler = () => {
    resetStates();
    onClose();
  };

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9]{10}$/.test(phone)) {
      newErrors.phone = "Please enter a valid 10-digit number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    onConfirm(name, phone);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg p-6 w-11/12 max-w-md relative shadow-lg animate-fadeIn">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
          onClick={onCloseHandler}
        >
            <X />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-5 text-center">
          Enter Your Details
        </h2>

        {/* Name Input */}
        <div className="mb-3">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name)
                setErrors((prev) => ({ ...prev, name: undefined }));
            }}
            className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 ${
              errors.name
                ? "border-red-500 focus:ring-red-500"
                : "focus:ring-[#0b3b46]"
            }`}
          />
          {errors.name && (
            <p className="text-sm text-red-600 mt-1">{errors.name}</p>
          )}
        </div>

        {/* Phone Input */}
        <div className="mb-4">
          <input
            type="tel"
            placeholder="Your Phone Number"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              if (errors.phone)
                setErrors((prev) => ({ ...prev, phone: undefined }));
            }}
            className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 ${
              errors.phone
                ? "border-red-500 focus:ring-red-500"
                : "focus:ring-[#0b3b46]"
            }`}
          />
          {errors.phone && (
            <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3">
          <button
            className="px-4 py-2 rounded border hover:bg-gray-100 transition"
            onClick={onCloseHandler}
          >
            Cancel
          </button>
          <button
            disabled={loading}
            onClick={handleSubmit}
            className={`px-5 py-2 rounded text-white font-medium transition ${
              loading
                ? "bg-[#1c9985] cursor-not-allowed"
                : "bg-[#0b3b46] hover:bg-[#1c9985]"
            }`}
          >
            {loading ? "Sending..." : "Confirm & Send"}
          </button>
        </div>
      </div>
    </div>
  );
}
