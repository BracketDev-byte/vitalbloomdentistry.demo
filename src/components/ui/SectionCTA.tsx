import { ReactNode } from 'react';

interface SectionCtaProps {
  children: ReactNode;
  primary?: boolean;
  secondary?: boolean;
  onClick: () => void;
}

export default function SectionCta({
  children,
  primary,
  secondary,
  onClick,
}: SectionCtaProps) {
  let buttonStyles =
    'px-5 py-1.5  rounded-lg  bg-white hover:bg-white/90 text-primary transition-colors'; // default white

  if (primary) {
    buttonStyles =
      'px-8 py-1.5 rounded-lg transition-colors bg-teal-600 hover:bg-primary text-white';
  } else if (secondary) {
    buttonStyles =
      'px-8 py-1.5 rounded-lg transition-colors bg-white text-primary border hover:bg-primary hover:text-white';
  }

  return (
    <div>
      <button onClick={onClick} className={` ${buttonStyles}`}>
        {children}
      </button>
    </div>
  );
}
