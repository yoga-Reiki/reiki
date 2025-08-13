import React, { useState } from 'react';
import reikiLogo from '../assets/img/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

function Header() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About Us" },
        { to: "/cources", label: "Courses" },
        { to: "/product", label: "Products" },
        { to: "/gallery", label: "Gallery" },
        { to: "/blog", label: "Blog" },
        { to: "/contact-us", label: "Contact Us" },
    ];

    const renderLinks = (isMobile = false) =>
        navLinks.map(link => (
            <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`relative font-medium block ${location.pathname === link.to
                    ? "text-[#EA7913]"
                    : "text-gray-700 hover:text-[#EA7913]"
                    } transition px-2 py-2`}
            >
                {link.label}
                {location.pathname === link.to && (
                    <span className="block absolute left-0 -bottom-1 w-full h-0.5 bg-orange-400 rounded"></span>
                )}
            </Link>
        ));

    return (
        <header className="w-full bg-white shadow-sm">
            <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 lg:px-8 relative">
                {/* Left Nav (desktop) */}
                <div className="hidden lg:flex items-center gap-8">
                    {renderLinks().slice(0, 4)}
                </div>

                {/* Logo & Title */}
                <div className="flex flex-col items-center flex-shrink-0">
                    <Link to="/" className="flex items-center">
                        <img
                            src={reikiLogo}
                            alt="Logo"
                            className="w-32 object-contain mb-1 hover:cursor-pointer transition-transform transform"
                        />
                    </Link>
                </div>

                {/* Right Nav (desktop) */}
                <div className="hidden lg:flex items-center gap-8">
                    {renderLinks().slice(4)}
                    <Link
                        to={"/login"}
                        className="animated-border ml-2 px-[24px] py-[12px] bg-[#EA7913] text-white rounded-full font-medium shadow hover:bg-orange-400 transition text-base"
                    >
                        Login
                    </Link>
                </div>

                {/* mobile menu */}
                <div className='flex items-center space-x-4 md:space-x-10 lg:hidden'>
                    <Link
                        to={"/login"}
                        className="animated-border ml-2 px-[24px] py-[12px] bg-[#EA7913] text-white rounded-full font-medium shadow hover:bg-orange-400 transition text-base"
                    >
                        Login
                    </Link>
                    <button
                        className="text-3xl text-[#EA7913] focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>

                {/* Mobile Menu items */}
                <div
                    className={`absolute top-full left-0 w-full bg-white shadow-md z-50 flex flex-col items-start px-4 lg:hidden transition-all duration-300 ease-in-out
                        ${menuOpen ? 'max-h-[500px] py-4 opacity-100 pointer-events-auto' : 'max-h-0 py-0 opacity-0 pointer-events-none'}
                    `}
                    style={{ overflow: 'hidden' }}
                >
                    {renderLinks(true)}
                </div>
            </nav>
        </header>
    );
}

export default Header;