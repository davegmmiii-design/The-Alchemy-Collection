import React from 'react';

interface PrimroseLogoProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export function PrimroseOfficialLogo({
  className = "w-full h-auto",
  width = 520,
  height = 240
}: PrimroseLogoProps) {
  return (
    <svg
      viewBox="0 0 560 250"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Primrose Speciality Coffee Official Plaque Logo"
      style={{ filter: 'drop-shadow(0 12px 28px rgba(0,0,0,0.5))' }}
    >
      <defs>
        {/* Rich Metallic Warm Gold Gradients matching user uploaded image */}
        <linearGradient id="primroseGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5D07E" />
          <stop offset="25%" stopColor="#E5B254" />
          <stop offset="60%" stopColor="#F7DB91" />
          <stop offset="85%" stopColor="#D49432" />
          <stop offset="100%" stopColor="#BF7F1D" />
        </linearGradient>

        <linearGradient id="borderGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E9B95E" />
          <stop offset="50%" stopColor="#FBE2A0" />
          <stop offset="100%" stopColor="#D09230" />
        </linearGradient>
      </defs>

      {/* Outer Forest Green Plaque with Rounded Corners */}
      <rect
        x="6"
        y="6"
        width="548"
        height="238"
        rx="22"
        fill="#0C382B"
        stroke="url(#borderGold)"
        strokeWidth="5"
      />

      {/* Inner Thin Gold Inset Border */}
      <rect
        x="15"
        y="15"
        width="530"
        height="220"
        rx="15"
        fill="none"
        stroke="url(#borderGold)"
        strokeWidth="1.5"
        opacity="0.9"
      />

      {/* ETHIOPIA Top Right with (R) Registered Mark */}
      <g transform="translate(280, 26)">
        {/* Ethiopic-styled serif lettering */}
        <path
          d="M 60,32 L 60,14 L 75,14 L 75,18 L 65,18 L 65,21 L 73,21 L 73,25 L 65,25 L 65,28 L 76,28 L 76,32 Z"
          fill="url(#primroseGold)"
        />
        <path
          d="M 79,14 L 97,14 L 97,18 L 90,18 L 90,32 L 86,32 L 86,18 L 79,18 Z"
          fill="url(#primroseGold)"
        />
        <path
          d="M 100,14 L 105,14 L 105,21 L 114,21 L 114,14 L 119,14 L 119,32 L 114,32 L 114,25 L 105,25 L 105,32 L 100,32 Z"
          fill="url(#primroseGold)"
        />
        <path
          d="M 124,14 L 129,14 L 129,32 L 124,32 Z"
          fill="url(#primroseGold)"
        />
        <path
          d="M 134,23 C 134,16 138,13 145,13 C 152,13 156,16 156,23 C 156,30 152,33 145,33 C 138,33 134,30 134,23 Z M 139,23 C 139,28 141,29.5 145,29.5 C 149,29.5 151,28 151,23 C 151,18 149,16.5 145,16.5 C 141,16.5 139,18 139,23 Z"
          fill="url(#primroseGold)"
        />
        <path
          d="M 161,14 L 172,14 C 177,14 180,16 180,20 C 180,24 177,26 172,26 L 166,26 L 166,32 L 161,32 Z M 166,22.5 L 171,22.5 C 174,22.5 175,21.5 175,20 C 175,18.5 174,17.5 171,17.5 L 166,17.5 Z"
          fill="url(#primroseGold)"
        />
        <path
          d="M 185,14 L 190,14 L 190,32 L 185,32 Z"
          fill="url(#primroseGold)"
        />
        <path
          d="M 199,32 L 206,14 L 211,14 L 218,32 L 213,32 L 211,27 L 204,27 L 202,32 Z M 205.5,23.5 L 209.5,23.5 L 207.5,18 Z"
          fill="url(#primroseGold)"
        />
        {/* (R) Symbol */}
        <circle cx="225" cy="18" r="4.5" fill="none" stroke="url(#primroseGold)" strokeWidth="1" />
        <text x="225" y="20.5" textAnchor="middle" fill="url(#primroseGold)" fontSize="6" fontWeight="bold" fontFamily="sans-serif">R</text>
      </g>

      {/* Three Botanical Gold Leaves sprouting above the 'i' */}
      <g transform="translate(222, 60)">
        {/* Left leaf (curving up-left) */}
        <path
          d="M 12,20 C 3,17 -3,8 2,1 C 10,5 14,13 12,20 Z"
          fill="url(#primroseGold)"
        />
        <path d="M 12,20 Q 5,11 2,1" stroke="#0C382B" strokeWidth="0.8" fill="none" />

        {/* Center leaf (pointing up) */}
        <path
          d="M 15,22 C 14,10 20,-3 29,2 C 27,12 23,20 15,22 Z"
          fill="url(#primroseGold)"
        />
        <path d="M 15,22 Q 21,10 29,2" stroke="#0C382B" strokeWidth="0.8" fill="none" />

        {/* Right leaf (curving right) */}
        <path
          d="M 18,22 C 26,16 37,15 39,23 C 32,28 23,27 18,22 Z"
          fill="url(#primroseGold)"
        />
        <path d="M 18,22 Q 28,19 39,23" stroke="#0C382B" strokeWidth="0.8" fill="none" />
      </g>

      {/* Main Wordmark: "Primrose" Vector Geometry */}
      <g transform="translate(42, 68)">
        {/* P */}
        <path
          d="M 18,88 L 36,88 C 42,88 45,86 46,80 L 53,42 C 55,30 63,22 75,22 L 95,22 C 114,22 124,32 121,49 C 118,65 104,74 88,74 L 62,74 L 59,88 L 65,88 C 70,88 72,90 71,94 C 70,98 67,100 60,100 L 15,100 C 10,100 8,98 9,94 C 10,90 13,88 18,88 Z M 71,60 C 80,60 88,55 90,46 C 92,38 88,34 80,34 L 70,34 L 66,60 Z"
          fill="url(#primroseGold)"
        />

        {/* r */}
        <path
          d="M 115,100 C 109,100 106,98 107,93 L 115,54 C 116,49 119,47 125,47 C 129,47 131,49 130,54 L 126,71 C 131,56 142,48 153,48 C 158,48 162,50 160,55 C 158,60 154,61 148,61 C 138,61 130,70 126,88 L 124,94 C 123,98 120,100 115,100 Z"
          fill="url(#primroseGold)"
        />

        {/* i */}
        <path
          d="M 160,100 C 154,100 151,98 152,93 L 160,54 C 161,49 164,47 170,47 C 174,47 176,49 175,54 L 167,93 C 166,98 164,100 160,100 Z"
          fill="url(#primroseGold)"
        />

        {/* m */}
        <path
          d="M 183,100 C 177,100 174,98 175,93 L 183,54 C 184,49 187,47 193,47 C 197,47 199,49 198,54 L 195,68 C 199,56 208,48 219,48 C 226,48 230,52 229,59 C 235,52 243,48 253,48 C 265,48 271,56 268,69 L 263,93 C 262,98 259,100 254,100 C 249,100 246,98 247,93 L 252,70 C 253,63 250,59 243,59 C 235,59 227,67 224,82 L 222,93 C 221,98 218,100 213,100 C 208,100 205,98 206,93 L 211,70 C 212,63 209,59 202,59 C 194,59 187,67 184,82 L 182,93 C 181,98 178,100 183,100 Z"
          fill="url(#primroseGold)"
        />

        {/* r */}
        <path
          d="M 276,100 C 270,100 267,98 268,93 L 276,54 C 277,49 280,47 286,47 C 290,47 292,49 291,54 L 287,71 C 292,56 303,48 314,48 C 319,48 323,50 321,55 C 319,60 315,61 309,61 C 299,61 291,70 287,88 L 285,94 C 284,98 281,100 276,100 Z"
          fill="url(#primroseGold)"
        />

        {/* Coffee Bean 'o' */}
        <g transform="translate(342, 73) rotate(16)">
          {/* Bean Silhouette */}
          <path
            d="M 0,-26 C 14,-26 23,-13 23,4 C 23,21 12,32 -2,32 C -16,32 -24,19 -24,2 C -24,-15 -13,-26 0,-26 Z"
            fill="url(#primroseGold)"
          />
          {/* S-shaped Center Crease */}
          <path
            d="M 0,-23 C -4,-12 6,-2 1,12 C -3,22 3,27 0,29"
            fill="none"
            stroke="#0C382B"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </g>

        {/* s */}
        <path
          d="M 370,100 C 363,100 357,97 356,92 C 355,87 358,85 363,85 C 368,85 373,88 379,88 C 387,88 392,84 393,79 C 394,74 389,70 380,66 C 366,61 360,55 362,45 C 364,33 377,26 392,26 C 400,26 405,28 406,33 C 407,37 404,40 399,40 C 395,40 391,37 386,37 C 380,37 375,40 374,44 C 373,49 377,52 386,56 C 401,62 407,68 405,79 C 403,92 388,100 370,100 Z"
          transform="translate(18, 0)"
          fill="url(#primroseGold)"
        />

        {/* e */}
        <path
          d="M 416,100 C 398,100 389,88 392,72 C 395,54 411,46 427,46 C 441,46 448,53 446,67 C 445,70 442,72 437,72 L 404,72 C 402,83 408,90 419,90 C 426,90 432,87 435,84 C 438,81 441,81 443,84 C 445,87 444,90 440,94 C 434,98 426,100 416,100 Z M 406,62 L 434,62 C 435,55 431,52 424,52 C 416,52 409,56 406,62 Z"
          transform="translate(16, 0)"
          fill="url(#primroseGold)"
        />
      </g>

      {/* "SPECIALITY COFFEE" Clean Geometric Uppercase */}
      <g transform="translate(280, 182)">
        <text
          x="0"
          y="0"
          textAnchor="middle"
          fill="url(#primroseGold)"
          fontSize="21"
          fontWeight="800"
          letterSpacing="9"
          fontFamily="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        >
          SPECIALITY COFFEE
        </text>
      </g>

      {/* Bottom Row: Left Tapered Line, "Since 2010", Right Tapered Line */}
      <g transform="translate(280, 214)">
        {/* Left gold bar */}
        <polygon points="-160,-4 -68,-4 -68,-2 -160,-2" fill="url(#primroseGold)" />
        
        {/* "Since 2010" in italic serif */}
        <text
          x="0"
          y="0"
          textAnchor="middle"
          fill="url(#primroseGold)"
          fontSize="16"
          fontStyle="italic"
          fontWeight="500"
          letterSpacing="1"
          fontFamily="'Playfair Display', 'Bodoni Moda', Georgia, serif"
        >
          Since 2010
        </text>

        {/* Right gold bar */}
        <polygon points="68,-4 160,-4 160,-2 68,-2" fill="url(#primroseGold)" />
      </g>
    </svg>
  );
}
