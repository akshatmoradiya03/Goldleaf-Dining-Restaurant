import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-gray-50" data-scroll-section>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Image */}
                    <div className="relative">
                        <div className="relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Restaurant Interior"
                                className="rounded-lg shadow-2xl w-full h-96 object-cover"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-yellow-500 rounded-lg -z-10"></div>
                    </div>

                    {/* Right Side - Content */}
                    <div>
                        <h3 className="text-yellow-600 uppercase tracking-widest text-xl font-semibold mb-2">Our Story</h3>
                        <h2 className="text-5xl font-bold text-gray-900 mb-6 font-serif">Welcome to Goldleaf Dining</h2>
                        <div className="w-24 h-1 bg-yellow-500 mb-8"></div>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            At Goldleaf Dining, we bring you the authentic flavors of India, prepared with love and the finest ingredients. Our journey began with a simple vision: to create a dining experience that celebrates the rich culinary heritage of Indian cuisine.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Every dish we serve tells a story of tradition, passion, and culinary excellence. From aromatic spices to time-honored cooking techniques, we ensure that each meal is a celebration of taste and culture.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="text-center p-6 bg-white rounded-lg shadow-md">
                                <div className="text-4xl font-bold text-yellow-600 mb-2">20+</div>
                                <div className="text-gray-600 uppercase text-sm tracking-wider">Years Experience</div>
                            </div>
                            <div className="text-center p-6 bg-white rounded-lg shadow-md">
                                <div className="text-4xl font-bold text-yellow-600 mb-2">50+</div>
                                <div className="text-gray-600 uppercase text-sm tracking-wider">Signature Dishes</div>
                            </div>
                        </div>

                        <Link to="/about" className="inline-block px-8 py-4 bg-yellow-500 text-gray-900 uppercase tracking-widest text-xs hover:bg-yellow-400 transition-all duration-300 font-bold rounded-lg">
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
