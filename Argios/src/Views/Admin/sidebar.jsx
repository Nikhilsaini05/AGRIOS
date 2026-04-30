import React from 'react';
import { LayoutDashboard, HandPlatter, PackageSearch, ShoppingCart, SquareUserRound, Settings } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router';
import { RouteServices } from '../../Services/routes_services';

export default function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();

    const baseClasses = "flex items-center gap-4 p-4 text-[16px] transition-all duration-200 cursor-pointer font-medium rounded-lg";
    
    const getNavStyle = (path) => {
        const isActive = location.pathname.includes(path);
        
        return isActive 
            ? `${baseClasses} bg-[#5F0D24] text-white shadow-md` 
            : `${baseClasses} bg-[#F2E4D8] text-[#000000] hover:bg-[#E5D1C0]`; 
    };

    return (
        <section className='w-75 h-screen bg-[#F7F2EC] border-r border-[#F2E4D8]'>
            <main className="h-full shrink-0">
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
                            {/* Dashboard */}
                            <li className={getNavStyle(RouteServices.adminDashboard)} 
                                onClick={() => navigate(RouteServices.adminDashboard)}>
                                <LayoutDashboard size={22} /> <span>Dashboard</span>
                            </li>

                            {/* Services */}
                            <li className={getNavStyle(RouteServices.adminServies)} 
                                onClick={() => navigate(RouteServices.adminServies)}>
                                <HandPlatter size={22} /> <span>Services</span>
                            </li>

                            {/* Project */}
                            <li className={getNavStyle('/project')}>
                                <PackageSearch size={22} /> <span className='opacity-10'>Project</span>
                            </li>

                            {/* Shop */}
                            <li className={getNavStyle('/shop')}>
                                <ShoppingCart size={22} /> <span className='opacity-10'>Shop</span>
                            </li>

                            {/* Contact */}
                            <li className={getNavStyle('/contact')}>
                                <SquareUserRound size={22} /> <span className='opacity-10'>Contact</span>
                            </li>

                            {/* Customers */}
                            <li className={getNavStyle(RouteServices.settings)} 
                                onClick={() => navigate(RouteServices.settings)}>
                                <Settings size={22} /> <span>Customers</span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </main>
        </section>
    );
}