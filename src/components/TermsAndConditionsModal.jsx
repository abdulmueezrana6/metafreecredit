import React from 'react';
import { X, ShieldCheck, CheckCircle } from 'lucide-react';

export const TermsAndConditionsModal = ({
  isOpen,
  onClose,
  onClaim,
}) => {
  if (!isOpen) return null;

  const terms = [
    {
      title: 'Offer Eligibility',
      detail:
        'This offer is only available to advertisers who have received an offer letter from us, This offer may end at any time if our free credit budget runs out.',
    },
    {
      title: 'Credit Application & Expiration',
      detail:
        'After the credit application form is approved, a $750 USD Facebook Ads credit will automatically be applied to your primary Ad Account within 2 business days. The ad credit is valid for 90 days from the date of issue.',
    },
    {
      title: 'Usage Constraints',
      detail:
        'Ad credits can only be used to offset future advertising costs on Facebook, Instagram, Messenger, and Meta Audience Network. Ad credits cannot be transferred, exchanged for cash, or applied to past invoices.',
    },
    {
      title: 'Taxes & Payment Methods',
      detail:
        'A valid credit/debit card or PayPal account must remain on file. Advertisers are responsible for any applicable local taxes charged by Meta Platforms Ireland / Meta Platforms Inc.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between bg-gray-50/70">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-blue-600" />

            <h3 className="font-bold text-gray-900 text-base">
              Terms and Conditions
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-3 overflow-y-auto space-y-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
          
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-900">
            <span className="font-bold block mb-0.5">
              Facebook $750 Ad Credit Offer
            </span>
{/* 
            <span className="text-xs text-blue-800">
              • Valid for eligible businesses
              connecting Meta & Shopify
            </span> */}
          </div>

          <div className="space-y-3">
            {terms.map((t, idx) => (
              <div
                key={idx}
                className="border-b border-gray-100 pb-3 last:border-0 last:pb-0"
              >
                <h4 className="font-semibold text-gray-900 mb-1 flex items-center space-x-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />

                  <span>{t.title}</span>
                </h4>

                <p className="text-gray-600 text-xs pl-5 leading-normal">
                  {t.detail}
                </p>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-gray-400 pt-2">
            © Meta Platforms, Inc. All rights reserved. Meta
            Advertising Policies apply.
          </p>
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 border-t border-gray-200 bg-gray-50 flex items-center justify-end space-x-2.5">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
          >
            Close
          </button>

          {onClaim && (
            <button
              onClick={() => {
                onClose();
              }}
              className="px-4 py-2 text-xs font-bold text-white bg-[#0064E0] hover:bg-[#0054BE] rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              Accept
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

