import React from 'react'
import Hero from '../components/common/Hero'
import Privacy from '../components/commitment-and-privacy/Privacy'
const page = () => {
  return (
      <main className="bg-[#161b21]">
      <Hero
        heading="Privacy First. Compliance Always."
        paraText={<>
      We’ve made data protection a core principle from day one. Siggy aligns with global privacy laws
      <br />
      and best practices:
    </>}
        headingMaxWidth="max-w-[295px]  lg:max-w-[754px]"
        paraMaxWidth="max-w-[524px]  lg:max-w-[524px]"
        buttonText=""
      />
      <Privacy/>

      </main>
  )
}

export default page