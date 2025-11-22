import React from 'react';

const dishes = [
    {
        id: 1,
        name: "Butter Chicken",
        image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        name: "Biryani",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        name: "Samosa",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 4,
        name: "Paneer Tikka",
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 5,
        name: "Naan",
        image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 6,
        name: "Dal Makhani",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 7,
        name: "Gulab Jamun",
        image: "https://media.istockphoto.com/id/163064596/photo/gulab-jamun.webp?a=1&b=1&s=612x612&w=0&k=20&c=F_5_AgCdrsecO13W-wiuCZAwYZPBpN3UETTyYtQQlLM="
    },
    {
        id: 8,
        name: "Palak Paneer",
        image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
];

const DishesMarquee = () => {
    // Duplicate the dishes array for seamless loop
    const duplicatedDishes = [...dishes, ...dishes, ...dishes]; // Triple for better loop

    return (
        <div className="py-12 bg-white" data-scroll-section>
            <div className="mb-8 text-center">
                <h3 className="text-yellow-600 uppercase tracking-widest text-3xl font-semibold">Explore Our Flavors</h3>
            </div>

            {/* Marquee container with proper overflow */}
            <div className="relative w-full overflow-x-hidden">
                <div className="flex animate-marquee">
                    {duplicatedDishes.map((dish, index) => (
                        <div
                            key={`${dish.id}-${index}`}
                            className="flex-shrink-0 mx-6 group text-center"
                        >
                            <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-lg mb-4">
                                <img
                                    src={dish.image}
                                    alt={dish.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <p className="text-gray-800 font-semibold text-base">{dish.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DishesMarquee;
