import ParticlesBackground from "@/components/particles-background";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AdvisorSection from "@/components/advisor-section";
import ProjectsShowcaseSection from "@/components/projects-showcase-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Photoframe from "@/components/ui/photoframe";

export default function Alumini(){
    return (<div className="">
        <style>
            
        </style>
        <ParticlesBackground/>
        <Navigation/>
        <main>
            <Photoframe/>
        </main>
        <Footer/>

        
    </div>);
}