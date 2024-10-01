import React, { useState } from 'react';
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import logo_m41k80 from "assets/img/newm41k80.png";
import loading from "assets/img/loading-dots.gif";
import { CircleLoader, DotLoader } from 'react-spinners';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [loading, setLoading] = useState(true);

  return (
    <nav className="w-full py-4 top-0 fixed">
      <header className="p-4 text-gray-800">
        <div className="container flex justify-between mx-auto md:px-12 px-2">
          <Link to='/' className="ml-4 mt-1 flex-shrink-0 inline-flex"> 
            <img src={logo_m41k80} width={160} height={200} className="" />
          </Link>
          <div className={`ml-4 mt-1 items-center flex-shrink-0 ${menuOpen ? 'flex' : 'hidden'} lg:flex lg:flex-row flex-col lg:space-x-4 space-x-0 lg:space-y-0`}>
            <NavLink to='/cases' className="text-lg inline-flex font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-4 mx-4">Cases</NavLink>
            <NavLink to='/services' className="text-lg inline-flex font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-4 mx-4">Services</NavLink>
            <NavLink to='/about' className="text-lg inline-flex font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-4 mx-4">About Us</NavLink>
            <NavLink to='/careers' className="text-lg inline-flex font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-4 mx-4">Careers</NavLink>
            <NavLink to='/blog' className="text-lg inline-flex font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-4 mx-4">Blog</NavLink>
            <NavLink to='/contact' className="text-lg inline-flex font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-4 mx-4">Contact</NavLink>
            <Link to='/contact' className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-violet-600 px-5 py-2 text-lg font-bold text-white shadow-sm transition duration-300 ease-in-out hover:bg-black focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2">
              Hire Us
              <CircleLoader loading={loading} size={30} color="#fff" />
            </Link>
          </div>
          <button className="p-4 lg:hidden" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>
    </nav>
  );
}

const mapStateToProps = state => ({});

export default Navbar;

