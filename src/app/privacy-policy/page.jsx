"use client";

import { PRIVACY_POLICIES } from "../constants/app.constants";

export default function PrivacyPolicyPage() {

  return (
    <div className=" bg-gray-50 py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8 text-center">
        Privacy Policy
      </h1>

      <div className="space-y-6">
        {PRIVACY_POLICIES.map((section, index) => (
          <div key={index}>
            <h2 className="text-xl font-medium mb-2">{section.title}</h2>
            <p className="text-gray-700 leading-relaxed">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
