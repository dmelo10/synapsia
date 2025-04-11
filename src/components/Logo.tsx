/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

type LogoProps = {
  variant?: 'default' | 'icon';
};

const Logo = ({ variant = 'default' }: LogoProps) => {
  return (
    <a
      href=''
      className=''
    >
      {variant === 'default' && (
        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          FounderPilot AI
        </span>
      )}

      {variant === 'icon' && (
        <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          FP
        </span>
      )}
    </a>
  );
};

export default Logo;
