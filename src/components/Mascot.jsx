/**
 * GARFI Mascot — original orange cat character
 * Variants: idle | laptop | heart | megaphone | shield
 */
export default function Mascot({ variant = 'idle', size = 240, className = '' }) {
  return (
    <svg
      viewBox="0 0 240 280"
      width={size}
      height={size * 280 / 240}
      className={className}
      role="img"
      aria-label="گارفی"
    >
      {/* Hoodie / body */}
      <ellipse cx="120" cy="215" rx="72" ry="58" fill="#ff3e7a" />
      <ellipse cx="120" cy="210" rx="62" ry="48" fill="#ff5a8c" />
      {/* Hoodie opening */}
      <ellipse cx="120" cy="175" rx="34" ry="20" fill="#e0285f" opacity="0.4" />
      {/* Hoodie strings */}
      <line x1="108" y1="168" x2="106" y2="192" stroke="#e0285f" strokeWidth="3" strokeLinecap="round" />
      <line x1="132" y1="168" x2="134" y2="192" stroke="#e0285f" strokeWidth="3" strokeLinecap="round" />
      <circle cx="106" cy="194" r="3" fill="#e0285f" />
      <circle cx="134" cy="194" r="3" fill="#e0285f" />

      {/* Ears */}
      <path d="M 72 72 L 58 28 L 98 62 Z" fill="#ff8c42" />
      <path d="M 168 72 L 182 28 L 142 62 Z" fill="#ff8c42" />
      <path d="M 76 68 L 68 42 L 90 64 Z" fill="#ff6b9d" />
      <path d="M 164 68 L 172 42 L 150 64 Z" fill="#ff6b9d" />

      {/* Head */}
      <circle cx="120" cy="108" r="58" fill="#ff8c42" />
      {/* Head stripes */}
      <path d="M 98 56 Q 103 66 98 76" stroke="#e6720f" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.5" />
      <path d="M 120 52 Q 125 62 120 72" stroke="#e6720f" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.5" />
      <path d="M 142 56 Q 137 66 142 76" stroke="#e6720f" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.5" />

      {/* Cheeks blush */}
      <ellipse cx="82" cy="120" rx="12" ry="7" fill="#ff6b9d" opacity="0.35" />
      <ellipse cx="158" cy="120" rx="12" ry="7" fill="#ff6b9d" opacity="0.35" />

      {/* Eyes — lazy / cheeky expression */}
      <path d="M 86 104 Q 96 96 106 104" stroke="#1a1a1a" strokeWidth="4.5" fill="none" strokeLinecap="round" />
      <path d="M 134 104 Q 144 96 154 104" stroke="#1a1a1a" strokeWidth="4.5" fill="none" strokeLinecap="round" />

      {/* Nose */}
      <path d="M 114 118 L 126 118 L 120 126 Z" fill="#ff3e7a" />

      {/* Mouth — cheeky smile */}
      <path d="M 120 126 Q 113 134 104 130" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M 120 126 Q 127 134 136 130" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Whiskers */}
      <line x1="52" y1="114" x2="72" y2="114" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <line x1="52" y1="122" x2="72" y2="120" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <line x1="168" y1="114" x2="188" y2="114" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <line x1="168" y1="120" x2="188" y2="122" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

      {/* Variant accessories */}
      {variant === 'laptop' && (
        <g>
          <rect x="80" y="210" width="80" height="48" rx="4" fill="#2d2d2d" stroke="#ff3e7a" strokeWidth="2" />
          <rect x="86" y="216" width="68" height="36" rx="2" fill="#1a1a1a" />
          <rect x="92" y="222" width="20" height="4" rx="1" fill="#ff3e7a" opacity="0.6" />
          <rect x="92" y="230" width="40" height="3" rx="1" fill="#ff8c42" opacity="0.4" />
          <rect x="92" y="237" width="30" height="3" rx="1" fill="#ff8c42" opacity="0.4" />
          <rect x="72" y="256" width="96" height="6" rx="3" fill="#3a3a3a" />
        </g>
      )}

      {variant === 'heart' && (
        <g>
          <path
            d="M 120 145 C 112 132, 92 132, 92 150 C 92 165, 120 182, 120 182 C 120 182, 148 165, 148 150 C 148 132, 128 132, 120 145 Z"
            fill="#ff3e7a"
          />
          <path
            d="M 120 148 C 114 138, 100 138, 100 150 C 100 160, 120 172, 120 172 C 120 172, 140 160, 140 150 C 140 138, 126 138, 120 148 Z"
            fill="#ff6b9d"
          />
        </g>
      )}

      {variant === 'megaphone' && (
        <g transform="rotate(-12 130 150)">
          <path d="M 130 135 L 185 118 L 192 150 L 135 162 Z" fill="#ff3e7a" />
          <rect x="120" y="142" width="18" height="18" rx="3" fill="#ff8c42" />
          <circle cx="188" cy="134" r="4" fill="#fff8f0" opacity="0.7" />
        </g>
      )}

      {variant === 'shield' && (
        <g>
          <path
            d="M 120 140 L 158 152 L 158 185 L 120 205 L 82 185 L 82 152 Z"
            fill="#ff3e7a"
            opacity="0.85"
          />
          <path
            d="M 120 148 L 150 157 L 150 183 L 120 198 L 90 183 L 90 157 Z"
            fill="none"
            stroke="#fff8f0"
            strokeWidth="1.5"
            opacity="0.3"
          />
          <path
            d="M 105 172 L 116 183 L 138 160"
            stroke="#fff8f0"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      )}
    </svg>
  )
}
