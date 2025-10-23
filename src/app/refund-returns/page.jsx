"use client";

import Accordion from "../components/Accordion/Accordion";
import {  REFUND_RETURNS_POLICIES,  } from "../constants/app.constants";



export default function RefundAndReturns() {

  return (
    <div className=" bg-gray-50 py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Refund & Returns Policy</h1>

        <Accordion items={REFUND_RETURNS_POLICIES} />
      </div>
    </div>
  );
}
