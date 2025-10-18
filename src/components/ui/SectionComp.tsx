import { ReactNode } from 'react';

export interface SectionContainerProps {
  children: ReactNode;
  bgColor: string;
}

export default function SectionContainer({
  children,
  bgColor,
}: SectionContainerProps) {
  return (
    <section className={`px-6 py-20  ${bgColor} md:px-25`}>{children}</section>
  );
}
