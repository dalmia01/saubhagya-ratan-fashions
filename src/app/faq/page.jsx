"use client";

import { FAQS } from "../constants/app.constants";
import { useState } from "react";



export default function FAQPage() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAccordion = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className=" bg-gray-50 py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
        <p className="text-center text-gray-600 mb-12">
          Have questions? Click any question to see the answer.
        </p>

        <div className="space-y-4">
          {FAQS.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-medium text-gray-900">{item.question}</span>
                <span className="text-gray-500">
                  {openIndexes.includes(index) ? "-" : "+"}
                </span>
              </button>
              {openIndexes.includes(index) && (
                <div className="px-6 pb-4 text-gray-700">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
