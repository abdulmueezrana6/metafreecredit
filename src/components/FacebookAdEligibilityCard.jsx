import React, { useState } from 'react';
import { ShopifyFacebookIllustration } from '../components/ShopifyFacebookIllustration';
import { TermsAndConditionsModal } from '../components/TermsAndConditionsModal';
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import { Sparkles } from 'lucide-react';

export const FacebookAdEligibilityCard = ({
  onClaim,
  daysLeft = 1,
  spendGoal = 750,
}) => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isClaimed, setIsClaimed] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/request");
  };

  const handleClaim = () => {
    setIsClaimed(true);

    if (onClaim) {
      onClaim();
    }
  };

  return (
    <>
      <div className="w-full bg-white rounded-xl overflow-hidden">
        {/* Main Content Area */}
        <div className="py-2 sm:py-3 sm:pb-4">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            
            {/* Left Column: Text & Terms */}
            <div className="flex-1 max-w-xl pr-0 md:pr-4">
              <h3 className="text-[17px] sm:text-[18px] font-bold text-gray-900 tracking-tight leading-snug">
                Your facebook page is eligible for a Free Ad credit
              </h3>

              <p className="mt-3 text-[13.5px] sm:text-[14px] text-gray-700 leading-relaxed">
                <strong className="font-bold text-gray-900">
                  Get ${spendGoal} USD in free credit
                </strong>{' '}
                when you create an ad campaign on Facebook. The
                free credit will be automatically applied to the main ad
                account.
              </p>

              {/* Terms and conditions link */}
              <div className="mt-3.5">
                <button
                  type="button"
                  onClick={() => setIsTermsOpen(true)}
                  className="text-[13.5px] text-[#0064E0] hover:text-[#0054BE] hover:underline font-normal cursor-pointer text-left transition-colors block"
                >
                  View terms and conditions
                </button>
              </div>

              {/* Claim Button */}
              <div className="mt-4">
        
<button
  type="button"
  onClick={handleSubmit}
  className="
    inline-flex items-center justify-center gap-2.5
    px-7 py-3.5
    min-w-[240px]
    text-white font-bold text-base
    rounded-xl
    transition-all duration-200
    bg-gradient-to-r from-[#0064E0] to-[#1877F2]
    hover:from-[#0054BE] hover:to-[#0866FF]
    hover:shadow-xl hover:shadow-blue-500/30
    hover:-translate-y-0.5
    active:translate-y-0 active:scale-[0.98]
    cursor-pointer
    disabled:bg-gray-400
    disabled:from-gray-400
    disabled:to-gray-400
    disabled:shadow-none
    disabled:cursor-not-allowed
    disabled:hover:translate-y-0
  "
>
  <Sparkles className="w-5 h-5 text-yellow-200" />
  <span>
    {`Claim $${spendGoal} Ad Credit`}
  </span>
</button>


              </div>
            </div>

            {/* Right Column: Graphic Illustration */}
            <div className="shrink-0 flex justify-center md:justify-end">
              <ShopifyFacebookIllustration className="w-48 sm:w-56 h-28 sm:h-32" />
            </div>
          </div>

          {/* Bottom Teal / Cyan Callout Box */}
          <div className="mt-4 sm:mt-5 bg-[#EEFAF9] border border-[#D5EFEF] rounded-lg p-3 sm:px-3.5 sm:py-2.5 flex items-start sm:items-center space-x-2.5">
            
            {/* Cyan circular info icon */}
            {/* <div className="shrink-0 mt-0.5 sm:mt-0 text-[#008489]">
              <div className="w-4 h-4 sm:w-[18px] sm:h-[18px] rounded-full border-[1.5px] border-[#008489] flex items-center justify-center">
                <span className="text-[11px] font-bold leading-none select-none font-serif">
                  i
                </span>
              </div>
            </div> */}

            <div className="flex-1 text-[13px] sm:text-[13.5px] text-gray-800 leading-snug">
              You have{' '}
              <strong className="font-bold text-gray-900">
                {daysLeft} days
              </strong>{' '}
              left to complete setup and redeem ${spendGoal} USD in free credit
            </div>
          </div>
        </div>
      </div>
            {/* Terms & Conditions Modal */}
      <TermsAndConditionsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        onClaim={onClaim ? handleClaim : undefined}
      />
    </>
  );
};

