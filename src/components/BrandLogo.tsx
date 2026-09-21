import React from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'compact' | 'monogram' | 'header';
  className?: string;
  light?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  className = '',
  light = false,
}) => {
  if (variant === 'monogram' || variant === 'compact') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <img
          src="/images/logo.png"
          alt="Real Looks Unisex Salon Monogram"
          className="w-full h-full object-contain filter drop-shadow-xs select-none"
          loading="eager"
        />
      </div>
    );
  }

  if (variant === 'header') {
    return (
      <div className={`flex items-center gap-2 select-none group ${className}`}>
        <img
          src="/images/logo.png"
          alt="Real Looks Unisex Salon"
          className={`h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02] ${
            light 
              ? 'brightness-110 drop-shadow-[0_2px_8px_rgba(214,168,56,0.35)]' 
              : 'drop-shadow-xs'
          }`}
          loading="eager"
        />
      </div>
    );
  }

  // Full Variant: Exact logo from documentation
  return (
    <div className={`flex flex-col items-center text-center select-none ${className}`}>
      <img
        src="/images/logo.png"
        alt="Real Looks Unisex Salon"
        className="w-auto h-28 sm:h-36 lg:h-44 object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-[1.02]"
        loading="eager"
      />
    </div>
  );
};
