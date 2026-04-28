import React from 'react';
import { 
    LayoutDashboard, HandPlatter, PackageSearch, ShoppingCart, SquareUserRound, Users } from 'lucide-react'; 

export default function Sidebar() {
    const navItemClasses = "flex items-center gap-4 p-4 bg-[#F2E4D8] text-[20px] text-[#000000] hover:bg-[#E5D1C0] transition-all duration-200 cursor-pointer font-medium rounded-lg";

    return (
        <section className='w-[300px] h-screen bg-[#F7F2EC]'>
            <main className="h-full  shrink-0 ">
                <div className='flex flex-col'>
                    
                    {/* Logo Section */}
                    <div className='flex flex-col p-6 items-center border-b border-[#F2E4D8]'>
                        <img src="Images/Agrios_logo.png" alt="Logo" className='mb-2 w-32' />
                        <p className='text-[10px] text-[#5F0D24] bg-[#F2E4D8] px-3 py-1 rounded-full font-bold tracking-widest'>
                            ADMIN
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <nav className='mt-6 px-4'>
                        <ul className="flex flex-col gap-3">
                            <li className={navItemClasses}>
                                <LayoutDashboard size={22} /> <span>Dashboard</span>
                            </li>
                            <li className={navItemClasses}>
                                <HandPlatter size={22} /> <span>Services</span>
                            </li>
                            <li className={navItemClasses}>
                                <PackageSearch size={22} /> <span>Project</span>
                            </li>
                            <li className={navItemClasses}>
                                <ShoppingCart size={22} /> <span>Shop</span>
                            </li>
                            <li className={navItemClasses}>
                                <SquareUserRound size={22} /> <span>Contact</span>
                            </li>
                            <li className={navItemClasses}>
                                <Users size={22} /> <span>Customers</span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </main>
        </section>
    );
}