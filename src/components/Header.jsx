import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar bg-transparent absolute z-50 w-full">
      <div className="flex-1">
        <div className="bg-black top-0 left-0 px-5">
          <a className="btn btn-ghost text-xl" href="/">
            <img src="/logo.png" className="w-20" alt="logo" />
          </a>
        </div>
      </div>
      <div className="flex-none">
        {/* Menu Desktop */}
        <ul className="menu menu-horizontal px-1 hidden md:flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Project">Project</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="accent">
            <a
              className="block py-2 text-white"
              href="https://wa.me/6282325370695"
              target="_blank"
              rel="noopener noreferrer"
            >
              +62 823 5037 0695
            </a>
          </li>
        </ul>

        {/* Menu Mobile */}
        <div className="md:hidden flex items-center">
          <button className="text-white" onClick={toggleMenu}>
            <img src="/menu-burger.png" className="w-10" alt="menu"></img>
          </button>
        </div>

        {/* Dropdown Menu Mobile with Slide-in/Slide-out Animation */}
        <div
          className={`fixed top-0 right-0 bg-black text-white w-full h-screen py-4 px-6 shadow-lg transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-10">
            <img src="/logo.png" className="w-20" alt="logo" />
            {/* Close Button */}
            <button className="text-white" onClick={closeMenu}>
              <i className="fas fa-times text-3xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </i>
            </button>
          </div>
          <ul>
            <li className="mb-4 uppercase">
              <Link to="/" className="block py-2" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="mb-4 uppercase">
              <Link to="/About" className="block py-2" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="mb-4 uppercase">
              <Link to="/Project" className="block py-2" onClick={closeMenu}>
                Project
              </Link>
            </li>
            <li className="mb-4 uppercase">
              <Link to="/Contact" className="block py-2" onClick={closeMenu}>
                Contact
              </Link>
            </li>
            <li className="mb-4 uppercase accent">
              <a
                className="block py-2 text-white"
                href="https://wa.me/6282325370695"
                target="_blank"
                rel="noopener noreferrer"
              >
                +62 823 5037 0695
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
