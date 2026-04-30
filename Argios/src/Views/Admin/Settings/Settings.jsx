import { Contact, Image, Key, LayoutDashboard, MapPin, Settings2, Share2 } from 'lucide-react';
import React from 'react'

export default function Settings() {
    const AdminServices = [
            { name: "Manage CMS", key: "Content Management", icon: <LayoutDashboard size={24} /> },
            { name: "Banners", key: "Manage Promotional Banners", icon: <Image size={24} /> },
            { name: "Categorie & Attributes", key: "Categories, Sizes, Color", icon: <Settings2 size={24} /> },
            { name: "Service Areas", key: "Manage Delivery Locations", icon: <MapPin size={24} /> },
            { name: "Key & Security", key: "Key & security settings", icon: <Key size={24} /> },
            { name: "Social Media Links", key: "Manage Social Accounts", icon: <Share2 size={24} /> },
            { name: "Contact Information", key: "Manage Contact Information", icon: <Contact size={24} /> }
        ];
    return (
        <>
                <main className="px-8 py-6 bg-[#F7F2EC] border-l-2 border-[#5F0D24]">
                    <div className="mb-8 text-left">
                        <h1 className="text-[24px] font-semibold text-black">Settings</h1>
                        <p className="text-[14px] text-gray-500">
                            Manage your store's configuration, API keys, and business details.
                        </p>
                    </div>

                    {/* Grid Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                        {AdminServices.map((item, index) => (
                            <div 
                                key={index} 
                                className="bg-white rounded-[25px] p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-gray-200">
                                {/* Icon Wrapper */}
                                <div className="w-14 h-14 bg-[#F9F1ED] rounded-xl flex items-center justify-center text-[#5F0D24] mb-4">
                                    {item.icon}
                                </div>

                                <h2 className="text-[16px] font-semibold text-gray-900 pt-6">{item.name}</h2>
                                
                                {/* Divider Line */}
                                <div className="w-full h-px bg-gray-100 my-1"></div>
                                
                                <p className="text-[12px] text-gray-400 font-medium">
                                    {item.key}
                                </p>
                            </div>
                        ))}
                    </div>
                </main>
            
        </>
    );
}
