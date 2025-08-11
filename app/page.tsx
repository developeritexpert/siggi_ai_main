import Image from "next/image";
import Hero from "./components/HomeComponents/Hero";
import SingalMagic from "./components/HomeComponents/SingalMagic";
import CallSection from "./components/HomeComponents/CallSection";
import BuildForEverySection from "./components/HomeComponents/BuildForEverySection";
import TestmonialSection from "./components/HomeComponents/TestmonialSection";
import FAQSection from "./components/HomeComponents/FAQSection";
import SingalUbgrade from "./components/HomeComponents/SingalUbgrade";
import HomeAboutSection from "./components/HomeComponents/HomeAboutSection";
import DownloadSection from "./components/HomeComponents/DownloadSection";

export default function Home() {
  return (
    <>
        <div className="bg-[#161b21]">
         
            <Hero />
            <SingalMagic />
            <CallSection />
            <BuildForEverySection />
            <TestmonialSection />
            <FAQSection />
            <SingalUbgrade />
            <HomeAboutSection />
            <DownloadSection />
          </div>
     
    
    </>
  );
}
