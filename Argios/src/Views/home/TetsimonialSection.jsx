import tImg from '/Images/t-img.png'

export default function TetsimonialSection() {
    return (
        <>
            <section className="w-full h-auto bg-[#E9F1EE] py-20 flex items-center justify-center bg-no-repeat bg-contain bg-bottom"
                style={{
                    backgroundImage: `url(${tImg}) `,
                }}
            >
                <main className="max-w-7xl w-full flex flex-col relative">
                    <div className=" relative flex items-center flex-col">
                        <h1 className=" text-[50px] font-semibold z-10">Tetsimonials</h1>
                        <img src="Images/y-line.png" alt="person" className="absolute bottom-1 sm:h-10" />
                    </div>

                    <img src="Images/t-person.png" alt="" className="relative w-full md:w-100 md:h-130  md:left-50 lg:absolute top-0 lg:left-14 " />

                    <div className="bg-white lg:ml-[20%] -mt-48 lg:mt-10 md:px-14 md:py-8 lg:px-50  lg:py-14  ">
                        <img src="Images/t-p.png" alt="" className="absolute" />
                        <p className="text-left flex justify-center text-[16px] md:text-[22px] lg:text-[32px] font-normal text-[#666666] ">
                            “Targeting consultation discover <br />
                            apartments. ndulgence off under folly <br />
                            death wrote cause her way spite. Plan <br />
                            upon yet way get cold spot its week.”
                        </p>
                        <div className="flex flex-row justify-between border-t-2 border-[#666666] p-4 mt-4 md:mt-8">
                            <div >
                                <h1 className="text-[20px] md:text-[24px] font-semibold text-left ">
                                    <p className="pt-2 md:pt-6">Matthew J. Wyman <br />
                                        <span className="text-[14px] md:text-[16px] uppercase text-[#49A760]">Senior Consultant</span>
                                    </p>
                                </h1>
                            </div>
                            <div className="pt-2 md:pt-6">
                                <img src="Images/div.rating.png" alt="" />
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

