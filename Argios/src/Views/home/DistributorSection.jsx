import Products from '/Images/product-img.jpg'
import Tick from '/Images/ticl-icon.png'


export default function DistributorSection() {
    return (
        <section className="relative min-h-screen w-full bg-cover bg-center flex flex-col"
            style={{ backgroundImage: `url(${Products})` }}
        >
            <div className='relative flex justify-center'>
                <img className='hidden md:w-full h-14' src="Images/product-2.png" alt="" />
            </div>

            <main className="container max-w-7xl mx-auto md:px-10 flex-1 flex md:items-end pb-0">
                <div className="w-full h-240 md:w-180 lg:w-162 md:h-127 bg-[#49A760] p-12 text-white flex flex-col justify-center">
                    <h2 className="text-[34px] md:text-[50px] font-semibold leading-tight pb-14 md:mb-4">
                        Distributors of <br className='hidden sm:block'/>Organic Produce
                    </h2>
                    <p className="md:mb-8 mb-16 opacity-90 text-left text-[24px] md:text-[16px]">
                        Contrasted dissimilar get joy you instrument out reasonably.
                        Again keeps at no meant stuff.
                    </p>
                    <ul className="space-y-8 text-[24px] md:space-y-4 md:text-[18px]">
                        <li className='flex  items-center  gap-2'><img src={Tick} alt="" className='h-4 w-4' /> Modern Agriculture Equipment</li>
                        <li className='flex  items-center  gap-2'><img src={Tick} alt="" className='h-4 w-4' /> Awesome Harvest of Wheat</li>
                        <li className='flex  items-center gap-2'><img src={Tick} alt="" className='h-4 w-4' /> Fresh Fruits & Vegetables</li>
                    </ul>
                </div>
<img 
                        src='Images/product-leaf.png'
                        alt="leaf"  
                        className="absolute -left-2 -bottom-12 w-32 h-auto object-contain pointer-events-none"
                    />
            </main>

        </section>
    )
}

