export default function ServicesCTA() {
    const Vegitable = [
        { id: 1, heading: "Quality Standards", img: "Images/S3_1.png" },
        { id: 2, heading: "Organic Farming", img: "Images/S3_2.png" },
        { id: 3, heading: "Agriculture Products", img: "Images/S3_3.png" },
    ];

    return (
        <section className="w-full h-auto flex justify-center items-center flex-col bg-white">
            <main className="relative w-full max-w-7xl px-4">

                {/* Top coaintainer */}
                <div className="absolute left-1/2 -translate-x-1/2 w-full  grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-1 lg:gap-6 top-4 md:-top-14 lg:-top-18 z-30 ">
                    {Vegitable.map((item) => (
                        <div key={item.id} className="flex flex-col items-center group ">

                            {/* Top Title Box */}
                            <div className="w-60 h-14 lg:w-92 lg:h-18 bg-white border border-gray-100 shadow-sm rounded-t-2xl py-6 flex justify-center items-center z-10">
                                <h2 className="text-[20px] font-extrabold text-[#1F1E17] transition-colors group-hover:text-[#4BAF47]">
                                    {item.heading}
                                </h2>
                            </div>

                            {/* Image Container */}
                            <div className="w-60 h-64 lg:w-92 lg:h-72 -mt-2 overflow-hidden rounded-b-2xl shadow-md">
                                <img
                                    src={item.img}
                                    alt={item.heading}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Middle Section  */}
                <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-10 lg:gap-38 pt-250 md:pt-70 lg:py-16 lg:pt-80  text-left">

                    <div className="relative flex -left-12 md:-left-15">
                        <div className="relative left-12 w-75 md:w-125 md:h-140  md:rounded-2xl overflow-hidden shadow-lg">
                            <img src="Images/S3_4.png" alt="Farmer" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col">
                        <p className="text-[#C5D044] text-[24px] font-medium mb-2">What We Do</p>
                        <h1 className="text-[30px] md:text-[40px] lg:text-[48px] font-extrabold text-[#1F1E17] leading-tight mb-6">
                            Healthy Food for Good Growth
                        </h1>

                        <div className="space-y-4 mb-10 lg:max-w-xl text-[16px] text-[#878680]">
                            <p className="pr-16">
                                Lorem ipsum dolor sit amet nsectetur cing elit. Suspe ndisse suscipit
                                sagittis leo sit met entum estibu dignissim posuere cubilia durae. Leo sit met
                                entum cubilia crae onec.
                            </p>
                            <p className="pr-16">
                                Lorem ipsum dolor sit amet adipiscing elit. Nulla placerat posuere dui.
                                Pellentesque venenatis sem non lacus ac auctor.
                            </p>
                        </div>

                        <div className="flex flex-row justify-around gap-4">
                            <div className="w-42 h-50 bg-[#4BAF47] rounded-2xl hidden md:flex flex-col items-center justify-center text-white gap-3 shadow-md">
                                <img src="Images/S3_5.png" alt="" className="w-20 h-20 " />
                                <p className="font-bold text-[18px] mt-6">Harvesting</p>
                            </div>
                            <div className="w-42 h-50 bg-[#C5CE38] rounded-2xl flex flex-col items-center justify-center text-white gap-3 shadow-md">
                                <img src="Images/S3_6.png" alt="" className="w-20 h-20" />
                                <p className="font-bold text-[18px] mt-6">Maintenance</p>
                            </div>
                            <div className="w-42 h-50 bg-[#EEC044] rounded-2xl hidden md:flex flex-col items-center justify-center text-white gap-3 shadow-md">
                                <img src="Images/S3_7.png" alt="" className="w-20 h-20" />
                                <p className="font-bold text-[18px] mt-6">Fencing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="w-full relative h-auto mt-10">
                <img
                    src="Images/S3_8.png" className="w-full h-68 object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full max-w-7xl px-4 gap-8 md:gap-4 flex flex-col md:flex-row items-center justify-between">

                        <div className="flex flex-col gap-2 text-left">
                            <p className="text-[#EEC044] text-[22px] md:text-[30px] font-medium italic">
                                Agriculture Market Leaders
                            </p>
                            <h1 className="text-white text-[28px] md:text-[32px] lg:text-[40px] font-extrabold md:leading-12 ">
                                We’re popular in agriculture market globally
                            </h1>
                        </div>

                        <div className="">
                            <button className="bg-[#EEC044] text-white px-6 py-3 lg:px-10 lg:py-5 rounded-2xl font-bold text-[18px] lg:text-[18px] hover:bg-[#d9a93d] transition-all shadow-lg ">
                                Discover More
                            </button>
                        </div>

                    </div>
                </div>
            </footer>
        </section>
    );
}