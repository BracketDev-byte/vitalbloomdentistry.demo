import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-teal-600 hover:bg-teal-400 text-white px-4 py-1.5 rounded-lg text-md font-medium transition-colors"
      >
        {children}
      </button>
    </>
  );
}
