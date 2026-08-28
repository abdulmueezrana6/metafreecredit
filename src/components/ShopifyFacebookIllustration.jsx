import React from 'react';

export const ShopifyFacebookIllustration = ({
  className = 'w-48 h-32',
}) => {
  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
    >
      <svg
        viewBox="0 0 260 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background ambient grid/shelf wireframes */}
        <g stroke="#E5E7EB" strokeWidth="1" opacity="0.7">
          <line x1="10" y1="130" x2="250" y2="130" />
          <line x1="20" y1="40" x2="20" y2="130" />
          <line x1="80" y1="20" x2="80" y2="130" />
          <line x1="140" y1="20" x2="140" y2="130" />
          <line x1="20" y1="50" x2="80" y2="50" />
        </g>

        {/* Store Shelf Items: Vase, Jug, Bowl */}
        <g id="pottery-items">
          {/* Subtle shadow beneath objects */}
          <ellipse
            cx="60"
            cy="132"
            rx="45"
            ry="4"
            fill="#E2E8F0"
            opacity="0.6"
          />

          {/* Small blue/purple bottle */}
          <rect
            x="24"
            y="112"
            width="10"
            height="18"
            rx="2"
            fill="#818CF8"
            opacity="0.8"
          />
          <rect
            x="27"
            y="108"
            width="4"
            height="4"
            rx="1"
            fill="#6366F1"
          />

          {/* Deep Purple Bowl */}
          <path
            d="M32 118C32 118 36 132 50 132C64 132 68 118 68 118H32Z"
            fill="#4F46E5"
          />
          <ellipse
            cx="50"
            cy="118"
            rx="18"
            ry="4"
            fill="#4338CA"
          />

          {/* Elegant Purple Ceramic Vase / Pitcher */}
          <path
            d="M72 82C68 95 62 108 62 120C62 128 66 132 75 132C84 132 88 128 88 120C88 108 82 95 78 82C78 76 82 66 82 66H68C68 66 72 76 72 82Z"
            fill="#7C3AED"
          />

          {/* Vase handle */}
          <path
            d="M82 78C87 84 87 95 80 102"
            stroke="#6D28D9"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Vase highlight */}
          <path
            d="M71 90C68 98 66 108 67 118"
            stroke="#A78BFA"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.8"
          />
        </g>

        {/* Curved Flow Arrow pointing to Facebook Ads */}
        <g id="flow-arrow">
          <path
            d="M74 60C74 38 95 24 120 25C132 25 142 32 146 42"
            stroke="#94A3B8"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            fill="none"
          />

          <path
            d="M143 38L148 44L152 38"
            stroke="#94A3B8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Top Facebook Ad Card Mockup */}
        <g
          id="ad-card-top"
          filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))"
        >
          <rect
            x="145"
            y="16"
            width="70"
            height="42"
            rx="3"
            fill="#FFFFFF"
            stroke="#E2E8F0"
            strokeWidth="1"
          />

          {/* Mini header */}
          <rect
            x="149"
            y="20"
            width="30"
            height="3"
            rx="1.5"
            fill="#38BDF8"
          />
          <rect
            x="149"
            y="25"
            width="22"
            height="2"
            rx="1"
            fill="#E2E8F0"
          />

          {/* Mini product in ad */}
          <rect
            x="185"
            y="20"
            width="24"
            height="24"
            rx="2"
            fill="#EEF2FF"
          />

          <path
            d="M197 25C195 28 193 33 193 37C193 39 195 41 197 41C199 41 201 39 201 37C201 33 199 28 197 25Z"
            fill="#818CF8"
          />

          {/* Mini CTA button */}
          <rect
            x="149"
            y="32"
            width="26"
            height="5"
            rx="2"
            fill="#0064E0"
          />
          <rect
            x="149"
            y="42"
            width="18"
            height="2"
            rx="1"
            fill="#E2E8F0"
          />
          <rect
            x="170"
            y="42"
            width="14"
            height="2"
            rx="1"
            fill="#E2E8F0"
          />
        </g>

        {/* Secondary Facebook Feed Ad Mockup */}
        <g
          id="ad-card-right"
          filter="drop-shadow(0 2px 4px rgba(0,0,0,0.05))"
        >
          <rect
            x="218"
            y="22"
            width="40"
            height="52"
            rx="3"
            fill="#FFFFFF"
            stroke="#E2E8F0"
            strokeWidth="1"
          />

          <rect
            x="222"
            y="26"
            width="18"
            height="3"
            rx="1.5"
            fill="#0064E0"
          />

          {/* Bowl image in feed */}
          <rect
            x="222"
            y="32"
            width="32"
            height="24"
            rx="2"
            fill="#F5F3FF"
          />

          <path
            d="M230 44C230 44 233 50 238 50C243 50 246 44 246 44H230Z"
            fill="#6366F1"
          />

          <rect
            x="222"
            y="60"
            width="32"
            height="6"
            rx="2"
            fill="#38BDF8"
          />
        </g>

        {/* Main Lower Facebook Ad Mockup */}
        <g
          id="ad-card-main"
          filter="drop-shadow(0 4px 6px rgba(0,0,0,0.08))"
        >
          {/* Main Card Frame */}
          <rect
            x="160"
            y="62"
            width="94"
            height="76"
            rx="4"
            fill="#FFFFFF"
            stroke="#CBD5E1"
            strokeWidth="1"
          />

          {/* Post Header: Profile Icon & Brand Name */}
          <circle
            cx="170"
            cy="72"
            r="5"
            fill="#38BDF8"
          />

          <rect
            x="178"
            y="69"
            width="38"
            height="3"
            rx="1.5"
            fill="#334155"
          />

          <rect
            x="178"
            y="74"
            width="22"
            height="2"
            rx="1"
            fill="#94A3B8"
          />

          {/* Ad Creative Image Area */}
          <rect
            x="164"
            y="80"
            width="86"
            height="36"
            rx="2"
            fill="#F8FAFC"
            stroke="#F1F5F9"
          />

          {/* Mini Ceramic Showcase inside ad */}
          <path
            d="M192 88C190 92 187 97 187 101C187 104 189 106 193 106C197 106 199 104 199 101C199 97 196 92 194 88Z"
            fill="#7C3AED"
          />

          <path
            d="M204 96C204 96 206 102 210 102C214 102 216 96 216 96H204Z"
            fill="#4F46E5"
          />

          {/* Ad Footer / CTA Bar */}
          <rect
            x="164"
            y="120"
            width="46"
            height="3"
            rx="1.5"
            fill="#1E293B"
          />

          <rect
            x="164"
            y="125"
            width="30"
            height="2"
            rx="1"
            fill="#94A3B8"
          />

          <rect
            x="220"
            y="119"
            width="30"
            height="12"
            rx="3"
            fill="#0064E0"
          />

          <text
            x="225"
            y="127"
            fill="#FFFFFF"
            fontSize="6"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            SHOP
          </text>
        </g>
      </svg>
    </div>
  );
};
