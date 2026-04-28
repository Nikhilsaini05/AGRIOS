import { useNavigate } from 'react-router';
import Bg from '/Images/P3_0.png';
import { RouteServices } from '../../Services/routes_services';

export default function  AboutVideoSection() {
    const navigate = useNavigate();
    const testimonials = [
        {
            name: "Sarah Albert",
            role: "Customer",
            img: "Images/P3_men.png",
            text: "There are many variations of passage of available but the majority have suffered alteration in some form by injected humor or randomed."
        },
        {
            name: "Sarah Albert",
            role: "Customer",
            img: "Images/P3_women.png",
            text: "There are many variations of passage of available but the majority have suffered alteration in some form by injected humor or randomed."
        }
    ];

    return (
        <section
            className="w-full h-auto py-20 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${Bg})` }}
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-[20px] font-medium text-[#EEC044] italic">Our Testimonials</span>
                    <h2 className="text-[30px] md:text-[48px] font-bold text-[#1F1E17] mt-2">What They Say</h2>
                </div>

                <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-20 lg:gap-24">
                    {testimonials.map((t, index) => (
                        <div onClick={()=> navigate(RouteServices.customerDetails)} key={index} className="relative bg-white rounded-2xl p-6 pt-10 lg:p-10 lg:pt-12 w-full max-w-125 shadow-sm flex flex-col lg:block">
                            
                            <div className="relative mb-8 lg:mb-0 lg:absolute lg:-left-12 lg:top-1/2 lg:-translate-y-1/2 flex justify-center lg:block">
                                <div className="relative">
                                    <img
                                        src={t.img}
                                        alt={t.name}
                                        className="w-35 h-45 rounded-2xl object-cover shadow-lg"
                                    />
                                    <div className="hidden md:block absolute bottom-4 -right-4 w-12 h-12 bg-[#4BAF47] rounded-full items-center justify-center">
                                        <img src="Images/P3_1.png" alt="quote" className=" pt-2 w-6" />
                                    </div>
                                </div>
                            </div>

                            <div className="lg:ml-28 text-center lg:text-left">
                                <p className="text-[#878680] text-[16px] lg:text-[18px] leading-relaxed lg:leading-9 mb-6">
                                    {t.text}
                                </p>
                                
                                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-4">
                                    <div className="hidden  md:flex flex-row gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <img key={i} src="Images/P3_1.png" alt="star" className="w-4 h-0.5" />
                                        ))}
                                    </div>

                                    <div className="text-center lg:text-right">
                                        <h3 className="text-[20px] font-bold text-[#1F1E17]">{t.name}</h3>
                                        <p className="text-[#878680] text-[14px] uppercase tracking-wider">{t.role}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}