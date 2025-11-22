import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-50" data-scroll-section>
            {/* Hero Section */}
            <div className="relative h-96 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Restaurant Interior"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-6xl font-bold mb-4 font-serif mt-20">About Goldleaf Dining</h1>
                        <p className="text-xl">Authentic Indian Cuisine Since 2024</p>
                    </div>
                </div>
            </div>

            {/* Our Story Section */}
            <div className="container mx-auto px-6 py-20">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Welcome to Goldleaf Dining, where tradition meets taste. Our journey began with a simple vision: to bring the authentic flavors of India to your table, prepared with love and the finest ingredients.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Every dish we serve tells a story of heritage, passion, and culinary excellence. From the aromatic spices to the time-honored cooking techniques, we ensure that each meal is a celebration of Indian culture and hospitality.
                        </p>
                    </div>
                </div>
            </div>

            {/* Values Section - Premium Design */}
            <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-24 overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <h3 className="text-yellow-500 uppercase tracking-[0.3em] text-sm font-semibold mb-4">What We Stand For</h3>
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif">Our Values</h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto"></div>
                    </div>

                    {/* Values Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* Quality Card */}
                        <div className="group relative h-96">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                            <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-yellow-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/20 overflow-hidden">
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=80"
                                        alt="Quality Ingredients"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"></div>
                                </div>

                                {/* Content */}
                                <div className="relative h-full flex flex-col justify-end p-10">
                                    <h3 className="text-3xl font-bold text-white mb-4 text-center font-serif">Quality</h3>
                                    <div className="w-16 h-1 bg-yellow-500 mx-auto mb-6"></div>
                                    <p className="text-gray-200 text-center leading-relaxed">
                                        We use only the freshest ingredients and authentic spices to ensure every dish meets our high standards of excellence.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Passion Card */}
                        <div className="group relative h-96">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                            <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-yellow-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/20 overflow-hidden">
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src="https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=800&auto=format&fit=crop&q=80"
                                        alt="Cooking with Passion"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"></div>
                                </div>

                                {/* Content */}
                                <div className="relative h-full flex flex-col justify-end p-10">
                                    <h3 className="text-3xl font-bold text-white mb-4 text-center font-serif">Passion</h3>
                                    <div className="w-16 h-1 bg-yellow-500 mx-auto mb-6"></div>
                                    <p className="text-gray-200 text-center leading-relaxed">
                                        Our chefs pour their heart into every recipe, bringing you flavors that remind you of home and create lasting memories.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Community Card */}
                        <div className="group relative h-96">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                            <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-yellow-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/20 overflow-hidden">
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop&q=80"
                                        alt="Community Dining"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"></div>
                                </div>

                                {/* Content */}
                                <div className="relative h-full flex flex-col justify-end p-10">
                                    <h3 className="text-3xl font-bold text-white mb-4 text-center font-serif">Community</h3>
                                    <div className="w-16 h-1 bg-yellow-500 mx-auto mb-6"></div>
                                    <p className="text-gray-200 text-center leading-relaxed">
                                        We believe in creating a warm, welcoming space where families and friends can gather and create cherished memories.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chef Section */}
            <div className="container mx-auto px-6 py-20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Chef"
                                className="rounded-lg shadow-2xl"
                            />
                        </div>
                        <div>
                            <h2 className="text-6xl font-bold text-gray-900 mb-6">Meet Our Chef</h2>
                            <div className="w-24 h-1 bg-yellow-500 mb-8"></div>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Chef Rajesh Kumar brings over 20 years of culinary expertise, having trained in the finest kitchens across India. His passion for authentic Indian cuisine and innovative cooking techniques has earned him recognition throughout the culinary world.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                "Cooking is not just about following recipes—it's about understanding the soul of each ingredient and bringing out its best flavor," says Chef Rajesh.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
