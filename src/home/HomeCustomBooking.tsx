import Chip from '../app/components/Chip.tsx';
import { BiChevronDown } from 'react-icons/bi';

interface HomeCustomBookingProps {
  title: string;
}

export default function HomeCustomBooking({ title }: HomeCustomBookingProps) {
  return (
    <section className="w-full flex flex-row justify-between items-center px-12 mb-10">
      <h1 className="font-semibold text-3xl text-title">{title}</h1>

      <div className="hidden lg:flex flex-row w-[45%] pl-6 pr-4 py-2 border border-[#E7E7E7] rounded-full justify-between items-center">
        <span className="text-sm">Can’t find what you want? use the custom booking</span>
        <span className="px-5 py-3 rounded-full bg-primary text-white font-semibold text-base whitespace-nowrap">
          Custom Booking
        </span>
      </div>

      <Chip>
        <div className="flex flex-row gap-2 items-center">
          Most Popular <BiChevronDown />
        </div>
      </Chip>
    </section>
  );
}
