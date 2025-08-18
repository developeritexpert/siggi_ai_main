import React from "react";
import Hero from "../components/common/Hero";
import PartnersName from "../components/partners/PartnersName";
import ImageText from "../components/common/ImageTextContent";
import ImageTextContent from "../components/common/ImageTextContent";
import FAQSection from "../components/home/FAQSection";
const page = () => {
  return (
    <main className="bg-[#161b21]">
      <Hero
        heading="Building the Future — Together"
        paraText="We partner with leading telecom operators, AI platforms, infrastructure providers, and enterprise innovators to bring intelligent connectivity to life."
        headingMaxWidth="max-w-[295px]  lg:max-w-[754px]"
        paraMaxWidth="max-w-[524px]  lg:max-w-[524px]"
        buttonText="Let's Partner Up"
      />
      <PartnersName />
      <ImageTextContent
        headingText1="Who We "
        spanText="Work"
        headingText2="With"
        ParaTextOne="We collaborate with leading telecom operators, AI and cloud providers, infrastructure partners, and enterprises to deliver next-generation mobile connectivity."
        ParaTextTwo="By combining expertise and innovation, we help our partners enhance network performance, improve user experiences, and scale smarter solutions worldwide."
        imageParaText1="Telecom Operators"
        imageParaText2="AI & Cloud Providers"
        imageParaText3="Infrastructure Providers"
        imageParaText4="Enterprises"
        image="Rectangle 28.png"
      />
      <FAQSection/>
    </main>
  );
};

export default page;
