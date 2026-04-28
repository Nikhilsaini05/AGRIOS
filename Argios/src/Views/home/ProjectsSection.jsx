import Cards from "../../Components/Cards/gallery_card"

export default function ProjectsSection(){
    return(
        <>
        <section className="py-20"> 
            <main>
                <div className="flex items-center flex-col">
                    <p className="text-[24px] font-shadowsIntoLightTwo font-normal text-[#49A760]"> Awesome Gallery</p>
                    <h1 className= "text-[40px] md:text-[50px] font-semibold">Explore Project</h1>
                </div>
            </main>
        </section>
        <Cards/>
        </>
    )
}

