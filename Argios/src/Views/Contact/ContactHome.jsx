export default function ContactHome() {
    return (
        <section className="w-full h-auto flex justify-center items-center bg-white">
            <main className="w-full max-w-7xl py-16 px-4">
                
                {/* Info Cards Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <div className="bg-[#4BAF47] py-10 px-20 rounded-3xl text-left shadow-sm">
                        <h1 className="text-[28px] text-[#FFFFFFCC] font-serif italic mb-2">About</h1>
                        <p className="text-[16px] text-white leading-relaxed">
                            Lorem ipsum is simply free text 
                            used by copytyping refreshing. 
                            Neque porro est qui
                        </p>
                    </div>
                    
                    <div className="bg-[#C5CE38] py-10 px-20 rounded-3xl text-left shadow-sm">
                        <h1 className="text-[28px] text-[#FFFFFFCC] font-serif italic mb-2">Contact</h1>
                        <p className="text-[16px] text-white leading-relaxed">
                            +1- (246) 333-0079<br />
                            support@agrios.com<br />
                            Mon - Fri: 7:00 am - 6:00 pm
                        </p>
                    </div>

                    <div className="bg-[#EEC044] py-10 px-20 rounded-3xl text-left shadow-sm">
                        <h1 className="text-[28px] text-[#FFFFFFCC] font-serif italic mb-2">Address</h1>
                        <p className="text-[16px] text-white leading-relaxed">
                            66 Brooklyn Road Golden Street,<br />
                            New York, United States of America
                        </p>
                    </div>
                </div>

                {/* Map and Form */}
                <div className="flex flex-col lg:flex-row w-full bg-[#F9F8F4] rounded-3xl overflow-hidden shadow-sm border border-gray-100">
                    
                    {/* Left Side */}
                    <div className="w-full lg:w-1/2 h-125 lg:h-auto min-h-100">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.210451551829!2d-0.1213030233789456!3d51.50384141021469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2suk!4v1713170000000!5m2!1sen!2suk" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    {/* Right Side*/}
                    <div className="w-full lg:w-1/2 p-8 md:p-16 bg-[#F9F8F4] relative">
                        <div className="relative z-10 text-left">
                            <span className="text-[#EEC044] font-serif italic text-xl">Contact us</span>
                            <h2 className="text-[42px] font-extrabold text-[#1F1E17] mb-8">Write a Message</h2>

                            <form className="space-y-4">
                                <div className="flex flex-col md:flex-row gap-4">
                                    <input 
                                        type="text" 
                                        placeholder="Name" 
                                        className="w-full p-4 rounded-xl bg-white border-none focus:ring-2 focus:ring-[#4BAF47] outline-none text-[#878680]"
                                    />
                                    <input 
                                        type="email" 
                                        placeholder="Email Address" 
                                        className="w-full p-4 rounded-xl bg-white border-none focus:ring-2 focus:ring-[#4BAF47] outline-none text-[#878680]"
                                    />
                                </div>
                                
                                <textarea 
                                    rows="6" 
                                    placeholder="Write a Message" 
                                    className="w-full p-4 rounded-xl bg-white border-none focus:ring-2 focus:ring-[#4BAF47] outline-none text-[#878680] resize-none"
                                ></textarea>

                                <button 
                                    type="submit" 
                                    className="bg-[#4BAF47] hover:bg-[#3e913a] text-white font-bold py-4 px-10 rounded-xl transition-all duration-300"
                                >
                                    Send a Message
                                </button>
                            </form>
                        </div>
                        
                        <div className="absolute bottom-0  opacity-100 pointer-events-none">
                            <img src="/Images/ContactFormImg.png" alt="" className="w-full h-50 " />
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
}