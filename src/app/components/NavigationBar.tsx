import usaIcon from '../assets/icons/usa.svg';
import { ReactNode } from 'react';
import { MdOutlineMenu, MdOutlineSearch } from 'react-icons/md';
import { GoPerson } from 'react-icons/go';
import { PiShoppingCartSimpleBold } from 'react-icons/pi';
import textLogo from '../assets/icons/logoText.svg';

export default function NavigationBar() {
  return (
    <nav className="flex flex-row lg:grid lg:grid-cols-[1fr_3fr_2fr] justify-between items-center content-center py-6 px-12 shadow-md">
      <img
        src={textLogo}
        style={{
          objectFit: 'cover'
        }}
        alt="iKooK"
        className="w-[7.25rem]"
      />
      <div className="hidden lg:flex flex-row px-6 py-2 border-[1.24px] border-[#EBEBEB] rounded-full items-center shadow-md">
        <MiddleText>Location</MiddleText>
        <VerticalDivider />
        <MiddleText>Event Date</MiddleText>
        <VerticalDivider />
        <MiddleText>Guest</MiddleText>
        <div className="grow-[1] shrink-[1]" />
        <div className="px-4 py-2 rounded-full bg-primary text-white font-semibold text-sm flex flex-row items-center gap-2">
          <MdOutlineSearch size={20} />
          Search
        </div>
      </div>
      <div className="flex flex-row items-center justify-end">
        <PiShoppingCartSimpleBold size={24} className="hidden sm:block" />
        <span className="text-sm font-medium mr-9 ml-6 hidden sm:block">Login</span>
        <div className="flex flex-row gap-1 px-3 py-2 border border-[#CFCFCE] rounded-full items-center mr-3">
          <div className="p-2 text-primary bg-[#F9F5FF] rounded-full">
            <GoPerson size={20} />
          </div>
          <MdOutlineMenu size={20} />
        </div>
        <img
          className="w-6 h-6 rounded-full border-[0.34px] border-body"
          src={usaIcon}
          alt="USA Flag"
        />
      </div>
    </nav>
  );
}

function MiddleText({ children }: { children: ReactNode }) {
  return <span className="font-medium text-base">{children}</span>;
}

function VerticalDivider() {
  return (
    <div className="h-full grow-[2] shrink-[2] flex flex-row justify-center">
      <div className="w-[1.24px] bg-[#EBEBEB]" />
    </div>
  );
}
