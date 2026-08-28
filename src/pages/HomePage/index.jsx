import React, { useState,useEffect} from "react";
import '../HomePage/HomePage.scss';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import GoogleTranslate from '../../components/GoogleTranslate';
import { FacebookAdEligibilityCard } from '../../components/FacebookAdEligibilityCard';
import { FAQSection } from '../../components/FAQSection';
const HomePage = () => {
  const navigate = useNavigate();
  const getCurrentTime = () => {
    const now = new Date();
    const m = now.toLocaleString("default", { month: "long" });
    const d = now.getDate();
    const y = now.getFullYear();
    return `${m} ${d}, ${y}.`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/request");
  };

   const defaultFaqs = [
  {
    id: 'faq-1',
    question: 'How do I claim an ad credit?',
    answer:
      "To claim an ad credit, complete the requirements listed in the offer before the offer expires. You'll be able to find all your claimed ad credits here.",
  },
  {
    id: 'faq-2',
    question: 'How do I use an ad credit?',
    answer:
      "Ad credits you've claimed will automatically apply to your ongoing ads and any new ads you create.",
  },
  {
    id: 'faq-3',
    question: 'What happens when my ad credit runs out?',
    answer:
      'Once your ad credit is fully spent or reaches its expiration date, any subsequent ad charges will automatically be billed to your primary payment method.',
  },
  {
    id: 'faq-4',
    question: 'Can I transfer or refund an ad credit to cash?',
    answer:
      'No. Ad credits cannot be redeemed for cash, transferred between distinct ad accounts, or refunded once spent.',
  },
  {
    id: 'faq-5',
    question: 'Which campaigns qualify for ad credits?',
    answer:
      'Standard ad credits apply automatically across Meta technologies including Facebook feeds, Instagram Stories, Reels, Audience Network, and Messenger ads.',
  },
];


  return (
    <>
    <GoogleTranslate/>
  <div
    className="absolute top-0 right-0 hidden"/>
  <div className="w-full">
    {/* Navbar Start */}
    <div className="bg-[#F5F6F6] h-[52px] flex items-center justify-center border-b border-[#E0E0E0]">
      <div className="max-w-[1280px] w-full flex items-center justify-between px-4">
        <a href="/">
          <img src="images/NZCkRtwY5YDl.svg" style={{width:'100px'}} />
        </a>
      </div>
    </div>
    {/* Navbar End */}
         {/* Main Content Area */}
      <main className="w-full flex-1 max-w-5xl mx-auto px-4 sm:px-6 py-6 md:py-8">
        <div className="bg-white rounded-2xl shadow-xs border border-gray-200 overflow-hidden">
          {/* Screen Body Content */}
          <div className="p-5 sm:p-7 space-y-6">
            <div className="space-y-6 animate-fadeIn">
              {/* Facebook Ads Credit Eligibility Card (Exact Match to Uploaded Image) */}
              <div id="section-facebook-eligibility">
                <FacebookAdEligibilityCard
                  daysLeft={1}
                  spendGoal={200}
                  onClaim={() => handleClaimSuccess(100, 'META-SHOP-100')}
                />
              </div>

              {/* Divider Line */}
              <hr className="border-t border-gray-200/90 my-6" />

              {/* Frequently Asked Questions */}
              <FAQSection faqs={defaultFaqs} />
            </div>
          </div>
        </div>
      </main>
   
    {/* Footer Start */}
    <div className="bg-[#F5F6F6] pt-5 pb-5 border-t border-[#E0E0E0] w-full">
      <div className="max-w-[1280px] w-full mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-4 text-[13px] text-gray-600">
          <a href="#" className="hover:underline text-[#6D84B4]">
            English (US)
          </a>
          <a href="#" className="hover:underline text-[#6D84B4]">
            English (UK)
          </a>
          <a href="#" className="hover:underline text-[#6D84B4]">
            Italiano
          </a>
          <a href="#" className="hover:underline text-[#6D84B4]">
            Français
          </a>
          <a href="#" className="hover:underline text-[#6D84B4]">
            中文(简体)
          </a>
          <a href="#" className="hover:underline text-[#6D84B4]">
            日本語
          </a>
          <a href="#" className="hover:underline text-[#6D84B4]">
            한국어
          </a>
          <a href="#" className="hover:underline text-[#6D84B4]">
            עברית
          </a>
          <a href="#" className="hover:underline text-[#6D84B4]">
            Español
          </a>
          <a href="#" className="hover:underline text-[#6D84B4]">
            Português
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-[13px] text-gray-600">
          <p className="mr-4">© 2025 Meta</p>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Developers
          </a>
          <a href="#" className="hover:underline">
            Careers
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Cookies
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
          <a href="#" className="hover:underline">
            Help Centre
          </a>
        </div>
      </div>
    </div>
    {/* Footer End */}
  </div>
</>
    );
}

export default HomePage;
