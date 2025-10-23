"use client";

import Accordion from "../components/Accordion/Accordion";
import { FAQS } from "../constants/app.constants";



export default function FAQPage() {

  return (
    <div className=" bg-gray-50 py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
        <p className="text-center text-gray-600 mb-12">
          Have questions? Click any question to see the answer.
        </p>

        <Accordion items={FAQS} />
      </div>
    </div>
  );
}
