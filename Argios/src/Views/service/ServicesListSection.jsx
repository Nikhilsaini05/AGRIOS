import servicebg from '/Images/P2_1.png'

export default function ServicesListSection() {
    return (<>
        <section className="relative h-screen w-full bg-cover flex items-center flex-col justify-center bg-center "
                    style={{
                        backgroundImage: `url(${servicebg})`,
                    }}>
            <main className="w-full max-w-7xl h-auto ">
                <div className='flex flex-col items-center md:flex-row justify-center gap-10 md:gap-40 lg:gap-80 text-white'>
                    <div>
                        <h1 className='text-[25px] md:text-[58px] lg:text-[70px] px-4 lg:leading-20 md:text-left'>
                            Agriculture <br className='hidden md:block' />
                            Matters to the <br />
                            Future of <br className='hidden md:block'/>
                            Development
                        </h1>
                    </div>
                    <div className='flex  flex-col justify-center items-center gap-10 md:gap-16'>
                        <div>
                            <img src="../../../public/Images/P2_0.png"
                                alt="" />
                        </div>
                        <h1 className='text-[34px] md:text-[30px] text-[#EEC044] leading-7'>Watch our video</h1>
                    </div>
                </div>
            </main>
        </section>
    </>)
}