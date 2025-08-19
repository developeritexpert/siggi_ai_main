import React from 'react'
import Connect from './Connect'
import ContactForm from './ContactForm'

const ContactContent = () => {
  return (

  <section
     className="px-[20px] lg:px-[60px] py-[50px] lg:py-[100px]"
   >
     <div className="container mx-auto">
        <div className="w-full flex flex-col lg:flex-row lg:ml-[22px] xl:ml-[28px] 2xl:ml-[42px]">
            <Connect/>
             <ContactForm/>
        </div>
       </div>
       </section>

  )
}

export default ContactContent