import ParticlesBackground from "@/components/particles-background";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AdvisorSection from "@/components/advisor-section";
import ProjectsShowcaseSection from "@/components/projects-showcase-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import Alumnus from "@/components/ui/Alumnus";






export default function Alumini() {

  const [alumini, setAlumini] = useState<Alumnus[]>([])

  useEffect(() => {
    fetch("src/data/alumini.json").then(response => response.json()).then(data => setAlumini(data))
  }, [])


  return (<div className="">
   
    <ParticlesBackground />
    <Navigation />

    <main className="max-w-7xl mx-auto pt-24 pb-16 px-4">
      <div className="text-center mb-12">
            <h1 className="text-4xl font-bold ">Our Team</h1>
            <p className="text-xl text-slate-400 mt-2">
              Meet the people driving CSES NITW forward.
            </p>
          </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 p-10">
        {alumini.map(alumnus => <Alumnus alumnus={alumnus} />)}
      </div>
    </main>
    <Footer />


  </div>);
}