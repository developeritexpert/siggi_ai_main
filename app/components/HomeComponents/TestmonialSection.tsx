"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    title: "Finally, a Signal Solution That Actually Works",
    stars: 5,
    quote: `I live in a rural area where my signal used to drop constantly, especially during client Zoom calls or even simple browsing. I tried boosters and network extenders—nothing really worked. Then I discovered Siggy. Within minutes of installing the app, I noticed a major difference. Calls are crystal clear, and I no longer have to run to the one spot in the house that gets decent reception. Siggy has completely changed the way I work and live. It’s like having a personal signal engineer in my pocket.`,
    user: "Rachel M.",
  },
  {
    title: "Unbelievable Improvement in Signal",
    stars: 4,
    quote: `I was skeptical, but now I’m amazed. My streaming quality has never been better, even during peak hours. Highly recommend trying this app!`,
    user: "John D.",
  },
  {
    title: "Works Better Than My Old Extender",
    stars: 3,
    quote: `I used to rely on a network extender. Siggy made that obsolete. No more lag or buffering during Zoom meetings.`,
    user: "Priya S.",
  },
];


const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 bg-[#ffffff33] hover:bg-[#ffffff4d] rounded-full p-3 lg:p-4 transition-all duration-200 z-10"
  >
    <Image src="/images/img_group_244.svg" alt="Next" width={20} height={20} />
  </button>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 bg-[#ffffff33] hover:bg-[#ffffff4d] rounded-full p-3 lg:p-4 transition-all duration-200 z-10"
  >
    <Image src="/images/img_group_245.svg" alt="Prev" width={20} height={20} />
  </button>
);

export default function TestmonialSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="bg-[#19212a] py-10 lg:pt-[115px] lg:pb-[119px] px-[16px] md:px-[60px]">
      <div className="container mx-auto flex flex-col justify-start items-center w-full relative z-0">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[65px] georgia-text font-normal leading-tight text-center text-white mb-6 sm:mb-[55px]">
          What Users Are Saying
        </h2>

        {/* Slider */}
        <div className="w-full mx-auto relative">
          <Slider {...settings}>
            {testimonials.map((t, index) => (
              <div key={index} className="px-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-inter font-semibold text-center text-white mb-4">
                  {t.title}
                </h3>

                {/* Stars */}
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <Image
                      key={i}
                      src="/images/img_star_1.svg"
                      alt="Star"
                      width={20}
                      height={20}
                      className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-sm sm:text-base  lg:max-w-[980px]  lg:text-lg inter-text font-light leading-relaxed text-center text-white">
                  &quot;{t.quote}&quot;
                </blockquote>

                {/* User */}
                <p className="text-sm sm:text-base lg:text-lg font-inter font-semibold text-[#8ed3fa] mt-4 text-center">
                  {t.user}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
