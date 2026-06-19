import "./homePage.css"
import HeroSection from "@/components/heroSection/HeroSection";
import NavBar from "@/components/Navbar/Navbar";
import Process from "@/components/process/process";
import AnimationArea from "@/components/animationFolder/animation";
import FleetSection from "@/components/fleetOfCars/Fleet";
export default function Home() {
  return (
   <>
  <NavBar/>
  <HeroSection/>
  <Process/>
  <AnimationArea/>
  <FleetSection/>
   </>
  );
}
