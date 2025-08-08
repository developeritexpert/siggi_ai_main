'use client' // Needed if you're using Next.js App Router
import React, { useState } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    title: "Finally, a Signal Solution That Actually Works",
    stars: 5,
    quote: `I live in a rural area where my signal used to drop constantly. I tried boosters—nothing worked. Then I discovered Siggy. It's like having a personal signal engineer in my pocket.`,
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
]

const TestmonialSection = () => {
  const [current, setCurrent] = useState(0)

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const testimonial = testimonials[current]

  return (
    <section className="flex flex-col justify-start items-center w-full bg-[#19212a] pt-12 sm:py-16 lg:pt-[115px] px-4 sm:px-6 lg:px-8">
      {/* Main Heading - Unchanged */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[65px] georgia-text font-normal leading-tight text-center text-white mb-6 sm:mb-[55px]">
        What Users Are Saying
      </h2>

      {/* Dynamic Subheading */}
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-inter font-semibold leading-relaxed text-center text-white mb-4 sm:mb-[16px]">
        {testimonial.title}
      </h3>

      {/* Star Rating */}
      <div className="flex justify-center space-x-1 mb-6 sm:mb-[15px]">
        {[...Array(testimonial.stars)].map((_, i) => (
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

      {/* Testimonial */}
      <div className="w-full mx-auto lg:max-w-[1080px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 ">
          {/* Prev */}
          <button
            onClick={handlePrev}
            className="order-2 lg:order-1 bg-[#ffffff33] hover:bg-[#ffffff4d] rounded-full p-3 lg:p-4 transition-all duration-200 flex-shrink-0"
          >
            <Image
              src="/images/img_group_245.svg"
              alt="Previous"
              width={16}
              height={16}
              className="w-4 lg:w-5 h-4 lg:h-5"
            />
          </button>

          {/* Quote */}
          <div className="order-1 lg:order-2 flex-1 lg:max-w-[980px]">
            <blockquote className="text-sm sm:text-base lg:text-lg inter-text font-light leading-relaxed text-center text-white">
              &quot;{testimonial.quote}&quot;
            </blockquote>
          </div>

          {/* Next */}
          <button
            onClick={handleNext}
            className="order-3 bg-[#ffffff33] hover:bg-[#ffffff4d] rounded-full p-3 lg:p-4 transition-all duration-200 flex-shrink-0"
          >
            <Image
              src="/images/img_group_244.svg"
              alt="Next"
              width={16}
              height={16}
              className="w-4 lg:w-5 h-4 lg:h-5"
            />
          </button>
        </div>

        {/* Attribution */}
        <div className="flex justify-center items-center mt-6 sm:mt-8">
          <p className="text-sm sm:text-base lg:text-lg font-inter font-semibold text-[#8ed3fa]">
            {testimonial.user}
          </p>
        </div>
      </div>
    </section>
  )
}

export default TestmonialSection
