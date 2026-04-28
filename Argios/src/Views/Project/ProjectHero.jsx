import { useNavigate } from "react-router";
import { useAppData } from "../../Controllers/DataController/ProjectCardData";
import { RouteServices } from "../../Services/routes_services";

export default function ProjectHeroSection() {
    
    const {data} = useAppData();
    const navigation = useNavigate();

    return (
        <section className="w-full py-20 px-2 md:px-8 lg:px-4 flex justify-center bg-white">
            <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-1 w-120 md:grid-cols-2 md:grid-rows-3 md:w-280 lg:grid-cols-3 lg:grid-rows-2 lg:w-7xl gap-4">
                {data.map((card, index) => (
                    <div 
                        onClick={()=>navigation(`${RouteServices.projectDetails}/${card.id }?title=${card.title}`)}
                        key={index} 
                        className="relative h-140 overflow-hidden rounded-2xl group cursor-pointer">
                        <img 
                            src={card.img} 
                            alt={card.title} 
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20" /> 
                        <div className="absolute bottom-6 left-6 right-6">
                            <h3 className="text-white text-[30px] font-bold leading-tight text-left">
                                {card.title.split(' ')[0]}
                                <br />
                                {card.title.split(' ').slice(1).join(' ')}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

