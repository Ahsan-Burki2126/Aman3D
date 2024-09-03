import React, { useState } from 'react';
import Logo from "../assets/Logo.png";
import { X, AlignRight } from "lucide-react";
import { navItemsFirst, navItemsSecond } from '../Constants/constants';

const Navbar = () => {

  const [navDrawer, setNavDrawer] = useState(false);

  // Function to toggle the navigation drawer
  function navToggle() {
    setNavDrawer(!navDrawer);
  }

  return (
    <>
      <header className="container flex justify-between lg:justify-center items-center mx-auto py-6 px-3">
        {/* First set of nav items for larger screens */}
        <ul className='hidden lg:flex justify-center items-center gap-5'>
          {navItemsFirst.map((item) => (
            <li key={item.id} href={item.href} className='relative cursor-pointer text-slate-200 py-2  before:absolute before:top-full before:h-[.5px] before:w-0 before:bg-slate-200 hover:before:w-full before:transition-width before:duration-300 before:ease-in-out'>
              {item.label}
            </li>
          ))}
        </ul>

        {/* Logo */}
        <div className='w-14 sm:justify-self-center ml-52 lg:mx-12'>
          <a href="#"><img src={Logo} alt="Logo" /></a>
        </div>

        {/* Second set of nav items for larger screens */}
        <ul className='hidden lg:flex justify-center items-center gap-5'>
          {navItemsSecond.map((item) => (
            <li key={item.id} href={item.href} className='relative cursor-pointer text-slate-200 py-2  before:absolute before:top-full before:h-[.5px] before:w-0 before:bg-slate-200 hover:before:w-full before:transition-width before:duration-300 before:ease-in-out'>
              {item.label}
            </li>
          ))}
        </ul>

        {/* Hamburger icon for mobile view */}
        <div onClick={navToggle} className="flex justify-center items-center text-slate-300 cursor-pointer lg:hidden">
          <AlignRight size={36} />
        </div>
      </header>




      {/* Mobile Drawer */}
      <aside className={`lg:hidden fixed left-0 top-0 h-full bg-slate-200 w-[45%] transition-transform duration-300 ease-in-out ${navDrawer ? 'transform-none' : '-translate-x-full'}`}>
        {/* Close button */}
        <div onClick={navToggle} className="w-full flex justify-end items-center gap-2 p-4 hover:opacity-75 duration-150 ease-in-out cursor-pointer">
          <X size={24} />
        </div>

        {/* First set of nav items for mobile view */}
        <ul className="flex flex-col justify-center items-start gap-2">
          {navItemsFirst.map((item) => (
            <li key={item.id} href={item.href} className='relative border-b border-b-gray-400 pl-4 w-full cursor-pointer text-gray-700 font-thin py-2 px-2 hover:text-red-900'>
              {item.label}
            </li>
          ))}
        </ul>

        {/* Second set of nav items for mobile view */}
        <ul className="flex flex-col justify-center items-start gap-2">
          {navItemsSecond.map((item) => (
            <li key={item.id} href={item.href} className='relative border-b border-b-gray-400 pl-4 cursor-pointer text-gray-700 font-thin py-2 px-2 hover:text-red-900 w-full'>
              {item.label}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
