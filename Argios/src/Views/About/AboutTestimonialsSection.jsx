export default function AboutTestimonialsSection() {
    const farmers = [
        { name: "Kevin Smith", role: "Farmer", img: "Images/P4_1.png" },
        { name: "Jessica Brown", role: "Farmer", img: "Images/P4_2.png" },
        { name: "David Martin", role: "Farmer", img: "Images/P4_3.png" },
    ];

    return (
        <section className="w-full py-20 flex justify-center bg-white">
            <main className="w-full max-w-7xl px-4">
                <header className="text-center mb-12">
                    <p className="text-[20px] text-[#EEC044] font-medium italic mb-2">
                        Team Members
                    </p>
                    <h1 className="text-[26px] md:text-[50px] font-black text-[#1D2228] leading-tight">
                        Meet Our Farmers
                    </h1>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
                    {farmers.map((farmer, index) => (
                        <div key={index} className="relative group w-fit mx-auto overflow-hidden rounded-2xl">
                            <img
                                src={farmer.img}
                                alt={farmer.name}
                                className="w-92 h-110 object-cover block transform group-hover:scale-105 transition-transform duration-500"
                            />

                            <div className="absolute bottom-0 right-0 bg-white px-10 md:py-2  lg:py-4 md:px-12 lg:rounded-tl-2xl shadow-2xl flex items-center ">
                                <div className="bg-[#4BAF47] rounded-lg">
                                    <img src="Images/P4_btn.png" alt="share" 
                                    className=" absolute w-10  md:w-16 md:h-16 -left-4 top-2 md:-left-6 md:top-4" />
                                </div>
                                

                                <div>
                                    <h3 className="text-[14px]  pt-2 md:text-[18px] font-bold text-[#1D2228] leading-none">
                                        {farmer.name}
                                    </h3>
                                    <p className="text-[14px] text-[#767676] uppercase tracking-wider  mt-2">
                                        {farmer.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </section>
    );
}
