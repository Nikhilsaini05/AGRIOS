import logo from '/Images/Agrios_logo.png';
import facebook from '/Images/facebook-icon.png';
import insta from '/Images/instagram-icon.png';
import pics from '/Images/pics-icon.png';
import twitter from '/Images/twitter-icon.png';
import nav from '/Images/navbar-2.png';
import { Menu, Search } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router';
import { RouteServices } from '../../Services/routes_services';
function Navbar() {

    const navigate = useNavigate();
    return (
        <>
            <section className="w-screen fixed top-0 z-1000">

                <nav className="w-full flex flex-col md:flex-row items-center justify-center bg-[#FCFCFC] py-4 gap-38 px-8 lg:gap-50 ">
                    <div className="shrink-0">
                        <img src={logo} alt="Logo" className="h-auto w-auto" />
                    </div>


                    <div className="hidden md:flex flex-col  md:flex-row items-center gap-8 md:gap-6">

                        {/* Social Icons */}
                        <div className="hidden sm:flex flex-row gap-2 items-center pb-4 md:border-b-0 md:pb-0 cursor-pointer">
                            <img src={twitter} />
                            <img src={facebook} />
                            <img src={pics} />
                            <img src={insta} />
                        </div>

                        {/* Contact Info */}
                        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-3 text-center md:text-sm ">

                            <div className="flex flex-col md:text-[16px]  ">
                                <h3 className="text-[#878680]  text-[12px] uppercase tracking-wide">Call anytime</h3>
                                <p className="font-bold text-[14px] ">+ 98 (000) - 9630</p>
                            </div>

                            <div className="flex flex-col md:text-[16px] border-l border-gray-300 pl-10 pr-10">
                                <h3 className="text-[#878680] text-[12px]  uppercase tracking-wide">Send email</h3>
                                <p className="font-bold text-[14px]  ">ambed@argios.com</p>
                            </div>

                            <div className="flex flex-col md:text-[16px] border-l border-gray-300 pl-10">
                                <h3 className="text-[#878680]  text-[12px] uppercase tracking-wide">380 St kilda Road</h3>
                                <p className="font-bold text-[14px]  ">Melbourne, Australia</p>
                            </div>
                        </div>

                    </div>
                        <button className='hidden md:block lg:hidden text-[24px] w-100 font-semibold bg-[#F7C35F] px-2 py-2 border border-[#878680] rounded-2xl'> Contact Us</button>
                </nav>
                {/* 2-nav  */}
                <div className='relative flex justify-center'>
                    <img className='w-full h-14' src={nav} alt="" />
                    <div className='max-w-7xl flex justify-between flex-row absolute px-5 items-center md:px-30  top-0 w-full z-50'>
                        <div className='hidden md:flex justify-center items-center'>
                            <ul className='flex flex-row  gap-14 pt-1.5 top-0 text-[#878680] text-[16px]'>
                                <li onClick={()=> navigate(RouteServices.home)}className='hover:text-[#1F1E17] flex items-center gap-2 flex-1 cursor-pointer'>Home <ChevronDown size={16}/></li>
                                <li onClick={()=> navigate(RouteServices.about)} className='hover:text-[#1F1E17] cursor-pointer'> About</li>
                                <li onClick={()=> navigate(RouteServices.service)} className='hover:text-[#1F1E17] flex items-center gap-2 flex-1 cursor-pointer'>Services <ChevronDown size={16}/></li>
                                <li onClick={()=> navigate(RouteServices.project)} className='hidden lg:hover:text-[#1F1E17] lg:flex items-center gap-2 flex-1 cursor-pointer' >project <ChevronDown size={16}/></li>
                                <li onClick={()=> navigate(RouteServices.news)} className='hidden lg:hover:text-[#1F1E17] lg:flex items-center gap-2 flex-1 cursor-pointer'>news <ChevronDown size={16}/></li>
                                <li onClick={()=> navigate(RouteServices.shop)} className='hidden lg:hover:text-[#1F1E17] lg:flex items-center gap-2 flex-1 cursor-pointer '>shop <ChevronDown size={16}/></li>
                                <li onClick={()=> navigate(RouteServices.contact)} className='hidden lg:hover:text-[#1F1E17] lg:flex cursor-pointer'>Contact</li>
                                <li className='lg:hidden'>More </li>
                            </ul>
                        </div>
                        <div className='md:hidden'>
                            <Menu size={24}/>
                        </div>
                        <div className='flex pl-20 gap-6 lg:gap-8 '>
                            <span className='text-[#878680] pt-1.5'>|</span>
                            <img src="Images/search.png" alt="" className=' pt-2' />
                            <img src="Images/shop.png" alt=""  className=' pt-2'/>
                        </div>
                    </div>

                    <div className=''></div>
                </div>

            </section>
        </>
    )
}

export default Navbar;



const MyRoutes = {
    home : "/"
}