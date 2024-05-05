import React, { useEffect, useRef, useState } from "react";
import logo from '../images/Logo.svg';

const Nav = ({ setCurrentComponent, handleReservationClick }) => {
  const navListRef = useRef(null);
  const logoRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const navListElement = navListRef.current;
      const logoElement = logoRef.current;

      if (!navListElement || !logoElement) {
        return;
      }

      if (prevScrollPos > currentScrollPos) {
        navListElement.classList.remove('hidden');
        logoElement.classList.remove('hidden');
      } else {
        navListElement.classList.add('hidden');
        logoElement.classList.add('hidden');
      }

      prevScrollPos = currentScrollPos;
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false); // close the hamburger menu when a link is clicked
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navbar">
      <a href='/' ref={logoRef}>
        <img src={logo} alt='logo' />
      </a>
      <nav className={`burger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className='bar1'></div>
        <div className='bar1'></div>
        <div className='bar1'></div>
      </nav>
      <nav ref={navListRef} className={`Nav-list ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href='/' onClick={handleClick("header")}>Home</a>
          </li>
          <li>
            <a href='/#about' onClick={handleClick("about")}>About</a>
          </li>
          <li>
            <a href='/#menu' onClick={handleClick("menu")}>Menu</a>
          </li>
          <li>
            <a href='/#reservations' onClick={handleReservationClick}>Reservations</a>
          </li>
          <li>
            <a href='/#order-online' onClick={handleClick("online-order")}>Order Online</a>
          </li>
          <li>
            <a href='/#login' onClick={handleClick("login")}>Login</a>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default Nav;