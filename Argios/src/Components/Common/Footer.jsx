import { useEffect, useState } from 'react';
import { supabase } from '../../Backend/supabase_client';

export default function Footer() {
    const [footerData, setFooterData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchFooterData = async () => {
        try {
            // Remove the extra quotes, just use the plain string
            const { data, error } = await supabase
                .from('FooterData') 
                .select('*');

            if (error) throw error;

            if (data && data.length > 0) {
                console.log("Footer Data Received:", data[0]);
                setFooterData(data[0]);
            }
        } catch (error) {
            console.error('Error fetching Supabase data:', error.message);
        } finally {
            setLoading(false);
        }
    };

    fetchFooterData();
}, []);

const formatDate = (dateString) => {
        if (!dateString) return "Loading...";
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    };

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
                    <h2 className="text-xl text-left font-bold mb-4 relative pb-2">
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
                    <div className="mt-6 space-y-6 text-left">
                        <div>
                            <p className="font-semibold cursor-pointer hover:text-[#4BAF47] transition-colors">
                                Bringing Food Production <br /> Back To Cities
                            </p>
                            {/* Dynamic Date 1 */}
                            <span className="text-[#EEC044] text-sm">
                                {loading ? "Loading..." : formatDate(footerData?.Date)}
                            </span>
                        </div>
                        <div>
                            <p className="font-semibold cursor-pointer hover:text-[#4BAF47] transition-colors">
                                The Future of Farming, <br /> Smart Irrigation Solutions
                            </p>
                            {/* Dynamic Date 2 */}
                            <span className="text-[#EEC044] text-sm">
                                {loading ? "Loading..." : formatDate(footerData?.Date)}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Box 4: Contact (DYNAMIC DATA) */}
                <div>
                    <h2 className="text-xl text-left font-bold mb-2 relative pb-2">
                        Contact
                        <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#4BAF47]"></span>
                    </h2>
                    <div className="mt-2 space-y-4 text-[#A5A49A]">

                        {/* Number */}
                        <div className="flex flex-row gap-4">
                            <img src="Images/call.png" alt="call" className="h-4 w-4" />
                            <p className="flex items-center gap-3">
                                <span>{loading ? "Loading..." : footerData?.Number}</span>
                            </p>
                        </div>

                        {/* Email */}
                        <div className="flex flex-row gap-4 ">
                            <img src="/Images/email.png" alt="email" className="h-4 w-4 pt-1" />
                            <p className="flex items-center gap-3">
                                <span>{loading ? "Loading..." : footerData?.Email}</span>
                            </p>
                        </div>

                        {/* Address */}
                        <div className="flex flex-row gap-4">
                            <img src="/Images/location.png" alt="location" className="h-5 w-4" />
                            <p className="flex items-center gap-3 text-left">
                                <span className="whitespace-pre-line">
                                    {loading ? "Loading..." : footerData?.Address}
                                </span>
                            </p>
                        </div>

                        {/* Newsletter Input */}
                        <div className="flex mt-6 overflow-hidden rounded-xl">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="bg-white px-4 py-3 text-black w-full outline-none"
                            />
                            <button className="bg-[#4BAF47] px-4 py-3 hover:bg-[#3e8e3a] transition-colors">
                                <img src="/Images/msg.png" alt="send" className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}