import React, { useState } from 'react';

const menuItems = [
    {
        category: "Starters",
        items: [
            { name: "Samosa", description: "Crispy pastry filled with spiced potatoes and peas.", price: "₹49", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
            { name: "Paneer Tikka", description: "Marinated cottage cheese cubes grilled to perfection.", price: "₹100", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
            { name: "Chicken 65", description: "Spicy, deep-fried chicken dish originating from Chennai.", price: "₹120 ", image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
            { name: "Veg Spring Rolls", description: "Crispy rolls loaded with sautéed vegetables.", price: "₹80", image: "https://images.unsplash.com/photo-1669340781012-ae89fbac9fc3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U3ByaW5nJTIwUm9sbHN8ZW58MHx8MHx8fDA%3D" },
            { name: "Tandoori Chicken", description: "Char-grilled chicken marinated in yogurt and spices.", price: "₹140", image: "https://images.unsplash.com/photo-1727280376746-b89107a5b0df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGFuZG9vcmklMjBDaGlja2VufGVufDB8fDB8fHww" },
            { name: "Aloo Tikki", description: "Golden fried potato patties topped with chutney.", price: "₹70", image: "https://media.istockphoto.com/id/1204866788/photo/aloo-tikki%C2%A0is-a-popular-snack-across-india-made-using-mashed-potatoes-close-up-in-a-plate.webp?a=1&b=1&s=612x612&w=0&k=20&c=OVznHR_QxXooof487H3u2CzZgQHsO0elbp0CYlCQvNo=" },
            { name: "Fish Amritsari", description: "Deep-fried spiced fish fritters from Punjab.", price: "₹150", image: "https://images.unsplash.com/photo-1723066217456-cf0b10ceda2b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Noodles", description: "Hot spice and sour noodles with vegetables.", price: "₹60", image: "https://media.istockphoto.com/id/1497707536/photo/noodles-and-veg-manchurian-in-a-bowl-food-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=m1kW1SgUR13Uc4G0f0k8uMalGjGEUgUDo9Ckw7P0v94=" },
            { name: "Veg Manchurian", description: "Crispy veg balls tossed in Indo-Chinese sauce.", price: "₹110", image: "https://media.istockphoto.com/id/1208081427/photo/veg-manchurian-very-popular-chinese-snack-popular-in-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=kl_ow-0XvtnBoxUVtmeMOukIxZl0GxUsrq1_ROrUTak=" }
        ]
    },
    {
        category: "Mains",
        items: [
            { name: "Butter Chicken", description: "Tender chicken cooked in a rich, creamy tomato sauce.", price: "₹160", image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
            { name: "Palak Paneer", description: "Cottage cheese cubes in a smooth spinach gravy.", price: "₹140", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
            { name: "Chicken Biryani", description: "Aromatic basmati rice cooked with spiced chicken and herbs.", price: "₹180", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
            { name: "Dal Makhani", description: "Creamy black lentils slow-cooked with butter and spices.", price: "₹130", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
            { name: "Paneer Butter Masala", description: "Paneer cubes simmered in a buttery tomato gravy.", price: "₹150", image: "https://images.unsplash.com/photo-1708793873401-e8c6c153b76a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGFuZWVyJTIwQnV0dGVyJTIwTWFzYWxhfGVufDB8fDB8fHww" },
            { name: "Chole Bhature", description: "Spicy chickpea curry served with fried fluffy bread.", price: "₹120", image: "https://media.istockphoto.com/id/1328524212/photo/katlambe-chole.webp?a=1&b=1&s=612x612&w=0&k=20&c=TAIktSQ7PNsrwBuf4UBWDC7HNxbHvRdX7R0R0mVqcdo=" },
            { name: "Mutton Rogan Josh", description: "Slow-cooked Kashmiri lamb curry with rich spices.", price: "₹220", image: "https://media.istockphoto.com/id/2185257273/photo/indian-curry-tikka-masala-chicken-lamb-mutton-rogan-josh-with-rice-and-naan-bread-dark.webp?a=1&b=1&s=612x612&w=0&k=20&c=UUcFWotW2prUYu4oHQpsWPUcjqqEcNf_OIRKEnRHWTw=" },
            { name: "Veg Fried Rice", description: "Indo-Chinese style stir-fried rice with mixed veggies.", price: "₹110", image: "https://media.istockphoto.com/id/1497707536/photo/noodles-and-veg-manchurian-in-a-bowl-food-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=m1kW1SgUR13Uc4G0f0k8uMalGjGEUgUDo9Ckw7P0v94=" },
            { name: "Prawn Curry", description: "Juicy prawns cooked in a coconut and chili based curry.", price: "₹260", image: "https://plus.unsplash.com/premium_photo-1669150849060-1d6a6dabad14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UHJhd24lMjBDdXJyeXxlbnwwfHwwfHx8MA%3D%3D" }
        ]
    },
    {
        category: "Breads & Rice",
        items: [
            { name: "Garlic Naan", description: "Soft, leavened flatbread topped with garlic and butter.", price: "₹40", image: "https://images.unsplash.com/photo-1697155406014-04dc649b0953?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Jeera Rice", description: "Basmati rice flavored with cumin seeds.", price: "₹50", image: "https://plus.unsplash.com/premium_photo-1701011134313-fd5c91ea051e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amVlcmElMjByaWNlfGVufDB8fDB8fHww" }
        ]
    },
    {
        category: "Desserts",
        items: [
            { name: "Gulab Jamun", description: "Deep-fried milk solids soaked in sugar syrup.", price: "₹60", image: "https://media.istockphoto.com/id/163064596/photo/gulab-jamun.webp?a=1&b=1&s=612x612&w=0&k=20&c=F_5_AgCdrsecO13W-wiuCZAwYZPBpN3UETTyYtQQlLM=" },
            { name: "Rasmalai", description: "Soft paneer balls soaked in sweetened, thickened milk.", price: "₹70", image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" }
        ]
    }
];

const Menu = () => {
    const [activeTab, setActiveTab] = useState('Starters');
    const [searchQuery, setSearchQuery] = useState('');

    const getFilteredItems = () => {
        if (!searchQuery.trim()) {
            return activeCategory ? activeCategory.items : [];
        }

        const allItems = menuItems.flatMap(category =>
            category.items.map(item => ({ ...item, category: category.category }))
        );

        return allItems.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    const activeCategory = menuItems.find(section => section.category === activeTab);
    const displayItems = getFilteredItems();

    return (
        <div className="pt-1 bg-gray-50 min-h-screen pb-10" data-scroll-section>
            <div className="relative mb-16 h-80">
                <div className="absolute inset-0 z-0 rounded-md">
                    <img
                        src="https://imgs.search.brave.com/kCSuD1NDcl9gUyxlfqM7Eq1fd3a3-oRr7Og1Re6aNJ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMTc0/MzY5NjIyL3N0b2Nr/LXBob3RvLW1lbnUt/YW5kLXRlYS1zZXQ"
                        alt="Menu Background"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className="container mx-auto px-6 mb-8">
                <div className="max-w-2xl mx-auto">
                    <input
                        type="text"
                        placeholder="Search for dishes..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-yellow-500 focus:outline-none text-gray-700 shadow-md transition-all duration-300"
                    />
                </div>
            </div>

            {!searchQuery && (
                <div className="container mx-auto px-6 mb-12">
                    <div className="flex justify-center gap-4 flex-wrap">
                        {menuItems.map((section) => (
                            <button
                                key={section.category}
                                onClick={() => setActiveTab(section.category)}
                                className={`px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-sm transition-all duration-300 ${activeTab === section.category
                                    ? 'bg-yellow-500 text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                                    }`}
                            >
                                {section.category}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto">
                    {displayItems.length > 0 ? (
                        <div className="animate-fade-in">
                            {!searchQuery && (
                                <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                                    <span className="border-b-4 border-yellow-500 pb-2">{activeCategory?.category}</span>
                                </h3>
                            )}
                            {searchQuery && (
                                <h3 className="text-2xl font-semibold text-gray-700 mb-8 text-center">
                                    Found {displayItems.length} dish{displayItems.length !== 1 ? 'es' : ''} matching "{searchQuery}"
                                </h3>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {displayItems.map((item) => (
                                    <div key={item.name} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                                        <div className="h-56 overflow-hidden">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-3">
                                                <div>
                                                    <h4 className="text-xl font-bold text-gray-900">{item.name}</h4>
                                                    {searchQuery && item.category && (
                                                        <span className="text-xs text-yellow-600 font-semibold">{item.category}</span>
                                                    )}
                                                </div>
                                                <span className="text-yellow-600 font-bold text-xl">{item.price}</span>
                                            </div>
                                            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-xl">No dishes found matching "{searchQuery}"</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Menu;
