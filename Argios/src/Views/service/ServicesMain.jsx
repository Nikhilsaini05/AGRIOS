import PageName from "../../Components/Common/PageName";
import ServicesCTA from "./ServicesCTA";
import ServicesHeroService from "./ServicesHeroSection";
import ServicesListSection from "./ServicesListSection";


export default function ServicesMain(){
    return(<>
    <PageName/>
    <ServicesHeroService/>
    <ServicesListSection/>
    <ServicesCTA/>
    </>)
}