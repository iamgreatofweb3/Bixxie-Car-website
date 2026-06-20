import "./homePage.css"
import HeroSection from "@/components/heroSection/HeroSection";
import NavBar from "@/components/Navbar/Navbar";
import Process from "@/components/process/process";
import AnimationArea from "@/components/animationFolder/animation";
import FleetSection from "@/components/fleetOfCars/Fleet";
import ServicePage from "@/components/ServiceSection/service";
import AchievementPage from "@/components/achievementFolder/achievement";
import ReviewCnt from "@/components/reviewFolder/review";
export default function Home() {
  return (
   <>
  <NavBar/>
  <HeroSection/>
  <Process/>
  <AnimationArea/>
  <FleetSection/>
  <ServicePage/>
  <AchievementPage/>
  <ReviewCnt/>
   </>
  );
}
