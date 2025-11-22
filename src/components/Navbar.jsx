import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            // Check both window scroll (for pages without Locomotive) and Locomotive scroll container
            const locomotiveContainer = document.querySelector('[data-scroll-container]');
            const scrollY = locomotiveContainer ? locomotiveContainer.scrollTop : window.scrollY;
            setScrolled(scrollY > 50);
        };

        // Listen to both window scroll and Locomotive scroll container
        window.addEventListener('scroll', handleScroll);
        const locomotiveContainer = document.querySelector('[data-scroll-container]');
        if (locomotiveContainer) {
            locomotiveContainer.addEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (locomotiveContainer) {
                locomotiveContainer.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const isActive = (path) => location.pathname === path;

    const handleReservationsClick = () => {
        navigate('/reservations');
    };

    return (
        <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-3xl shadow-2xl border-b border-white/10 py-4 transition-all duration-300">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="text-4xl ml-20 font-extrabold tracking-tight text-yellow-400 font-serif">
                    Goldleaf Dining
                </Link>
                <div className="hidden md:flex space-x-12 ml-20">
                    <Link
                        to="/"
                        className={`text-sm uppercase tracking-wider hover:text-yellow-600 hover:underline transition-colors ${isActive('/') ? 'text-yellow-600 font-bold' : 'text-yellow-400'}`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/menu"
                        className={`text-sm uppercase tracking-wider hover:text-yellow-600 hover:underline transition-colors ${isActive('/menu') ? 'text-yellow-600 font-bold' : 'text-yellow-400'}`}
                    >
                        Menu
                    </Link>
                    <Link
                        to="/about"
                        className={`text-sm uppercase tracking-wider hover:text-yellow-600 hover:underline transition-colors ${isActive('/about') ? 'text-yellow-600 font-bold' : 'text-yellow-400'}`}
                    >
                        About
                    </Link>
                </div>
                <button
                    onClick={handleReservationsClick}
                    className="px-6 py-2 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white transition-all duration-300 uppercase text-xs tracking-widest rounded-lg"
                >
                    Book a Table
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
