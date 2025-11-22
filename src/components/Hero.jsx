import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden" data-scroll-section>
            {/* Premium Dark Background with Texture */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1604147495798-57beb5d6af73?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Dark Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/85 to-black/80"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] opacity-30"></div>
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Food Image with Ingredients */}
                    <div className="relative">
                        {/* Main Dish Image */}
                        <div className="relative w-full max-w-lg mx-auto mt-10">
                            <div className="relative rounded-full overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Delicious Indian Cuisine"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating Ingredient Images */}
                            <div className="absolute -top-1 -left-10 w-32 h-32 rounded-full overflow-hidden shadow-xl animate-float">
                                <img
                                    src="https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="Fresh carrots"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full overflow-hidden shadow-xl animate-float-delayed">
                                <img
                                    src="https://plus.unsplash.com/premium_photo-1700064759190-f8a6b2b27f7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJlc2glMjBoZXJic3xlbnwwfHwwfHx8MA%3D%3D"
                                    alt="Fresh herbs"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="absolute top-1/2 -right-12 w-28 h-28 rounded-full overflow-hidden shadow-xl animate-float">
                                <img
                                    src="https://images.unsplash.com/photo-1701374930119-78a86eb6befc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZydWl0ZXN8ZW58MHx8MHx8fDA%3D"
                                    alt="Spices"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="text-white space-y-8">
                        <div className="space-y-4">
                            <p className="text-yellow-400 uppercase tracking-[0.3em] text-xl font-semibold mt-10">
                                Welcome to Goldleaf Dining
                            </p>
                            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                                <span className="font-serif">Authentic Indian</span>
                                <span className="block text-yellow-400 font-serif italic mt-2">
                                    Flavors
                                </span>
                            </h1>
                        </div>

                        <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                            Experience the rich tapestry of Indian cuisine, where every dish tells a story of tradition,
                            passion, and authentic spices carefully crafted to perfection.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                to="/menu"
                                className="px-8 py-4 bg-yellow-500 text-gray-900 uppercase tracking-widest text-xs hover:bg-yellow-400 transition-all duration-300 font-bold text-center rounded-lg"
                            >
                                Explore Menu
                            </Link>
                            <Link
                                to="/reservations"
                                className="inline-block px-8 py-4 border-2 border-yellow-500 text-yellow-500 uppercase tracking-widest text-xs hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 font-bold rounded-lg text-center"
                            >
                                Book a Table
                            </Link>
                        </div>

                        {/* Decorative Element */}
                        <div className="flex items-center gap-4 pt-8">
                            <div className="w-16 h-0.5 bg-yellow-500"></div>
                            <p className="text-gray-400 text-sm uppercase tracking-wider">Since 2024</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-yellow-500/20"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-yellow-500/20"></div>
        </div>
    );
};

export default Hero;
