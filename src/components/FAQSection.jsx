import React, { useState } from 'react';
import { Search } from 'lucide-react';

export const FAQSection = ({ faqs }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const filteredFaqs = faqs.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="faq-section" className="mt-8 space-y-4">
      {/* Title & Subtitle */}
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] sm:text-[22px] font-bold text-gray-950 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <p className="text-gray-500 text-[14.5px] mt-0.5">
          Frequently asked questions about ad credits.
        </p>
      </div>
      {/* FAQ Items List */}
      <div className="space-y-6 pt-2">
        {filteredFaqs.map((faq, index) => (
          <div key={faq.id || index} className="group">
            {/* Question with Bullet Dot */}
            <div className="flex items-start space-x-2">
              <span className="text-gray-900 font-bold text-lg leading-none select-none mt-0.5">
                •
              </span>

              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-[15.5px] leading-snug">
                  {faq.question}
                </h3>

                {/* Answer */}
                <p className="text-gray-600 text-[14px] leading-relaxed mt-1.5">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}

        {filteredFaqs.length === 0 && (
          <div className="text-center py-6 text-gray-400 text-sm">
            No matching questions found.
          </div>
        )}
      </div>
    </div>
  );
};

