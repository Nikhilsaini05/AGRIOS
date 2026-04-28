import BG from '/Images/P2_1.png'

export default function AboutStorySection() {
    return (<>
        <section className="relative h-screen w-full bg-cover flex items-center flex-col justify-center bg-center "
            style={{
                backgroundImage: `url(${BG})`,
            }}>
                <div><img src="/Images/P2_0.png" alt="" className='h-16 w-16 lg:h-25 lg:w-25 mb-10'/> </div>
            <main className="max-w-7xl flex flex-col items-center">
                <div className="mb-16" >
                    <h1 className='text-[22px] md:text-[40px] lg:text-[60px] font-bold text-white'>
                        ECO-Friendly Products can <br />
                        be Made from Scratch
                    </h1>
                </div>
                <nav className='bg-[#1F1E17] absolute w-full h-30 lg:h-46 bottom-0 overflow-hidden '> 
                    <div>
                        <img src="Images/P2_2.png" alt=""  className='hidden lg:flex absolute w-md h-78 left-0 '/>
                    </div>
                    <div className='list-none text-white text-[14px] md:text-[18px]'>
                        <ul className='grid grid-cols-2 md:grid-cols-4 gap-6 py-7 px-2 md:py-12 lg:py-20'>
                        <li className=''>Agriculture Products</li>
                        <li className=''>Projects Completed</li>
                        <li className=''>Satisfied Clients</li>
                        <li className=''>Experts Farmers</li>
                        </ul>
                    </div>
                </nav>
            </main>
        </section>
    </>)
}