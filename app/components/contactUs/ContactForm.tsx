import React from 'react'

const ContactForm = () => {
  return (
    <div className="text-white w-full lg:w-1/2 mt-[30px] lg:mt-[0px] ">
      <h2 className="text-[18px] lg:text-[40px] font-normal text-white mb-[21px]">
Get A Quote
      </h2>
      <form className="space-y-[20px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
        <input type="text" placeholder='First Name'
     className=" w-full px-[16px] py-[14px]  rounded-lg text-[16px] font-normal bg-[#161A20] border border-[#FFFFFF1F]   placeholder-white focus:outline-none focus:border-gray-600"

        />
       <input type="text" placeholder='Last Name'
     className=" w-full px-[16px] py-[14px]  rounded-lg text-[16px] font-normal bg-[#161A20] border border-[#FFFFFF1F]   placeholder-white focus:outline-none focus:border-gray-600"

        />
        </div>
              <input type="email" placeholder="Email"
     className=" w-full px-[16px] py-[14px]  rounded-lg text-[16px] font-normal bg-[#161A20] border border-[#FFFFFF1F]   placeholder-white focus:outline-none focus:border-gray-600"

        />
              <input type="tel" placeholder='Phone'
     className=" w-full px-[16px] py-[14px]  rounded-lg text-[16px] font-normal bg-[#161A20] border border-[#FFFFFF1F]   placeholder-white focus:outline-none focus:border-gray-600"

        />
        <textarea placeholder="Message"
        rows={4}
             className=" w-full px-[16px] py-[14px]  rounded-lg text-[16px] font-normal bg-[#161A20] border border-[#FFFFFF1F]   placeholder-white focus:outline-none focus:border-gray-600"

        />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#8ED3FA] text-[#0E1412] font-normal text-[18px] py-[10px] px-[25px] lg:px-[48px] lg:py-[19px] rounded-[170px] hover:opacity-90 transition"
          >
            Submit
          </button>
      </form>
    </div>
  )
}

export default ContactForm