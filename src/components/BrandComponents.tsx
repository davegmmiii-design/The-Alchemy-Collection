import React from 'react';

export function PrimroseLogoEmblem({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Primrose Speciality Coffee Crest">
      {/* Outer decorative ring */}
      <circle cx="60" cy="60" r="54" stroke="#E2A748" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
      <circle cx="60" cy="60" r="49" stroke="#E2A748" strokeWidth="1" />
      
      {/* Central stylized coffee branch with cherries & blossoms */}
      <path d="M60 22 C60 40 60 75 60 98" stroke="#2D4A43" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Leaves */}
      <path d="M60 38 C48 32 38 42 42 54 C48 54 56 46 60 38 Z" fill="#2D4A43" />
      <path d="M60 38 C72 32 82 42 78 54 C72 54 64 46 60 38 Z" fill="#2D4A43" />
      
      <path d="M60 62 C46 58 36 68 40 80 C48 80 56 72 60 62 Z" fill="#2D4A43" />
      <path d="M60 62 C74 58 84 68 80 80 C72 80 64 72 60 62 Z" fill="#2D4A43" />

      {/* Coffee Cherries / Primrose Bloom */}
      <circle cx="50" cy="46" r="4.5" fill="#E2A748" />
      <circle cx="70" cy="46" r="4.5" fill="#E2A748" />
      <circle cx="60" cy="50" r="3.5" fill="#D68B29" />
      <circle cx="52" cy="70" r="4.5" fill="#E2A748" />
      <circle cx="68" cy="70" r="4.5" fill="#E2A748" />

      {/* Crown / Top Star */}
      <path d="M60 28 L62 33 L67 33 L63 36 L65 41 L60 38 L55 41 L57 36 L53 33 L58 33 Z" fill="#E2A748" />
    </svg>
  );
}

export function LotCrestFallback({ code, region, title }: { code: string; region: string; title: string }) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#2D4A43] via-[#203631] to-[#172723] flex flex-col items-center justify-center p-6 text-center select-none relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(226,167,72,0.18)_0%,transparent_70%)]" />
      
      {/* Inner luxury gold border */}
      <div className="absolute inset-3 border border-[#E2A748]/30 rounded-xl pointer-events-none" />
      <div className="absolute inset-4 border border-[#E2A748]/15 rounded-lg pointer-events-none" />
      
      {/* Crest Graphic */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-14 h-14 rounded-full border border-[#E2A748]/60 flex items-center justify-center mb-3 bg-[#2D4A43]/80 shadow-md">
          <PrimroseLogoEmblem className="w-10 h-10" />
        </div>
        
        <span className="text-[#E2A748] tracking-[0.3em] font-mono text-xs font-semibold uppercase mb-1">
          {code}
        </span>
        
        <h4 className="font-serif-luxury text-white text-lg tracking-wide font-normal max-w-[200px] truncate">
          {title}
        </h4>
        
        <div className="h-[1px] w-12 bg-[#E2A748]/50 my-2" />
        
        <span className="text-[#A2B5B0] text-[10px] tracking-[0.25em] uppercase font-sans-clean font-medium">
          {region} • ETHIOPIA
        </span>
      </div>
    </div>
  );
}

{/* Real Official Gmail Logo */}
export function GmailOfficialIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path fill="#4285F4" d="M22 6.5V18c0 1.1-.9 2-2 2h-3V11.5L22 6.5z"/>
      <path fill="#34A853" d="M2 6.5V18c0 1.1.9 2 2 2h3V11.5L2 6.5z"/>
      <path fill="#EA4335" d="M20 4H4C2.9 4 2 4.9 2 6l10 7.5L22 6c0-1.1-.9-2-2-2z"/>
      <path fill="#FBBC04" d="M17 11.5V20H7V11.5L12 15l5-3.5z"/>
      <path fill="#C5221F" d="M17 11.5L22 6.5 20 4 12 10.5 4 4 2 6.5 7 11.5 12 15z"/>
    </svg>
  );
}

