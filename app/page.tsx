import Image from "next/image";
import Hero from "./components/home/Hero";
import SingalMagic from "./components/home/SingalMagic";
import CallSection from "./components/home/CallSection";
import BuildForEverySection from "./components/home/BuildForEverySection";
import TestmonialSection from "./components/home/TestmonialSection";
import FAQSection from "./components/home/FAQSection";
import SingalUbgrade from "./components/home/SingalUbgrade";
import HomeAboutSection from "./components/home/HomeAboutSection";
import DownloadSection from "./components/home/DownloadSection";

export default function Home() {
  return (
    <>
      <main className="bg-[#161b21]">
        <Hero />
        <SingalMagic />
        <CallSection />
        <BuildForEverySection />
        <TestmonialSection />
        <FAQSection />
        <SingalUbgrade />
        <HomeAboutSection />
        <DownloadSection />
      </main>
    </>
  );
}
