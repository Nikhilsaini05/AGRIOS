export default function SimilarProjects() {
    const cardData = [
        { title: "Agriculture Farming", img: "/Images/SP-img1.png" },
        { title: "Ecological Farming", img: "/Images/SP-img2.png" },
        { title: "Organic  Solutions", img: "/Images/SP-img3.png" },
        { title: "Fresh   Products", img: "/Images/SP-img4.png" },
    ];

    return (
        <section className="w-full pb-20 px-2 md:px-8 lg:px-4 flex flex-col justify-center items-center bg-white">
            <p className="text-[24px] text-[#EEC044] italic">Recently Completed</p>
            <h1 className="text-[48px] font-extrabold mb-8">Similar Projects</h1>
            <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-1 w-75 md:grid-cols-2 md:w-180 lg:grid-cols-4 lg:w-7xl gap-4">
                {cardData.map((card, index) => (
                    <div 
                        key={index} 
                        className="relative h-140 overflow-hidden  group cursor-pointer">
                        <img 
                            src={card.img} 
                            alt={card.title} 
                            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 "
                        />
                        <div className="absolute inset-0 " />
                        <div className="absolute bottom-6 left-6 right-6">
                            <h3 className="text-white text-[30px] font-bold leading-tight text-left">
                                {card.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

