import { Outlet } from "react-router";
import Footer from "../Components/Common/Footer";
import Navbar from "../Components/Common/Navbar";
import FooterEnd from "../Components/Common/FooterEnd";

export default function PublicLayout  () {
    return <>
    <Navbar/>
    <main>
        <Outlet/>
    </main>
    <Footer/>
    <FooterEnd />
    </>
}