import React from "react";
import Image from "next/image";
import AssetPartnership from "@/assets/cnp/assets-partnership-cnp.webp";
import AssetPartnerLogo from "@/assets/cnp/asset-partner-logo.webp";
import AssetFlow from "@/assets/cnp/flow.png";

export default function page() {
  return (
    <main>
      <header className="relative w-full min-h-[80vh] py-[100px] md:px-6 lg:px-10 flex mt-[40px] md:mt-[110px] lg:mt-[150px]">
        <div className="container p-4 md:p-8 flex flex-col items-center justify-center w-full gap-y-24">
          <h1 className="uppercase font-semibold text-gray-500 text-2xl md:text-3xl lg:text-5xl text-center">
            Partnership{" "}
            <span className="text-orange-300"> & Collaboration</span>
          </h1>

          <div className="flex flex-col items-start justify-start gap-y-20 w-full">
            <h2 className="text-orange-300 font-semibold text-2xl mb-10">
              Your Partner in Green Solutions
            </h2>
            <div className="flex flex-col gap-y-5">
              <p className="text-xl text-justify">
                We offer a broad range of services to assist companies with
                their green efforts, including conducting company assessments on
                energy, water, carbon, waste, hazardous materials, environmental
                impacts, and more. As your partner, we can devise an overall
                strategy for sustainability plans.
              </p>
              <p className="text-xl text-justify">
                Environmental, social and governance (ESG) is a framework used
                to assess an organization's business practices and performance
                on various sustainability and ethical issues. It also provides a
                way to measure business risks and opportunities in those areas.{" "}
              </p>
              <p className="text-xl text-justify">
                We devise various consultancy packages that offer opportunities
                for companies to tap on government grants, whereby companies can
                further develop sustainable and innovative solutions, in
                particular the domain of green energy
              </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-10">
              <Image src={AssetPartnerLogo} alt="logo" className="lg:w-[50%]" />
              <ul className="text-xl text-justify flex flex-col lg:w-[50%] gap-y-2">
                <li>Carbon Footprint Report</li>
                <li>To develop an impactful ESG strategy</li>
                <li>Double-materiality assessment</li>
                <li>CSRD/ESRS Gap analysis and readiness review</li>
                <li>Climate risk and scenario analysis (TCFD)</li>
                <li>Scope 1, 2 and 3 screening</li>
                <li>EU Taxonomy assessment and readiness review</li>
                <li>ESG due diligence</li>
                <li>Human rights saliency assessment</li>
              </ul>
            </div>
            <Image src={AssetFlow} alt="flow" className="w-full" />
            <section className="container p-4 md:p-8 flex flex-col overflow-x-hidden mb-[80px] lg:mb-[100px] w-full">
              <Image
                src={AssetPartnership}
                alt="hero"
                className="w-full lg:h-[80vh] object-cover object-center rounded-3xl"
              />
            </section>
          </div>
        </div>
      </header>
    </main>
  );
}
