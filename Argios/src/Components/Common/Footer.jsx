
export default function Footer() {
    return (
        <footer className="w-full bg-[#24231D] py-16 px-6 md:px-12 lg:px-20 text-white font-sans">

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                {/* Box 1: Logo & Socials */}
                <div className="space-y-6 text-left" >
                    <img src="/logo.svg" alt="Agrios Logo" className="h-12" />
                    <p className="text-[#A5A49A] text-[16px] leading-relaxed max-w-xs">
                        There are many variations of passages of lorem ipsum available, but the majority suffered.
                    </p>
                    <div className="flex gap-3">

                        {['twitter', 'facebook', 'pinterest', 'instagram'].map((social) => (
                            <div key={social} className="h-10 w-10 bg-[#1F1E17] hover:bg-[#4BAF47] transition-colors rounded-full flex items-center justify-center cursor-pointer">
                                <img src={`/Images/F-${social[0].toUpperCase()}.png`} alt={social} className="h-10" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Box 2: Explore */}
                <div>
                    <h2 className="text-xl text-left  font-bold mb-4 relative pb-2">
                        Explore
                        <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#4BAF47]"></span>
                    </h2>
                    <ul className="text-[#A5A49A] space-y-3 mt-6">
                        {['About', 'Services', 'Our Projects', 'Meet the Farmers', 'Latest News', 'Contact'].map((item) => (
                            <li key={item} className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                                <img src="Images/footer-leaf.png" alt="" className="h-3 w-3" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Box 3: News */}
                <div>
                    <h2 className="text-xl text-left font-bold mb-4 relative pb-2">
                        News
                        <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#4BAF47]"></span>
                    </h2>
                    <div className="mt-6 space-y-6 text-left" >
                        <div className="">
                            <p className="font-semibold  cursor-pointer transition-colors">Bringing Food Production <br />
                                Back To Cities</p>
                            <span className="text-[#EEC044] text-sm">July 5, 2022</span>
                        </div>
                        <div>
                            <p className="font-semibold cursor-pointer transition-colors">The Future of Farming, <br />
                                Smart Irrigation Solutions</p>
                            <span className="text-[#EEC044] text-sm">July 5, 2022</span>
                        </div>
                    </div>
                </div>

                {/* Box 4: Contact  */}
                <div>
                    <h2 className="text-xl text-left  font-bold mb-2 relative pb-2">
                        Contact
                        <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#4BAF47]"></span>
                    </h2>
                    <div className="mt-2 space-y-4 text-[#A5A49A]">
                        <div className="flex flex-row gap-4">
                            <img src="Images/call.png" alt=""  className="h-4 w-4" />
                            <p className="flex items-center gap-3">
                                <span>666 888 0000</span>
                            </p>
                        </div>

                        <div className="flex flex-row gap-4 ">
                            <img src="/Images/email.png" alt="" className="h-4 w-4 pt-1" />
                            <p className="flex items-center gap-3">
                                <span>needhelp@company.com</span>
                            </p>
                        </div>

                        <div className="flex flex-row gap-4">
                            <img src="/Images/location.png" alt="" className="h-5 w-4" />
                            <p className="flex items-center gap-3 text-left">
                                <span>80 broklyn golden street line <br />
                                    New York, USA</span>
                            </p>
                        </div>

                        {/* e-mail msg */}
                        <div className="flex mt-6 overflow-hidden rounded-xl">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="bg-white px-4 py-3 text-black w-full outline-none"
                            />
                            <button className="bg-[#4BAF47] px-4 py-3 hover:bg-[#3e8e3a] transition-colors">
                                <img src="/Images/msg.png" alt="" className="h-4 w-4"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </footer>

    );
}

