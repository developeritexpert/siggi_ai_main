import React from 'react'
import Hero from '../components/common/Hero'
import ContactContent from '../components/contactUs/ContactContent'
const page = () => {
  return (
      <main className="bg-[#161b21]">
      <Hero
        heading="We’d Love to Hear From You"
        paraText="Whether you’re a telco leader, enterprise technologist, or potential partner — drop us a message. Together, we can make connectivity smarter and more reliable."
        headingMaxWidth="max-w-[295px]  lg:max-w-[754px]"
        paraMaxWidth="max-w-[524px]  lg:max-w-[524px]"
        buttonText=""
      />
      <ContactContent/>
      
      </main>
  )
}

export default page