import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductsSection() {
    const settings = {
        dots: true, 
        infinite: true, 
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section className="w-full bg-[#E9F1EE] py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-12">
                    <p className="text-[24px] font-shadowsIntoLightTwo font-normal text-[#49A760]">
                        What we do
                    </p>
                    <h1 className="text-[30px] md:text-[40px] lg:text-[50px] font-semibold leading-tight">
                        Currently we are <br /> selling organic food
                    </h1>
                </div>

                {/* Slider Section */}
                <div className="slider-container ">
                    <Slider {...settings}>
                        {/* Card 1 */}
                        <div className="px-3 "> 
                            <div className="bg-white border border-gray-200 rounded-2xl p-10 min-h-125 flex flex-col justify-between shadow-sm">
                                <div className="text-left">
                                    <img src="Images/Agriculture.png" alt="Agriculture" className="mb-6 h-24 w-auto object-contain" />
                                    <h2 className="text-[16px] lg:text-[24px] text-[#04000B] font-bold uppercase">Agriculture</h2>
                                    <p className="text-[#49A760] text-[16px] font-bold uppercase tracking-wider mt-2">Products</p>
                                    <p className="text-[16px] text-[#666666] mt-6 leading-relaxed">
                                        Seeing rather her you not esteem men settle genius excuse. Deal say over means age from.
                                    </p>
                                </div>
                                <button className="mt-8 self-start transition-transform hover:scale-110">
                                    <img src="Images/card-btn.png" alt="Learn more" />
                                </button>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="px-3">
                            <div className="bg-white border border-gray-200 rounded-2xl p-10 min-h-125 flex flex-col justify-between shadow-sm">
                                <div className="text-left">
                                    <img src="Images/fresh.png" alt="Fresh" className="mb-6 h-24 w-auto object-contain" />
                                    <h2 className="text-[16px] lg:text-[24px] text-[#04000B] font-bold uppercase">Fresh</h2>
                                    <p className="text-[#49A760] text-[16px] font-bold uppercase tracking-wider mt-2">Vegetables</p>
                                    <p className="text-[16px] text-[#666666] mt-6 leading-relaxed">
                                        Perming rather her you not esteem men settle genius excuse. Deal say over means age from.
                                    </p>
                                </div>
                                <button className="mt-8 self-start transition-transform hover:scale-110">
                                    <img src="Images/card-btn.png" alt="Learn more" />
                                </button>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="px-3">
                            <div className="bg-white border border-gray-200 rounded-2xl p-10 min-h-125 flex flex-col justify-between shadow-sm">
                                <div className="text-left">
                                    <img src="Images/daily.png" alt="Dairy" className="mb-6 h-24 w-auto object-contain" />
                                    <h2 className="text-[16px] lg:text-[24px] text-[#04000B] font-bold uppercase">Dairy</h2>
                                    <p className="text-[#49A760] text-[16px] font-bold uppercase tracking-wider mt-2">Products</p>
                                    <p className="text-[16px] text-[#666666] mt-6 leading-relaxed">
                                        Seeing rather her you not esteem men settle genius excuse. Deal say over means age from.
                                    </p>
                                </div>
                                <button className="mt-8 self-start transition-transform hover:scale-110">
                                    <img src="Images/card-btn.png" alt="Learn more" />
                                </button>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
}

