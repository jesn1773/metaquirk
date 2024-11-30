'use client';

import React, { useState } from 'react';

export function FAQSection() {
  const [activeFAQ, setActiveFAQ] = useState<string | null>(null);

  const faqs = [
    { id: 'what-is', title: 'What is MetaQuirk' },
    { id: 'mcp', title: 'What is the MCP Protocol?' },
    { id: 'genesis', title: 'What is MetaQuirk Genesis' },
    { id: 'club', title: 'What is MetaQuirk Club Service' }
  ];

  return (
    <section id="faqs-section" className="max-w-[1440px] mx-auto px-12 py-20">
      <h2 className="text-[48px] font-normal text-center mb-12">FAQS</h2>
      <div className="space-y-4 max-w-[800px] mx-auto">
        {faqs.map((faq) => (
          <div key={faq.id} className="border-b border-gray-200">
            <button
              onClick={() => setActiveFAQ(activeFAQ === faq.id ? null : faq.id)}
              className="w-full py-4 flex items-center justify-between text-left"
            >
              <span className="text-xl">{faq.title}</span>
              <span className="text-2xl">{activeFAQ === faq.id ? '−' : '+'}</span>
            </button>
            {activeFAQ === faq.id && (
              <div className="pb-4 text-gray-600">
                Answer to {faq.title}...
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 