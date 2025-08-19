import React from "react";
import ImageText from "../common/ImageText";
import HeadingParaContent from "../common/HeadingParaContent";
import ImageSpanText from "../common/ImageSpanText";

const Privacy = () => {
  return (
    <section className="px-[20px] lg:px-[60px] py-[50px] lg:py-[100px]">
      <div className="container mx-auto">
        <div className="max-w-[1300px] mx-auto text-white">
          <h1 className="font-normal text-[27px] lg:text-[65px]">
            Our Commitment to <span className="text-[#8ED3FA]">Privacy</span>
          </h1>
          <p className="font-normal text-[14px] lg:text-[18px] lg:leading-[28px] mt-[15px]">
            At Siggy, safeguarding your data is not just a feature — it's a
            foundational commitment. From the architecture of our platform to
            our daily operations, privacy and compliance are deeply embedded in
            everything we do.
          </p>
          <p className="font-normal text-[14px] lg:text-[18px] lg:leading-[28px] mt-[30px]">
            We proactively align with the world’s most rigorous data protection
            frameworks to ensure your trust is never compromised:At Siggy, data
            protection isn't an afterthought — it's a founding principle. From
            the start, we've built our platform to align with global privacy
            laws and best practices, including:
          </p>
          <div className="mt-[35px]">
          <ImageText
            imageParaText={"Data anonymization and pseudonymization"}
          />
          <ImageText
            imageParaText={"Role-based access controls with strict enforcement"}
          />
          <ImageText
            imageParaText={"Data anonymization and pseudonymization"}
          />
          <ImageText
            imageParaText={
              "Immutable audit logs and end-to-end encrypted storage"
            }
          />
          <ImageText
            imageParaText={
              "Readiness for LGPD, PIPEDA, POPIA, and the EU AI Act"
            }
          />
          </div>
          <div className="mt-[26px]">
          <HeadingParaContent
            headingText="Data Protection"
            paraText="From day one, Siggy has been built with privacy by design—ensuring every feature, process, and decision puts user security first. As networks evolve and data grows more critical, our mission remains clear: to create AI-driven connectivity that is safe, transparent, and compliant with the world’s strictest regulations."
          />
          </div>
          <h2 className="font-normal text-[18px] lg:text-[40px] mt-[33px]">
            How We Ensure Compliance
          </h2>
        <div className="mt-[11px] max-w-[1223px]">
          <ImageSpanText
            imageSpanText="Global Privacy Standards:"
            imageParaText={
              "Siggy complies with leading privacy laws worldwide, including GDPR, CCPA, LGPD, PIPEDA, POPIA, and the upcoming EU AI Act."
            }
          />
          <ImageSpanText
            imageSpanText="Data Anonymization & Pseudonymization: "
            imageParaText={
              "We anonymize sensitive user data to prevent exposure of personal information while still enabling AI-powered network optimization."
            }
          />
          <ImageSpanText
            imageSpanText="Role-Based Access Control:"
            imageParaText={
              "Only authorized personnel can access specific data, reducing the risk of misuse or unauthorized exposure."
            }
          />

          <ImageSpanText
            imageSpanText="Immutable Audit Logs:"
            imageParaText={
              "Every action is recorded in secure, unchangeable logs for full transparency and accountability."
            }
          />

          <ImageSpanText
            imageSpanText="End-to-End Encryption:"
            imageParaText={
              "All data is encrypted in storage and during transfer, ensuring maximum protection."
            }
          />
          </div>
          <HeadingParaContent
            headingText="Responsible AI for Smarter Connectivity"
            paraText="Siggy’s AI is designed to enhance connectivity while respecting privacy. We collect only the data needed for network optimization and ensure it is anonymized and securely processed."
          />
          <HeadingParaContent
            headingText="End-to-End Security"
            paraText="At Siggy, security is not an add‑on—it is a core foundation of our platform. We implement end‑to‑end encryption for all data at rest and in transit, ensuring that sensitive information is never exposed. Our infrastructure is hosted on secure, industry‑leading cloud platforms with multiple layers of defense, including firewalls, intrusion detection, and continuous monitoring."
          />
          <p className="font-normal text-[14px] lg:text-[18px] lg:leading-[28px] mt-[30px] ">
            We use role‑based access controls to ensure only authorized team
            members can access specific data. Every action is recorded in
            immutable audit logs, providing complete transparency and
            accountability. Regular security audits and penetration testing keep
            our systems resilient against evolving threats, giving users and
            partners full confidence that their data is protected at every
            stage.
          </p>
          <HeadingParaContent
            headingText="Our Privacy Philosophy"
            paraText="We believe AI should enhance experiences, not exploit data. Siggy’s AI models are designed to deliver optimized connectivity without collecting unnecessary personal information. Every technical decision balances innovation with responsibility—because user trust is non‑negotiable."
          />
        </div>
      </div>
    </section>
  );
};

export default Privacy;
