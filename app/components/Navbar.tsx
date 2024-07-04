"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [burgerOpen, setburgerOpen] = useState(false);

  const toggleBurger = () => {
    setburgerOpen(!burgerOpen);
  };

  return (
    <motion.nav
  className="p-4 ws z-20 absolute top-0 w-full"
>
  {/* Main Navbar Content */}
  <div className={`max-w-7xl mx-auto flex justify-center items-center relative`}>
    
    
    <ul className={`flex relative`}>
      <NavItem to="#about" text="Tentang" />
      <NavItem to="#services" text="Benefit" />
      <NavItem to="#contact" text="Kontak" />
    </ul>
  </div>

  {/* burger menu */}
  {burgerOpen && (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50">
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ opacity: 0 }}
        className="fixed top-0 right-0 bottom-0 bg-darkblu w-64 py-6 px-4"
      >
        <button onClick={toggleBurger} className="focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <ul className="mt-6">
          <NavItem to="#about" text="Tentang" onClick={toggleBurger} />
          <NavItem to="#services" text="Services" onClick={toggleBurger} />
          <NavItem to="#contact" text="Contact" onClick={toggleBurger} />
        </ul>
      </motion.div>
    </div>
  )}
</motion.nav>
  );
};

interface NavItemProps {
  to: string;
  text: string;
  onClick?: () => void;
}

const NavItem = ({ to, text, onClick, }: NavItemProps) => {
  return (
    <Link href={to}>
      <li
        onClick={onClick}
        className="hover:text-yelaccent hover:underline rounded-lg p-2 px-5 transition-all duration-300 cursor-pointer"
      >
        {text}
      </li></Link>
  );
};

export default Navbar;
