import React from "react";
import Logo from "@/assets/logo/svg/logo.svg";
import Image from "next/image";
import LogoWhite from "@/assets/logo/svg/logo-white.svg";
import AssetIntroductionCnp from "@/assets/cnp/asset-introduction-cnp.webp";

export default function page() {
  return (
    <main>
      <header className="relative w-full min-h-[80vh] py-[100px] md:px-6 lg:px-10 flex mt-[40px] md:mt-[110px] lg:mt-[150px]">
        <div className="container p-4 md:p-8 flex flex-col items-center justify-center gap-y-16 w-full">
          <h1 className="uppercase font-semibold text-gray-500 text-2xl md:text-3xl lg:text-5xl">
            about gainmax <span className="text-orange-300">C&P</span>
          </h1>
          <div className="flex flex-col lg:flex-row gap-x-0 gap-y-7 lg:gap-x-20 lg:gap-y-0 items-center justify-center lg:items-start lg:justify-start">
            {/* Logo */}
            <div className="flex flex-col gap-x-4 gap-y-3 items-center justify-center  lg:justify-start">
              <Image
                src={Logo}
                alt="logo"
                className="w-[60px] h-[60px] md:w-[100px] md:h-[100px]"
              />
              <div className="flex flex-col items-center justify-center text-center">
                <h1 className="uppercase font-extrabold text-black text-xl">
                  gainmax
                </h1>
                <h2 className="text-black text-sm">
                  Consultancy & Partnership Pte Ltd
                </h2>
              </div>
            </div>

            {/* Desc */}
            <div className="flex flex-col gap-y-9 lg:w-[90%]">
              <p className="text-xl md:text-2xl text-justify">
                Sustainability means that environmental, social, and economic
                aspects collaborate for the benefit of both people and the
                planet. It's essential for every organization, regardless of its
                context or offerings, to adopt sustainability practices. As
                there's increasing attention on Environmental, Social, and
                Governance (ESG) issues and carbon emissions reporting, along
                with consumers becoming more aware of environmental effects,
                sustainability has become a crucial topic in boardroom
                discussions, even though it can be complex.
              </p>
              <p className="text-xl md:text-2xl text-justify">
                We collaborate closely with our clients to guide them beyond
                merely managing risks and meeting ESG (Environmental, Social,
                and Governance) compliance standards. Instead, we assist them in
                envisioning a future where sustainability forms the core of
                their long-term business strategy and transformation. Drawing on
                our deep expertise in sustainability trends and innovative
                thinking, we identify unique opportunities to add value across
                various industries through both risk reduction and embracing new
                practices.
              </p>
              <ul className="list-disc text-xl md:text-2xl text-justify">
                <li>ESG & Sustainability Consultancy</li>
                <li>Strategic Alliances</li>
                <li>Collaboration</li>
                <li>Industry Consulting</li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <section className="container p-4 md:p-8 flex flex-col overflow-x-hidden mb-[80px] lg:mb-[100px]">
        <Image
          src={AssetIntroductionCnp}
          alt="hero"
          className="w-full lg:h-[80vh] object-cover object-center rounded-3xl"
        />
      </section>
    </main>
  );
}
