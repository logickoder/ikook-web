import { VscSettings } from 'react-icons/vsc';
import Chip from '../app/components/Chip.tsx';

interface HomeChipsProps {
  chips: string[];
  selected: string;
  setSelected: (selected: string) => void;
}

export default function HomeChips({ chips, selected, setSelected }: HomeChipsProps) {
  return (
    <section className="px-12 py-9 flex flex-row">
      <div className="flex-1 flex flex-row gap-3 overflow-x-auto no-scrollbar">
        {chips.map((chip, index) => (
          <Chip key={index} selected={selected === chip} onSelected={() => setSelected(chip)}>
            {chip}
          </Chip>
        ))}
      </div>
      <div className="hidden sm:flex flex-row justify-center px-8">
        <div className="w-[1.24px] bg-[#EBEBEB]" />
      </div>
      <Chip className="hidden sm:block">
        <div className="flex flex-row gap-2 items-center">
          Filter <VscSettings />
        </div>
      </Chip>
    </section>
  );
}
