import React from 'react';
import { Search, ChevronRight, Star } from 'lucide-react'; 

const products = [
    { id: 1, name: 'Apples', price: 50.00, img: '/Images/Apples.jpg', rating: 5 },
    { id: 2, name: 'Bananas', price: 20.00, img: '  /Images/Bananas.jpg', rating: 5 },
    { id: 3, name: 'Carrot', price: 50.00, img: '/Images/Carrot.jpg', rating: 5 },
    { id: 4, name: 'Garlic', price: 20.00, img: '/Images/Garlic.jpg', rating: 5 },
    { id: 5, name: 'Grapes', price: 100.00, img: '/Images/Grapes.jpg', rating: 5 },
    { id: 6, name: 'Lettuce', price: 30.00, img: '/Images/Lettuce.jpg', rating: 5 },
    { id: 7, name: 'Onions', price: 20.00, img: '/Images/Onions.jpg', rating: 5 },
    { id: 8, name: 'Potatoes', price: 30.00, img: '/Images/Potatos.jpg', rating: 5 },
    { id: 9, name: 'Red Grapes', price: 100.00, img: '/Images/RedGrapes.jpg', rating: 5 },
];

export default function ShopHome() {
    return (
        <section className="w-full bg-white py-10 px-4 md:px-10">
            <main className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
                
                {/* --- SIDEBAR --- */}
                <aside className="w-full md:w-1/4 space-y-8">
                    {/* Search Bar */}
                    <div className="bg-[#f2c050] p-1 md:p-2 lg:p-4 rounded-md">
                        <div className="relative">
                            <input 
                                type="text" 
                                placeholder="Search products..." 
                                className="w-full  p-3 bg-transparent border-none placeholder-white text-white focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Price Filter */}
                    <div className="hidden md:block border border-gray-100 p-6 rounded-lg shadow-sm">
                        <h3 className="font-bold text-lg mb-4 text-gray-800 border-b pb-2">Price</h3>
                        <input type="range" className="w-full accent-[#56b35a]" min="20" max="100" />
                        <div className="flex justify-between items-center mt-4">
                            <span className="text-gray-400 text-sm">$20 - $100</span>
                            <button className="bg-[#56b35a] text-white px-4 py-1 rounded text-sm font-semibold">Apply</button>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="hidden md:block border border-gray-100 p-6 rounded-lg shadow-sm">
                        <h3 className="font-bold text-lg mb-4 text-gray-800 border-b pb-2">Categories</h3>
                        <ul className="space-y-4">
                            {['Agriculture', 'Farming', 'Fresh Vegetables', 'Harvest', 'Organic Food'].map((cat) => (
                                <li key={cat} className="flex justify-between items-center text-gray-500 hover:text-[#56b35a] cursor-pointer group">
                                    <span className="text-sm font-medium">{cat}</span>
                                    <ChevronRight size={16} className="text-gray-300 group-hover:text-[#56b35a]" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* --- MAIN CONTENT --- */}
                <section className="w-full md:w-3/4">
                    <div className="flex justify-between items-center mb-8">
                        <p className="text-gray-500 text-sm">Showing 1–9 of 10 results</p>
                        <select className="border border-gray-200 rounded-md p-2 text-sm text-gray-500 outline-none">
                            <option>Default sorting</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((item) => (
                            <div key={item.id} className="group cursor-pointer">
                                <div className=" rounded-xl overflow-hidden aspect-square flex items-center justify-center  mb-4">
                                    <img 
                                        src={item.img} 
                                        alt={item.name} 
                                        className="w-full h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105" 
                                    />
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="font-bold text-gray-800 text-[22px] px-4">{item.name}</h4>
                                        <p className="text-[#56b35a] font-bold mt-1 ">${item.price.toFixed(2)}</p>
                                    </div>
                                    <Star size={24} className="fill-[#f2c050] text-[#f2c050] mr-4" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center items-center mt-12 gap-2">
                        <button className="w-10 h-10 bg-[#56b35a] text-white rounded-md font-bold">1</button>
                        <button className="w-10 h-10 border border-gray-200 text-gray-500 rounded-md hover:bg-gray-50">2</button>
                        <button className="w-10 h-10 border border-gray-200 text-gray-500 rounded-md hover:bg-gray-50 flex items-center justify-center">
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </section>
                
            </main>
        </section>
    );
}