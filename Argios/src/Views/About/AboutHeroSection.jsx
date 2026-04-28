import { useNavigate } from "react-router"
import { RouteServices } from "../../Services/routes_services";

export default function AboutHeroSection() {
    const navigate = useNavigate();
    return (<>
        <section className="w-full h-auto flex justify-center items-center py-16">
            <main className="max-w-7xl w-full ">
                <div className="grid grid-cols-1 md:grid-cols-2 text-left ">
                    <div className="relative"> 
                        <img
                            src="Images/P1_1.png"
                            className="md:rounded-2xl w-full md:h-100 md:w-80 lg:w-113 lg:h-150 md:ml-10 lg:ml-20"
                        />

                        <img
                            src="Images/P1_2.png"
                            className="hidden md:flex absolute md:h-70 bottom-0 left-0 z-10 rounded-2xl"
                        />
                    </div>

                    <div className=" flex flex-col gap-6 md:gap-8 lg:gap-10 px-4  h-full">
                        <div>
                            <span className="text-[#EEC044] text-[24px]"> Get to Know Us</span>
                            <h1 className="text-[20px] md:text-[30px] lg:text-[48px] font-bold">The Best Agriculture Market</h1>
                        </div>
                        <div className="text-[#4BAF47] text-[16px] lg:text-[20px] font-bold ">
                            <p>There are many variations of passa of lorem available, but <br className="hidden lg:block"/>
                                the majority have suffered alteration.</p>
                        </div>
                        <div className="text-[#878680] text-[14px] md:text-[16px] ">
                            <p className="">
                                There are many variations of passages of lorem ipsum available but the <br className="hidden lg:block"/>
                                majority have suffered alteration in some form by injected humor or <br className="hidden lg:block"/>
                                random word which don’t look even.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 text-[14px] md:text-[18px] leading-9 justify-center">
                            <p className="flex flex-row gap-3 h-4 items-center"><img src="Images/P1_3.png" alt="" /> Suspe ndisse suscipit sagittis leo</p>
                            <p className="flex flex-row gap-3 h-4 items-center"><img src="Images/P1_3.png" alt="" />Entum estibulum disgnissim posuere</p>
                            <p className="flex flex-row gap-3 h-4 items-center"> <img src="Images/P1_3.png" alt="" />Lorem Ipsum on the tend to repeat</p>
                        </div>
                        <button onClick={()=> navigate(RouteServices.cart)} className="bg-[#4BAF47] border-0 rounded-2xl text-[14px] text-white w-40 px-4 py-4">Discover More</button>

                    </div>
                </div>
            </main>
        </section>
    </>)
}