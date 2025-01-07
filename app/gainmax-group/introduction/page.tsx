import React from "react";
import Logo from "@/assets/logo/svg/logo.svg";
import Image from "next/image";
import LogoWhite from "@/assets/logo/svg/logo-white.svg";
import AssetHeroAboutSection from "@/assets/group/introduction/asset-hero-about-section.webp";

export default function page() {
  return (
    <main>
      <header className="relative w-full min-h-[80vh] py-[100px] md:px-6 lg:px-10 flex mt-[40px] md:mt-[110px] lg:mt-[100px]">
        <div className="container p-4 md:p-8 flex flex-col items-center justify-center gap-y-16 w-full">
          <h1 className="uppercase font-semibold text-gray-500 text-2xl md:text-3xl lg:text-5xl">
            about gainmax <span className="text-orange-600">group</span>
          </h1>
          <div className="flex flex-col lg:flex-row gap-x-0 gap-y-7 lg:gap-x-20 lg:gap-y-0 items-center justify-center lg:items-start lg:justify-start">
            {/* Logo */}
            <div className="flex flex-col gap-x-4 gap-y-3 items-center justify-center lg:items-start lg:justify-start">
              <Image
                src={Logo}
                alt="logo"
                className="w-[60px] h-[60px] md:w-[100px] md:h-[100px]"
              />
              <div className="flex flex-col items-center justify-center text-center">
                <h1 className="uppercase font-extrabold text-black text-xl">
                  gainmax
                </h1>
                <h2 className="text-black text-sm">Group Pte Ltd</h2>
              </div>
            </div>

            {/* Desc */}
            <div className="flex flex-col gap-y-9 lg:w-[90%]">
              <p className="text-xl md:text-2xl text-justify">
                Gainmax was established in 2001 as a family-owned enterprise,
                primarily focused on subcontracting projects within the
                telecommunications industry. Over the past two decades, we have
                evolved into an infrastructure specialist, providing end-to-end
                integrated solutions to the telecom, data center, and technology
                industries.
              </p>
              <p className="text-xl md:text-2xl text-justify">
                We have restructured our business model to expand our portfolio
                to include sustainable green technology products and services.
                Additionally, we now offer Environmental, Social, and Governance
                (ESG) consultancy services, catering to clients in Singapore,
                South-East Asia, and beyond.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="container p-4 md:p-8 flex flex-col overflow-x-hidden mb-[80px] lg:mb-[100px]">
        <Image
          src={AssetHeroAboutSection}
          alt="hero"
          className="w-full lg:h-[80vh] object-cover object-center rounded-3xl"
        />
      </section>
    </main>
  );
}
