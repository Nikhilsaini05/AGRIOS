import React from 'react'

export default function Admin_navbar() {
    return (<>
<section className='w-full h-20 bg-[#F7F2EC] px-8 flex items-center border-b border-[#F2E4D8] border-l-[2px] border-l-[#5F0D24]'>            <main className='w-full flex justify-between items-center top-0 '>
                
                {/* Left Side: Search Bar */}
                <div className='w-1/3'>
                    <input 
                        type="text"
                        placeholder='Search Activities, orders, products'
                        className='w-full py-3 px-6 text-[14px] text-[#7D7D7D] bg-white border border-[#BCBCBC] rounded-full outline-none focus:ring-1 focus:ring-[#5F0D24]'
                    />
                </div>

                {/* Right Side: Profile Info */}
                <div className='flex items-center gap-4'>
                    <div className='text-right'>
                        <h1 className='text-[16px] font-bold text-black leading-tight'>Admin Panel</h1>
                        <p className='text-[12px] font-semibold text-[#5F0D24]'>SUPER ADMIN</p>
                    </div>
                    
                    {/* Profile Image Placeholder */}
                    <div className='w-12 h-12 rounded-full border-2 border-[#5F0D24] overflow-hidden bg-gray-200'>
                        <img 
                            src="Images/adminImages/profilePic.jpg" 
                            alt="Admin Profile" 
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>

            </main>
        </section>
        </>
    )
}