{/* Real Official Instagram Logo */}
export function InstagramOfficialIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ig-grad-radial" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6.5" fill="url(#ig-grad-radial)" />
      <path
        d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2zm5-8.2a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zm1.7 1.2c-.1-.7-.3-1.3-.9-1.8s-1.1-.8-1.8-.9c-.7-.1-2.3-.1-4-.1s-3.3 0-4 .1c-.7.1-1.3.3-1.8.9s-.8 1.1-.9 1.8c-.1.7-.1 2.3-.1 4s0 3.3.1 4c.1.7.3 1.3.9 1.8s1.1.8 1.8.9c.7.1 2.3.1 4 .1s3.3 0 4-.1c.7-.1 1.3-.3 1.8-.9s.8-1.1.9-1.8c.1-.7.1-2.3.1-4s0-3.3-.1-4zm-1.5 9.4c-.1.5-.4.8-.8.9-.6.2-2.1.2-3.4.2s-2.8 0-3.4-.2c-.4-.1-.7-.4-.8-.9-.2-.6-.2-2.1-.2-3.4s0-2.8.2-3.4c.1-.4.4-.7.8-.8.6-.2 2.1-.2 3.4-.2s2.8 0 3.4.2c.4.1.7.4.8.8.2.6.2 2.1.2 3.4s0 2.8-.2 3.4z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

{/* Real Official WhatsApp Logo */}
export function WhatsAppOfficialIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#25D366"
        d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.59 1.38 5.09L2.05 22l4.98-1.31A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
      />
      <path
        fill="#FFFFFF"
        d="M17.5 14.3c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.51 0 1.48 1.08 2.91 1.23 3.11.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.27-.2-.57-.35z"
      />
    </svg>
  );
}

export function SocialContactRow({ compact = false }: { compact?: boolean }) {
  const mailSubject = encodeURIComponent("Inquiry: The Alchemy Coffee Collection Edition 1");
  const mailBody = encodeURIComponent("Hello Primrose Team,\n\nI am interested in requesting cupping samples and lot allocations for The Alchemy Coffee Collection Edition 1.\n\nBest regards,");
  const whatsappMsg = encodeURIComponent("Hello Primrose Coffee! I would like to inquire about The Alchemy Coffee Collection Edition 1 (+251911513747).");

  return (
    <div className={`flex items-center justify-center gap-3.5 ${compact ? 'scale-90' : ''}`}>
      {/* Gmail Button with Official Gmail Icon */}
      <a
        href={`mailto:primroseplc@gmail.com?subject=${mailSubject}&body=${mailBody}`}
        className="w-11 h-11 rounded-full bg-white shadow-sm hover:shadow-md flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-200 border border-slate-200/80"
        title="Email primroseplc@gmail.com"
        aria-label="Email Primrose Speciality Coffee (primroseplc@gmail.com)"
      >
        <GmailOfficialIcon className="w-5.5 h-5.5" />
      </a>

      {/* Instagram Button with Official Instagram Icon */}
      <a
        href="https://www.instagram.com/primrose.coffee"
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 rounded-full bg-white shadow-sm hover:shadow-md flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-200 border border-slate-200/80 overflow-hidden"
        title="Follow @primrose.coffee on Instagram"
        aria-label="Primrose Instagram Profile (primrose.coffee)"
      >
        <InstagramOfficialIcon className="w-5.5 h-5.5" />
      </a>

      {/* WhatsApp Button with Official WhatsApp Icon */}
      <a
        href={`https://wa.me/251911513747?text=${whatsappMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 rounded-full bg-white shadow-sm hover:shadow-md flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-200 border border-slate-200/80 overflow-hidden"
        title="Chat on WhatsApp (+251911513747)"
        aria-label="Chat with Primrose on WhatsApp (+251911513747)"
      >
        <WhatsAppOfficialIcon className="w-5.5 h-5.5" />
      </a>
    </div>
  );
}
