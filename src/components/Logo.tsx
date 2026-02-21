interface LogoProps {
  variant?: 'dark' | 'light';
  showSubtitle?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({
  variant = 'dark',
  showSubtitle = false,
  className = '',
  size = 'md',
}: LogoProps) {
  const subtitleFill = variant === 'dark' ? '#1A1A1A' : '#FAF8F5';

  const sizeClasses = {
    sm: 'h-6',
    md: 'h-9',
    lg: 'h-14',
  };

  const filterStyle =
    variant === 'light'
      ? { filter: 'invert(1) brightness(10)' }
      : {};

  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      <img
        src="/logo/logo-lima67.svg"
        alt="Lima67 logo"
        className={`${sizeClasses[size]} w-auto`}
        style={filterStyle}
        role="img"
        aria-label="Lima67 logo"
      />
    </div>
  );
}
