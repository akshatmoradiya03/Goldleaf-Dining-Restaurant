import React, { useState } from 'react';

const Reservations = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Reservation submitted:', formData);
        alert('Thank you for your reservation! We will contact you shortly.');
    };

    return (
        <div className="min-h-screen relative overflow-hidden" data-scroll-section>
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Restaurant Interior"
                    className="w-full h-full object-cover"
                />
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/95 to-black/90"></div>
            </div>

            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20 z-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Decorative pattern overlay */}
            <div className="absolute inset-0 opacity-5 z-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.03) 10px, rgba(255,255,255,.03) 20px)' }}></div>

            <div className="container mx-auto px-6 relative z-20 text-white pt-32 pb-24">
                <div className="text-center mb-20">
                    <h3 className="text-yellow-500 uppercase tracking-[0.3em] text-sm font-semibold mb-4 animate-fade-in">Reserve Your Experience</h3>
                    <h1 className="text-6xl font-bold mb-6 font-serif bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">Make a Reservation</h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto"></div>
                    <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">Experience culinary excellence in an atmosphere of refined elegance</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
                    {/* Left Side - Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/20">
                            <h3 className="text-3xl font-bold mb-8 font-serif">Contact Information</h3>

                            <div className="space-y-8">
                                <div className="flex items-start group">
                                    <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2 text-yellow-400">Address</h4>
                                        <p className="text-gray-300 leading-relaxed">123 Culinary Avenue<br />New York, NY 10001</p>
                                    </div>
                                </div>

                                <div className="flex items-start group">
                                    <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2 text-yellow-400">Phone</h4>
                                        <p className="text-gray-300">(555) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex items-start group">
                                    <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2 text-yellow-400">Opening Hours</h4>
                                        <p className="text-gray-300 leading-relaxed">Mon - Fri: 11:00 AM - 10:00 PM<br />Sat - Sun: 10:00 AM - 11:00 PM</p>
                                    </div>
                                </div>

                                <div className="flex items-start group">
                                    <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2 text-yellow-400">Email</h4>
                                        <p className="text-gray-300">info@pinerestaurant.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Premium Reservation Form */}
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-10 rounded-2xl border border-white/20 shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500">
                        <h3 className="text-2xl font-bold mb-8 text-center font-serif">Reserve Your Table</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="group">
                                <label htmlFor="name" className="block text-sm font-semibold mb-3 uppercase tracking-wider text-yellow-400">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 bg-white/10 border-2 border-white/20 rounded-xl focus:outline-none focus:border-yellow-500 focus:bg-white/15 text-white placeholder-gray-400 transition-all duration-300 group-hover:border-white/30"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="group">
                                <label htmlFor="email" className="block text-sm font-semibold mb-3 uppercase tracking-wider text-yellow-400">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 bg-white/10 border-2 border-white/20 rounded-xl focus:outline-none focus:border-yellow-500 focus:bg-white/15 text-white placeholder-gray-400 transition-all duration-300 group-hover:border-white/30"
                                    placeholder="xyz@example.com"
                                />
                            </div>

                            <div className="group">
                                <label htmlFor="phone" className="block text-sm font-semibold mb-3 uppercase tracking-wider text-yellow-400">Phone Number *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 bg-white/10 border-2 border-white/20 rounded-xl focus:outline-none focus:border-yellow-500 focus:bg-white/15 text-white placeholder-gray-400 transition-all duration-300 group-hover:border-white/30"
                                    placeholder="+91 xxxxxxxxxx"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-5">
                                <div className="group">
                                    <label htmlFor="date" className="block text-sm font-semibold mb-3 uppercase tracking-wider text-yellow-400">Date *</label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 bg-white/10 border-2 border-white/20 rounded-xl focus:outline-none focus:border-yellow-500 focus:bg-white/15 text-white transition-all duration-300 group-hover:border-white/30"
                                    />
                                </div>

                                <div className="group">
                                    <label htmlFor="time" className="block text-sm font-semibold mb-3 uppercase tracking-wider text-yellow-400">Time *</label>
                                    <select
                                        id="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 bg-white/10 border-2 border-white/20 rounded-xl focus:outline-none focus:border-yellow-500 focus:bg-white/15 text-white transition-all duration-300 group-hover:border-white/30 cursor-pointer"
                                    >
                                        <option value="" className="text-gray-900 bg-white">Select Time</option>
                                        <option value="11:00 AM" className="text-gray-900 bg-white">11:00 AM</option>
                                        <option value="11:30 AM" className="text-gray-900 bg-white">11:30 AM</option>
                                        <option value="12:00 PM" className="text-gray-900 bg-white">12:00 PM</option>
                                        <option value="12:30 PM" className="text-gray-900 bg-white">12:30 PM</option>
                                        <option value="1:00 PM" className="text-gray-900 bg-white">1:00 PM</option>
                                        <option value="1:30 PM" className="text-gray-900 bg-white">1:30 PM</option>
                                        <option value="2:00 PM" className="text-gray-900 bg-white">2:00 PM</option>
                                        <option value="2:30 PM" className="text-gray-900 bg-white">2:30 PM</option>
                                        <option value="3:00 PM" className="text-gray-900 bg-white">3:00 PM</option>
                                        <option value="3:30 PM" className="text-gray-900 bg-white">3:30 PM</option>
                                        <option value="4:00 PM" className="text-gray-900 bg-white">4:00 PM</option>
                                        <option value="4:30 PM" className="text-gray-900 bg-white">4:30 PM</option>
                                        <option value="5:00 PM" className="text-gray-900 bg-white">5:00 PM</option>
                                        <option value="5:30 PM" className="text-gray-900 bg-white">5:30 PM</option>
                                        <option value="6:00 PM" className="text-gray-900 bg-white">6:00 PM</option>
                                        <option value="6:30 PM" className="text-gray-900 bg-white">6:30 PM</option>
                                        <option value="7:00 PM" className="text-gray-900 bg-white">7:00 PM</option>
                                        <option value="7:30 PM" className="text-gray-900 bg-white">7:30 PM</option>
                                        <option value="8:00 PM" className="text-gray-900 bg-white">8:00 PM</option>
                                        <option value="8:30 PM" className="text-gray-900 bg-white">8:30 PM</option>
                                        <option value="9:00 PM" className="text-gray-900 bg-white">9:00 PM</option>
                                        <option value="9:30 PM" className="text-gray-900 bg-white">9:30 PM</option>
                                        <option value="10:00 PM" className="text-gray-900 bg-white">10:00 PM</option>
                                    </select>
                                </div>
                            </div>

                            <div className="group">
                                <label htmlFor="guests" className="block text-sm font-semibold mb-3 uppercase tracking-wider text-yellow-400">Number of Guests *</label>
                                <select
                                    id="guests"
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 bg-white/10 border-2 border-white/20 rounded-xl focus:outline-none focus:border-yellow-500 focus:bg-white/15 text-white transition-all duration-300 group-hover:border-white/30 cursor-pointer"
                                >
                                    <option value="1" className="text-gray-900 bg-white">1 Guest</option>
                                    <option value="2" className="text-gray-900 bg-white">2 Guests</option>
                                    <option value="3" className="text-gray-900 bg-white">3 Guests</option>
                                    <option value="4" className="text-gray-900 bg-white">4 Guests</option>
                                    <option value="5" className="text-gray-900 bg-white">5 Guests</option>
                                    <option value="6" className="text-gray-900 bg-white">6+ Guests</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 uppercase tracking-widest text-sm hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 font-bold rounded-xl shadow-lg hover:shadow-2xl hover:shadow-yellow-500/50 transform hover:-translate-y-1"
                            >
                                Confirm Reservation
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reservations;
