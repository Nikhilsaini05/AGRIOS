import Footer from "../../Components/Common/Footer";
import Navbar from "../../Components/Common/Navbar";
import HeroSection from "./HeroSection";
import AboutFarmSection from "./AboutFarmSection";
import ProductsSection from "./ProductSection";
import DistributorSection from "./DistributorSection";
import TetsimonialSection from "./TetsimonialSection";
import HealthyLifeSection from "./HealthyLifeSection";
import ProjectsSection from "./ProjectsSection";
import FooterEnd from "../../Components/Common/FooterEnd";
import BlogSection from "./BlogSection";
import JsPractice from "./jspractice";
import ShowFavrateCard from "./First";


export default function HomeMain() {
    return <>
        <HeroSection />
        <AboutFarmSection />
        <ProductsSection />
        <DistributorSection />
        <HealthyLifeSection />
        <TetsimonialSection />
        <ProjectsSection />
        <BlogSection />
        
    </>
}