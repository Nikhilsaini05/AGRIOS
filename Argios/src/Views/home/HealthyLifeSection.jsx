export default function HealthyLifeSection() {
    return (
        <section className="bg-white w-full flex flex-col items-center">
            <main className="py-10 md:py-20 lg:py-30 px-6 md:px-20 max-w-7xl w-full">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-20">

                    <div className="w-full lg:w-1/2">
                        <p className="text-[40px] md:text-[50px] lg:text-[80px] leading-[1.1] font-shadowsIntoLightTwo font-normal text-[#49A760] text-center lg:text-left">
                            Healthy Life 
                            With Fresh 
                            Products
                        </p>
                    </div>

                    {/* Product Images */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 w-full lg:w-1/2 gap-8 md:gap-12 place-items-center">
                        <img src="Images/1.png" alt="Product 1" className="h-24 w-24 object-contain" />
                        <img src="Images/2.png" alt="Product 2" className="h-24 w-24 object-contain" />
                        <img src="Images/3.png" alt="Product 3" className="h-24 w-24 object-contain" />
                        <img src="Images/4.png" alt="Product 4" className="h-24 w-24 object-contain" />
                        <img src="Images/5.png" alt="Product 5" className="h-24 w-24 object-contain" />
                        <img src="Images/6.png" alt="Product 6" className="h-24 w-24 object-contain" />
                    </div>

                </div>
            </main>
        </section>
    );
}

