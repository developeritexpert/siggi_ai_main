import React from 'react'
import Hero from '../components/common/Hero'
import ImageTextContent from '../components/common/ImageTextContent'
import SiggyWork from '../components/how-it-works/SiggyWork'
const page = () => {
  return (
    <main className="bg-[#161b21]">
      <Hero
        heading="Intelligent Connectivity Starts Here"
        paraText="Predictive AI ensures better coverage, less congestion, and stronger performance."
        headingMaxWidth="max-w-[295px]  lg:max-w-[645px]"
        paraMaxWidth="max-w-[524px]  lg:max-w-[524px]"
        buttonText=""
      />
     
      <ImageTextContent
        headingText1="Smarter Signal. "
        showSiggyText=""
        spanText=" Stronger "
        headingText2=" Connections "
        headingMaxWidth="max-w-[453px]"
        ParaTextOne="Siggy integrates machine learning and real-time analytics to determine the best possible cell tower connection for any user, anytime. Our Databricks-powered backend ingests live telemetry, applies predictive models, and delivers instant decisions via robust REST APIs."
        ParaTextTwo=""
        imageParaText1="Real-time signal telemetry from mobile devices"
        imageParaText2="Delta Lake-powered data ingestion pipelines"
        imageParaText3="Predictive tower-switching using ML & reinforcement learning"
        imageParaText4="Seamless delivery via low-latency inference APIs"
        image="Rectangle 20 (2).png"
      />
      <SiggyWork/>
    
    </main>
  )
}

export default page