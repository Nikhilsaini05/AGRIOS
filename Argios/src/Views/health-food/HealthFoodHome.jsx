import { useEffect, useState } from "react";
import { useAppData } from "../../Controllers/DataController/ProjectCardData";
import { useParams } from "react-router";

export default function HealthFoodHome() {
    const [currentProject, setProject] = useState({});
    const {findCurrentProject} = useAppData();
    const {id} = useParams();

    const initialize = ()=> {
        const item = findCurrentProject(id);
        if(item){
            setProject(item);
        }
    }

    useEffect(()=> {
        initialize();
    },[]);


    // Layout Outlet
    
    return (

        !currentProject ? <>
        <p>No Data Found</p>
        </>:
        <section className='w-full h-auto flex justify-center items-center py-16 bg-white'>
            <main className='w-full max-w-7xl px-4'>
                <div className='mb-10'>
                    <img
                        src="/Images/healthyFoodFarmerImg.png"
                        alt="Farmer"
                        className='w-full h-auto rounded-lg'
                    />
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
                    {/* Left Column */}
                    <div className='lg:col-span-2 text-left'>
                        <h1 className='text-[36px] font-extrabold text-[#1F1E17] mb-4'>Healthy Food</h1>

                        <p className='text-[16px] leading-8 text-[#878680] mb-6'>
                            Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae
                            dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>

                        <p className='text-[18px] font-bold leading-7 text-[#1F1E17] mb-6 '>
                            Biophilia is the idea that humans possess an innate tendency to seek connections with nature.
                            The term translates
                        </p>

                        <p className='text-[16px] leading-8 text-[#878680] mb-6'>
                            The term translates When an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged.
                        </p>

                        <p className='text-[16px] leading-8 text-[#878680] mb-8'>
                            Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae
                            dicta sunt explicabo.
                        </p>

                        <h2 className='text-[28px] font-extrabold text-[#1F1E17] mb-6'>Challenges</h2>

                        <p className="text-[16px] font-extrabold text-[#1F1E17] leading-8 mb-6">Nemo enim ipsam voluptatem quia voluptas. <br />
                            Accusamus et iusto odio dignissimos ducimus. <br />
                            Nam liberto tempore, cum soluta nobis est elidend. <br />
                            Accusamus et iusto odio dignissimos ducimus.</p>

                        <p className='text-[16px] leading-8 text-[#878680] '>
                            When an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries.
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className='lg:col-span-1'>
                        <div className='bg-white p-10 rounded-xl border-t-4 border-yellow-500 shadow-2xl'>
                            <div className='space-y-8 text-left'>
                                <div>
                                    <h4 className='text-[14px] uppercase tracking-wider text-[#878680] mb-1'>Services:</h4>
                                    <p className='text-[18px] font-extrabold text-[#1F1E17]'>Healthy Food</p>
                                </div>

                                <div>
                                    <h4 className='text-[14px] uppercase tracking-wider text-[#878680] mb-1'>Farmer:</h4>
                                    <p className='text-[18px] font-extrabold text-[#1F1E17]'>Mike Hardson</p>
                                </div>

                                <div>
                                    <h4 className='text-[14px] uppercase tracking-wider text-[#878680] mb-1'>Duration:</h4>
                                    <p className='text-[18px] font-extrabold text-[#1F1E17]'>4.5 Months</p>
                                </div>

                                <div>
                                    <h4 className='text-[14px] uppercase tracking-wider text-[#878680] mb-1'>Location:</h4>
                                    <p className='text-[18px] font-extrabold text-[#1F1E17]'>Brooklyn, New York</p>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </main>
        </section>
    );
}