import React from 'react';
import { Link } from 'react-router-dom';

const dishes = [
    {
        id: 1,
        name: "Spring Rolls",
        description: "Crispy vegetable spring rolls served with sweet chili sauce.",
        price: "₹120",
        image: "https://media.istockphoto.com/id/857271118/photo/spring-rolls-with-chili-sauce.webp?a=1&b=1&s=612x612&w=0&k=20&c=lPnPlL1YuyqOvTCSmoeFFFoRKy45DYGmsjV73CL0hCA="
    },
    {
        id: 2,
        name: "Pav Bhaji",
        description: "Spicy vegetable mash served with buttered toasted buns.",
        price: "₹140",
        image: "https://media.istockphoto.com/id/1459252395/photo/pav-bhaji-is-a-indian-traditional-popular-street-fast-food.jpg?s=612x612&w=0&k=20&c=kSalVot27ndBt9TiXT003cbs03xYjrQzGEpqnTvRE9I="
    },
    {
        id: 3,
        name: "French Fries",
        description: "Golden crispy fries seasoned with sea salt.",
        price: "₹80",
        image: "https://images.unsplash.com/photo-1630431341973-02e1b662ec35?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

const FeaturedMenu = () => {
    return (
        <section id="menu" className="py-20 bg-white relative" data-scroll-section>
            {/* Decorative background element */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 -left-24 w-64 h-64 bg-yellow-500 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h3 className="text-yellow-600 uppercase tracking-widest text-2xl font-semibold mb-2">Our Specialties</h3>
                    <h2 className="text-5xl font-light text-gray-900">Featured Menu</h2>
                    <div className="w-48 h-1 bg-yellow-500 mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {dishes.map((dish) => (
                        <div
                            key={dish.id}
                            className="group cursor-pointer bg-gray-50 p-4 rounded-md hover:-translate-y-2 transition-transform duration-500 shadow-sm hover:shadow-lg"
                        >
                            <div className="relative overflow-hidden h-64 mb-6 w-full">
                                <img
                                    src={dish.image}
                                    alt={dish.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-lg"
                                />
                            </div>
                            <div className="text-center px-4 pb-4">
                                <h4 className="text-2xl font-medium text-gray-900 mb-2 font-serif">{dish.name}</h4>
                                <p className="text-gray-900 text-md mb-4 font-light leading-relaxed">{dish.description}</p>
                                <span className="text-yellow-600 font-serif italic text-2xl">{dish.price}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Link to="/menu" className="px-10 py-3 border border-gray-900 text-gray-900 uppercase tracking-widest text-xl hover:bg-gray-900 hover:text-white transition-all duration-300 inline-block">
                        View Full Menu
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedMenu;
