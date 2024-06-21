import { ReactNode } from 'react';

interface ChipProps {
  selected?: boolean;
  onSelected?: () => void;
  className?: string;
  children: ReactNode;
}

export default function Chip({ selected, onSelected, className, children }: ChipProps) {
  return (
    <div
      onClick={onSelected}
      className={`px-5 py-2.5 font-medium text-base text-title cursor-pointer whitespace-nowrap ${selected ? 'bg-primary text-white border-2 border-[#F9DF98]' : 'border border-[#CFCFCE]'} ${className ? className : ''} rounded-full`}
    >
      {children}
    </div>
  );
}
