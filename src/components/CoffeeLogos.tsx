import React from 'react';

export type CoffeeLogoKey =
  | 'koke-shalaye'
  | 'ura-beast'
  | 'gelcha-kindu'
  | 'amederaro'
  | 'muje-mesina'
  | 'gargari-gutity';

export interface CardImageMeta {
  local: string;
  cdn: string;
  alt: string;
}

export const CARD_IMAGE_MAP: Record<CoffeeLogoKey, CardImageMeta> = {
  'koke-shalaye': {
    local: '/cards/koke-shalaye.png',
    cdn: 'https://i.postimg.cc/Skf6CMTk/3.png',
    alt: 'Koke Shalaye Authentic Trademark'
  },
  'ura-beast': {
    local: '/cards/ura-beast.png',
    cdn: 'https://i.postimg.cc/npJKXk13/9.png',
    alt: 'Ura Beast The Coffee Beast Authentic Trademark'
  },
  'gelcha-kindu': {
    local: '/cards/gelcha-kindu.png',
    cdn: 'https://i.postimg.cc/gmHV8ZMt/7.png',
    alt: 'Gelcha Kindu Authentic Trademark'
  },
  'amederaro': {
    local: '/cards/amederaro.png',
    cdn: 'https://i.postimg.cc/k7Mxcgzn/4.png',
    alt: 'Amederaro Authentic Trademark'
  },
  'muje-mesina': {
    local: '/cards/muje-mesina.png',
    cdn: 'https://i.postimg.cc/B4BTHKhr/10.png',
    alt: 'Muje Mesina Authentic Trademark'
  },
  'gargari-gutity': {
    local: '/cards/gargari-gutity.png',
    cdn: 'https://i.postimg.cc/ysymcZQK/11.png',
    alt: 'Gargari Gutity Authentic Trademark'
  }
};

export function RenderCoffeeLogo({
  logoKey,
  className = "w-full h-full object-contain",
}: {
  logoKey: CoffeeLogoKey;
  className?: string;
  size?: number;
}) {
  const item = CARD_IMAGE_MAP[logoKey] || CARD_IMAGE_MAP['koke-shalaye'];

  return (
    <img
      src={item.local}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        if (!target.src.includes('postimg.cc')) {
          target.src = item.cdn;
        }
      }}
      alt={item.alt}
      loading="lazy"
      decoding="async"
      className={`${className} object-contain transition-opacity duration-300`}
      style={{ imageRendering: 'auto' }}
    />
  );
}
