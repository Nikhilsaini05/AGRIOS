function Cards() {
    const cardData = [
        { title: "Easy Harvesting", img: "/Images/Home_Image.png" },
        { title: "Agriculture Farming", img: "/Images/easy.png" },
        { title: "Ecological Farming", img: "/Images/farming.png" },
        { title: "Organic  Solutions", img: "/Images/organic.png" },
    ];

    return (
        <section className="w-full pb-20 px-2 md:px-8 lg:px-4 flex justify-center bg-white">
            <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-1 w-120 md:grid-cols-2 md:w-280 lg:grid-cols-4 lg:w-7xl gap-4">
                {cardData.map((card, index) => (
                    <div 
                        key={index} 
                        className="relative h-140 overflow-hidden rounded-2xl group cursor-pointer">
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

export default Cards;