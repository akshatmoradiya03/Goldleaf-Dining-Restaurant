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
            <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20 relative z-10 mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left Side - Food Image with Ingredients */}
                    <div className="relative order-1 lg:order-1 lg:mt-0">
                        {/* Main Dish Image */}
                        <div className="relative w-full max-w-[280px] sm:max-w-md lg:max-w-lg mx-auto">
                            <div className="relative rounded-full overflow-hidden shadow-2xl border-4 border-white/10">
                                <img
                                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Delicious Indian Cuisine"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating Ingredient Images - Visible on mobile now */}
                            <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden shadow-xl animate-float border-2 border-white/20">
                                <img
                                    src="https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="Fresh carrots"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="absolute -bottom-4 -right-8 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-xl animate-float-delayed border-2 border-white/20">
                                <img
                                    src="https://plus.unsplash.com/premium_photo-1700064759190-f8a6b2b27f7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJlc2glMjBoZXJic3xlbnwwfHwwfHx8MA%3D%3D"
                                    alt="Fresh herbs"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="absolute top-[40%] -right-12 w-14 h-14 sm:w-20 sm:h-20 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-xl animate-float border-2 border-white/20">
                                <img
                                    src="https://images.unsplash.com/photo-1701374930119-78a86eb6befc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZydWl0ZXN8ZW58MHx8MHx8fDA%3D"
                                    alt="Spices"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="text-white space-y-6 lg:space-y-8 order-2 lg:order-2 text-center lg:text-left">
                        <div className="space-y-3 lg:space-y-4">
                            <p className="text-yellow-400 uppercase tracking-[0.2em] lg:tracking-[0.3em] text-xs sm:text-base lg:text-xl font-semibold">
                                Welcome to Goldleaf Dining
                            </p>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                <span className="font-serif">Authentic Indian</span>
                                <span className="block text-yellow-400 font-serif italic mt-2">
                                    Flavors
                                </span>
                            </h1>
                        </div>

                        <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Experience the rich tapestry of Indian cuisine, where every dish tells a story of tradition,
                            passion, and authentic spices carefully crafted to perfection.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                            <Link
                                to="/menu"
                                className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold uppercase text-sm tracking-wider rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/50 hover:scale-105"
                            >
                                <span className="relative z-10">View Our Menu</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </Link>
                            <Link
                                to="/reservations"
                                className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold uppercase text-sm tracking-wider rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
                            >
                                Book a Table
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        </div>
    );
};

export default Hero;
