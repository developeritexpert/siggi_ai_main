"use client"

import React from 'react'
import Image from 'next/image'
import {useState} from 'react'
const FAQSection = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

    const faqData = [
    {
      question: "What is Siggy?",
      answer: "Siggy is an AI-powered mobile app that improves how your device connects to cell towers. It boosts signal strength, reduces dropped calls, and enhances data performance—automatically and in real time."
    },
    {
      question: "How does Siggy work?",
      answer: "Siggy uses advanced AI algorithms to continuously monitor signal conditions and intelligently select the best available cell tower for your device, optimizing your connection in real-time."
    },
    {
      question: "Do I need any hardware or special permissions?",
      answer: "No additional hardware is required. Siggy works entirely through software optimization and only requires standard app permissions to function effectively."
    },
    {
      question: "How do I get started?",
      answer: "Simply download the Siggy app from the App Store or Google Play, install it on your device, and let our AI technology automatically optimize your signal connection."
    },
    {
      question: "Is my data safe with Siggy?",
      answer: "Yes, your privacy and data security are our top priorities. Siggy only uses necessary data to enhance performance and follows strict privacy protocols to protect your information."
    },
    {
      question: "Can Siggy fix zero coverage areas?",
      answer: "While Siggy cannot create signal where none exists, it can significantly improve weak signals and help you connect to the strongest available tower in your area."
    }
  ];

   const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
  return (
           <section className="flex flex-col lg:flex-row justify-start items-start w-full  mx-auto px-4 sm:px-6 lg:px-44 lg:pb-[120px] pt-12 sm:pt-16 lg:pt-20 gap-8 lg:gap-12">
          {/* FAQ Header */}
          <div className="w-full lg:w-2/5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[22px] font-georgia font-normal leading-tight text-left text-white mb-4 sm:mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base lg:text-lg font-inter font-light leading-relaxed text-left text-white">
              <span className="font-light">If you need further assistance, feel free to email us at </span>
            <a
              href="mailto:Support@siggy.com"
              className="font-medium lg:text-[22px] hover:no-underline"
            >
              Support@siggy.com
            </a>            </p>
          </div>

          {/* FAQ Items */}
          <div className="w-full lg:w-3/5">
            <div className="space-y-4 sm:space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className="w-full">
                  <div 
                    className="bg-[#161a20] border border-[#ffffff1e] rounded-xl p-4 sm:p-6 lg:p-8 cursor-pointer hover:border-[#8ed3fa] transition-all duration-300"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm sm:text-base lg:text-lg font-inter font-medium text-white pr-4">
                        {faq.question}
                      </h3>
                      <Image
                        src="/images/img_vector_white_a700_10x18.svg"
                        alt="Toggle FAQ"
                        width={18}
                        height={10}
                        className={`w-4 sm:w-5 h-auto transition-transform duration-300 flex-shrink-0 ${
                          expandedFaq === index ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                    {expandedFaq === index && (
                      <div className="mt-4 pt-4  border-[#ffffff1a]">
                        <p className="text-sm sm:text-base font-inter font-normal leading-relaxed text-white/90">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

  )
}

export default FAQSection