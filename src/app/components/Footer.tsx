import logo from '../assets/icons/logo.svg';
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { FaCcMastercard, FaCcPaypal, FaCcVisa, FaSquareInstagram } from 'react-icons/fa6';
import { BsArrowRight } from 'react-icons/bs';

export default function Footer() {
  const socialIconStyle = 'w-8 h-8 text-body';
  return (
    <footer className="bg-primary px-12 pt-16 pb-6">
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <h2 className="font-medium text-3xl whitespace-nowrap w-full grow-[2] shrink-[2] basis-0">
          Join our Newsletter
        </h2>
        <Input type="text" placeholder="Enter your name" className="flex-1" />
        <Input
          type="email"
          placeholder="Enter email to join our newsletter"
          className="grow-[2] shrink-[2] basis-0"
        />
        <button className="py-4 px-7 bg-black text-white text-lg font-semibold rounded-full self-end">
          Subscribe
        </button>
      </div>
      <div className="flex flex-col lg:flex-row mt-11 gap-4 lg:gap-28">
        <div className="flex flex-col gap-6 lg:gap-14">
          <img
            src={logo}
            style={{
              objectFit: 'cover'
            }}
            alt="iKooK"
            className="w-20"
          />
          <div className="flex flex-row gap-6">
            <AiFillFacebook className={socialIconStyle} />
            <AiFillTwitterSquare className={socialIconStyle} />
            <FaSquareInstagram className={socialIconStyle} />
            <AiFillLinkedin className={socialIconStyle} />
          </div>
        </div>
        <div className="mt-7 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-y-4 justify-between flex-1">
          {items.map((item, index) => (
            <div
              key={index}
              className={index === items.length - 1 ? 'self-stretch flex flex-col' : ''}
            >
              <h3 className="font-medium text-xl text-black mb-3">{item.title}</h3>
              <ul>
                {item.items.map((subItem, subIndex) => (
                  <li key={subIndex} className="font-medium text-base mb-4">
                    {subItem}
                  </li>
                ))}
                {index === items.length - 2 && <SeeOtherCountries />}
              </ul>
              {index === items.length - 1 && <PaymentOptions />}
            </div>
          ))}
        </div>
      </div>
      <p className="mt-7 text-sm">Copyright © 2022 iKooK, All Right Reserved</p>
    </footer>
  );
}

function Input({
  type,
  placeholder,
  className
}: {
  type: string;
  placeholder: string;
  className?: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`px-8 py-5 w-full rounded-full bg-white ${className ? className : ''}`}
    />
  );
}

function SeeOtherCountries() {
  return (
    <li className="flex flex-row gap-1 items-center text-sm text-body py-1 px-2 border border-body rounded-full w-fit">
      <span>See other countries</span>
      <BsArrowRight className="w-4" />
    </li>
  );
}

function PaymentOptions() {
  const iconStyle = 'w-8 h-8 text-body';
  return (
    <>
      <div className="flex-1" />
      <div className="flex flex-row gap-3 items-center">
        <FaCcPaypal className={iconStyle} />
        <FaCcVisa className={iconStyle} />
        <FaCcMastercard className={iconStyle} />
      </div>
      <p className="mt-1.5 text-xs text-black">Your payment is secured</p>
    </>
  );
}

const items = [
  {
    title: 'iKooK',
    items: ['About us', 'How it works', 'FAQs', 'Privacy Policy', 'Terms & Condition']
  },
  {
    title: 'Services',
    items: ['Chef at Home', 'Large Event', 'Meal Prep', 'Fine Dining', 'More +']
  },
  {
    title: 'Experience',
    items: ['Signup as Chef', 'Gift Experience', 'Split Bills', 'Career', 'Blog']
  },
  {
    title: 'iKooK Chef in',
    items: ['United Kingdom', 'Nigeria', 'Canada', 'South Africa']
  },
  {
    title: 'Contact Us',
    items: ['0203 807 8500', 'team@ikook.co.uk', 'Support']
  }
];
