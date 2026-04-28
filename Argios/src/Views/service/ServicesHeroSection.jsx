
const cardData = [
    {
        id: 1,
        title: "Agriculture Products",
        img: "Images/S1_1.png",
        icon: "Images/S1_img1.png"
    },
    {
        id: 2,
        title: "Organic Products",
        img: "Images/S1_2.png",
        icon: "Images/S1_img2.png"
    },
    {
        id: 3,
        title: "Fresh Vegetables",
        img: "Images/S1_3.png",
        icon: "Images/S1_img3.png"
    },
    {
        id: 4,
        title: "Dairy Products",
        img: "Images/S1_4.png",
        icon: "Images/S1_img4.png"
    },
];

export default function ServicesHeroService() {
    return (<>
        <section className="w-full h-auto flex flex-col justify-center items-center py-16">
            <main className="w-full max-w-7xl px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cardData.map((item) => (
                        <div key={item.id} className='relative flex flex-col items-center'>
                            {/* Main Card Image */}
                            <div className="w-full h-80 overflow-hidden rounded-2xl">
                                <img src={item.img} 
                                alt={item.title} 
                                className='w-full h-full object-cover transform group hover:scale-105 transition-transform duration-400 cursor-pointer' />
                            </div>
                            {/* Dynamic Icon Box */}
                            <div className="absolute bottom-32  z-20 w-18 h-18 bg-[#C5D044] rounded-2xl flex items-center justify-center shadow-md p-3">
                                <img
                                    src={item.icon}
                                    className="w-full h-full object-contain"/>
                            </div>
                            {/* Text Content */}
                            <div className="-mt-15 z-10 w-55 h-40 bg-white rounded-2xl p-8 pt-10 shadow-xl flex flex-col items-center text-center">
                                <h2 className="text-[20px] font-extrabold text-[#1F1E17] leading-7">
                                    {item.title}
                                </h2>

                                {/* button read more */}
                                <button className=" bg-[#4BAF47] text-white py-3 px-6 rounded-2xl mt-2">
                                    Read More
                                </button>
                            </div>

                        </div>
                    ))}
                </div>

            </main>

        </section>
        <nav className="relative w-full h-40 lg:h-58 bg-[#F8F7F0] overflow-hidden  flex items-center justify-center">
            <div className="absolute flex w-136 h-30 -left-50 lg:-left-70 -top-6 lg:-top-2 ">
                <img src=" Images/S1_nav7.png" alt="" className="overflow:hidden " />
            </div>
            <div className=" flex flex-row gap-8 lg:gap-14">
                <img src="Images/S1_nav1.png" alt="" className="w-30 h-20 lg:w-48 lg:h-19 grayscale opacity-50" />
                <img src="Images/S1_nav2.png" alt="" className="w-30 h-20 lg:w-48 lg:h-19 grayscale opacity-50" />
                <img src="Images/S1_nav3.png" alt="" className="hidden md:flex w-30 h-20 lg:w-48 lg:h-19 grayscale opacity-50" />
                <img src="Images/S1_nav4.png" alt="" className="hidden md:flex w-30 h-20 lg:w-48 lg:h-19 grayscale opacity-50" />
                <img src="Images/S1_nav5.png" alt="" className="hidden md:flex w-30 h-20 lg:w-48 lg:h-19 grayscale opacity-50" />
            </div>
            <div>
                <img src="Images/S1_nav6.png" alt="" className="absolute flex w-114 h-75 top-0 -right-46 lg:-right-40    " />
            </div>
        </nav>
    </>
    );
}