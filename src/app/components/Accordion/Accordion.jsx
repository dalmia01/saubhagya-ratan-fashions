"use client";

import { useState } from "react";

/**
 * props:
 * - items: [{ title: string, content: string }]
 * - allowMultipleOpen: boolean (default false)
 */
export default function Accordion({ items}) {
  
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAccordion = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="space-y-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  >
                    <span className="font-medium text-gray-900">{item.title}</span>
                    <span className="text-gray-500">
                      {openIndexes.includes(index) ? "-" : "+"}
                    </span>
                  </button>
                  {openIndexes.includes(index) && (
                    <div className="px-6 pb-4 text-gray-700">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
  );
}
