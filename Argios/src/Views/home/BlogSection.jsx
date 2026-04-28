import { ArrowRight, Dot } from "lucide-react";


export default function BlogSection() {
    return (<>
        <section className="w-full h-auto flex items-center justify-center bg-[#FCFCFC]">
            <main className="max-w-7xl pb-16 ">

                <p className="text-[24px] font-shadowsIntoLightTwo font-normal text-[#49A760]">Latest News</p>
                <h1 className=" text-[24px] md:text-[42px] font-semibold pb-10">Check out our blog posts</h1>
                {/* main div */}
                <div className="flex justify-center items-center flex-col lg:flex-row gap-4">

                    {/* first image div */}
                    
                        <div className="relative">
                            <img src="Images/n-1.jpg" alt="" className="h-100 w-full md:w-170 lg:w-150 " />
                            <div className="text-left px-8 bg-linear-to-b from-black/0 to-black/60 py-8 absolute bottom-0 w-full h-full flex flex-col justify-end gap-2">
                                <h1 className="text-[24px] md:text-[36px] font-bold text-white" >Miscovery incommode earnestly
                                    commanded if.</h1>
                                <p className="text-[12px] md:text-[16px] text-white">Seeing rather her you not esteem men settle genius excuse. Deal say over <br />
                                    you age from. Comparison new ham melancholy son themselves.</p>
                                <p className="flex flex-row items-center text-[12px] md:text-[16px] font-semibold gap-1.5 text-white uppercase">Continue Reading <ArrowRight size={14} /></p>
                            </div>
                        </div>

                    <div className="flex flex-row gap-2 md:gap-5"> 
                        {/* second image div */}
                    <div className=" h-100 w-38 md:w-82 lg:w-75 flex flex-col text-left">
                        <div className="" >
                            <img src="Images/n-2.jpg" alt="" className="h-50 w-38 md:w-82 lg:w-75" />
                        </div>
                        <div className="pt-6 md:pt-10 flex flex-col gap-4 ">
                            <p className="flex flex-row text-[10px] md:text-[12px] lg:text-[18px] text-[#666666]"> Md Sohag <Dot />25 April, 2023</p>
                            <h1 className="text-[14px] md:text-[24px] text-[#04000B] font-semibold">Expression acceptance
                                imprudence particular</h1>
                            <p className="flex flex-row items-center text-[13px] font-semibold gap-1.5">Continue Reading <ArrowRight size={14} /></p>
                        </div>
                    </div>

                    {/* third image div */}
                    <div className=" h-100 w-38 md:w-82 lg:w-75 flex flex-col text-left">
                        <div className="" >
                            <img src="Images/n-3.jpg" alt="" className="h-50 w-38 md:w-82 lg:w-75" />
                        </div>
                        <div className="pt-6 md:pt-10 flex flex-col gap-4 ">
                            <p className="flex flex-row text-[10px] md:text-[12px] lg:text-[18px] text-[#666666]"> Md Sohag <Dot />25 April, 2023</p>
                            <h1 className="text-[15px] md:text-[24px] text-[#04000B] font-semibold">Considered imprudence of
                                technical friendship.</h1>
                            <p className="flex flex-row items-center text-[13px] font-semibold gap-1.5">Continue Reading <ArrowRight size={14} /></p>
                        </div>
                    </div>
                    </div>

                    
                </div>
            </main>
        </section>
    </>)
}

