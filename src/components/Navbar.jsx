import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            // Check both window scroll (for pages without Locomotive) and Locomotive scroll container
            const locomotiveContainer = document.querySelector('[data-scroll-container]');
            const scrollY = locomotiveContainer ? locomotiveContainer.scrollTop : window.scrollY;
            setScrolled(scrollY > 50);
        };

        const handleLocoScroll = (e) => {
            const scrollY = e.detail.scrollY;
            setScrolled(scrollY > 50);
        };

        // Listen to window scroll, Locomotive scroll container, and custom event
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('loco-scroll', handleLocoScroll);

        const locomotiveContainer = document.querySelector('[data-scroll-container]');
        if (locomotiveContainer) {
            locomotiveContainer.addEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('loco-scroll', handleLocoScroll);
            if (locomotiveContainer) {
                locomotiveContainer.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const isActive = (path) => location.pathname === path;

    const handleReservationsClick = () => {
        navigate('/reservations');
        setMobileMenuOpen(false);
    };

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-white/10 py-4 ${scrolled ? 'bg-black/50 backdrop-blur-xl shadow-2xl' : 'bg-black shadow-none'
            }`}>
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative z-50">
                {/* Logo */}
                <Link to="/" className="text-xl md:text-4xl md:ml-20 font-extrabold tracking-tight text-yellow-400 font-serif shrink-0">
                    Goldleaf Dining
                </Link>

                {/* Navigation Links */}
                <div className="flex items-center space-x-4 md:space-x-12 ml-4 md:ml-20">
                    <Link
                        to="/"
                        className={`text-xs md:text-sm uppercase tracking-wider hover:text-yellow-600 hover:underline transition-colors ${isActive('/') ? 'text-yellow-600 font-bold' : 'text-yellow-400'}`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/menu"
                        className={`text-xs md:text-sm uppercase tracking-wider hover:text-yellow-600 hover:underline transition-colors ${isActive('/menu') ? 'text-yellow-600 font-bold' : 'text-yellow-400'}`}
                    >
                        Menu
                    </Link>
                    <Link
                        to="/about"
                        className={`text-xs md:text-sm uppercase tracking-wider hover:text-yellow-600 hover:underline transition-colors ${isActive('/about') ? 'text-yellow-600 font-bold' : 'text-yellow-400'}`}
                    >
                        About
                    </Link>
                </div>

                {/* Book Button (Hidden on very small screens if needed, or kept small) */}
                <button
                    onClick={handleReservationsClick}
                    className="hidden sm:block px-3 py-1 md:px-6 md:py-2 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white transition-all duration-300 uppercase text-[10px] md:text-xs tracking-widest rounded-lg whitespace-nowrap"
                >
                    Book a Table
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
