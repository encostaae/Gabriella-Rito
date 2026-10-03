import React from 'react';

export type LogoVariant = 'original' | 'horizontal' | 'monogram' | 'full';
export type LogoTheme = 'auto' | 'light' | 'dark' | 'taupe';

interface ClinicLogoProps {
  variant?: LogoVariant;
  theme?: LogoTheme;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const ClinicLogo: React.FC<ClinicLogoProps> = ({
  variant = 'horizontal',
  theme = 'auto',
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const isDark = theme === 'dark';

  // Dimension mapping calibrated for vertical alignment with the navigation menu
  const sizes = {
    sm: {
      image: 'h-8 sm:h-9 w-auto',
      monogram: 'h-6 sm:h-7 w-auto',
    },
    md: {
      image: 'h-10 sm:h-11 md:h-12 w-auto',
      monogram: 'h-8 sm:h-9 w-auto',
    },
    lg: {
      image: 'h-16 sm:h-18 md:h-20 w-auto',
      monogram: 'h-11 sm:h-12 w-auto',
    },
    xl: {
      image: 'h-24 sm:h-28 w-auto',
      monogram: 'h-16 sm:h-20 w-auto',
    },
  };

  const currentSize = sizes[size] || sizes.md;

  // 1. ISOLATED ORIGINAL MONOGRAM
  if (variant === 'monogram') {
    const monoSrc = isDark
      ? '/images/real/logo_official_monogram_pearl.png'
      : '/images/real/logo_official_monogram_espresso.png';

    return (
      <div
        className={`inline-flex items-center justify-center select-none ${className}`}
        aria-label="Monograma GR - Gabriella Rito"
      >
        <img
          src={monoSrc}
          alt="Monograma Oficial GR"
          className={`${currentSize.monogram} object-contain transition-all duration-300 drop-shadow-sm`}
          loading="eager"
        />
      </div>
    );
  }

  // 2. FULL / HORIZONTAL / ORIGINAL (The Authentic Clinic Logo from https://i.postimg.cc/3RYHs8LV/logo-transparente.png)
  // Calibrated to match the exact menu color palette: #F7F4EF (unscrolled) and #4A3E37 (scrolled)
  const logoSrc = isDark
    ? '/images/real/logo_official_pearl.png'
    : '/images/real/logo_official_espresso.png';

  return (
    <div
      className={`inline-flex items-center select-none ${className}`}
      aria-label="Clínica Gabriella Rito - Logo Oficial"
    >
      <img
        src={logoSrc}
        alt="Logo Oficial Clínica Gabriella Rito"
        className={`${currentSize.image} object-contain transition-all duration-300 drop-shadow-sm`}
        loading="eager"
      />
    </div>
  );
};
