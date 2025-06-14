import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, LinkedIn } from "../assets"; // ensure LinkedIn icon is present

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (title, id) => {
    setActive(title);
    setToggle(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const renderedNavLinks = navLinks.map((nav) => (
    <li
      key={nav.id}
      className={`${
        active === nav.title ? "text-white" : "text-secondary"
      } hover:text-white text-[18px] font-medium cursor-pointer`}
    >
      <a
        href={`#${nav.id}`}
        onClick={(e) => {
          e.preventDefault();
          handleNavClick(nav.title, nav.id);
        }}
      >
        {nav.title}
      </a>
    </li>
  ));

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-colors duration-300 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <div className='flex items-center gap-4'>
          <Link
            to='/'
            className='flex items-center gap-2'
            onClick={() => {
              setActive("");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
            <p className='text-white text-[18px] font-bold cursor-pointer flex'>
              Karthik Yadav&nbsp;
              <span className='sm:block hidden'>| Portfolio</span>
            </p>
          </Link>

          {/* LinkedIn Icon */}
          <a
            href='https://www.linkedin.com/in/karthikyadavm'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Visit LinkedIn Profile'
          >
            <img
              src={LinkedIn}
              alt='LinkedIn'
              className='w-6 h-6 object-contain hover:opacity-80'
              title='LinkedIn Profile'
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {renderedNavLinks}
        </ul>

        {/* Mobile Navigation */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-4 z-10 min-w-[160px] rounded-xl`}
          >
            <ul className='list-none flex flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium text-[16px] cursor-pointer ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                >
                  <a
                    href={`#${nav.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(nav.title, nav.id);
                    }}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
