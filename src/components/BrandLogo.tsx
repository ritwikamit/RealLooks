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
          src="/images/logo-emblem.png"
          alt="Real Looks Unisex Salon Emblem"
          className="w-full h-full object-contain filter drop-shadow-xs select-none"
          loading="eager"
        />
      </div>
    );
  }

  if (variant === 'header') {
    return (
      <div className={`flex items-center select-none group ${className}`}>
        <img
          src="/images/logo.png"
          alt="Real Looks Unisex Salon"
          className="h-10 sm:h-12 w-auto max-w-[180px] sm:max-w-[220px] object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-transform duration-300 group-hover:scale-105"
          loading="eager"
        />
      </div>
    );
  }

  // Full Variant: Exact logo from documentation with background removed
  return (
    <div className={`flex flex-col items-center text-center select-none ${className}`}>
      <img
        src="/images/logo.png"
        alt="Real Looks Unisex Salon"
        className="w-auto h-28 sm:h-36 lg:h-44 max-w-full object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-[1.02]"
        loading="eager"
      />
    </div>
  );
};
