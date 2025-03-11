import React from "react";
import { IoSpeedometerOutline, IoEarth } from "react-icons/io5";
import { PiWindmill, PiHandshake } from "react-icons/pi";
import { FaMedapps } from "react-icons/fa";
import AssetFooterValue from "@/assets/cnp/footer-value.webp";
import Image from "next/image";

export default function page() {
  return (
    <main className="flex flex-col items-center lg:items-end justify-center container p-4 md:p-8">
      <header className="relative w-full min-h-[80vh] py-[100px] md:px-6 lg:px-10 flex mt-[40px] md:mt-[110px] lg:mt-[150px]">
        <div className="container flex flex-col items-center justify-center w-full gap-y-24">
          <h1 className="uppercase font-semibold text-gray-500 text-2xl md:text-3xl lg:text-5xl text-center">
            Value <span className="text-orange-300">Proposition</span>
          </h1>
          <div className="flex flex-col gap-y-8 lg:gap-y-12 items-center w-full">
            {/* Item */}
            {[
              {
                icon: <IoSpeedometerOutline className="text-white" size={90} />,
                title: "Remote PV Performance Monitoring Service",
                description:
                  "As an additional value, Gainmax provides remote monitoring service for the PV System as a preventive and early warning system to ensure that the PV system is generating at its optimal level.",
              },
              {
                icon: <FaMedapps className="text-white" size={90} />,
                title: "Solar Preventive Maintenance",
                description:
                  "Solar panels needs periodic cleaning and maintenance throughout their lifetime. This is because dust, debris, and the effects of the weather can impair the performance of the photovoltaic cells over time.",
              },
              {
                icon: <PiHandshake className="text-white" size={90} />,
                title: "Waste Management",
                description:
                  "Sustainable management of poultry waste like feces, manure, bone, blood, and carcasses by the CPCB as a way to recycle waste into wealth.",
              },
              {
                icon: <PiWindmill className="text-white" size={90} />,
                title: "Renewable Energy Certificates Facilitation",
                description:
                  "We facilitate the buying or selling or RECs in Singapore as well as overseas markets by providing a one-stop sourcing and consolidating service.",
              },
              {
                icon: <IoEarth className="text-white" size={90} />,
                title: "Carbon Tracking and Sustainability Reporting",
                description:
                  "We assess and track your carbon emissions in your organization and provide annual report based on international recognized standard. We are your partner in helping you reduce your emissions to achieve a carbon-neutral or net-zero state.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row lg:gap-x-32 items-center justify-center w-full"
              >
                <div className="flex items-center justify-center bg-[#859F3D] p-8 lg:p-10 rounded-tl-[5rem] rounded-br-[5rem] mb-3 lg:mb-0">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-y-2 text-center md:text-left">
                  <h1 className="text-xl font-semibold text-black">
                    {item.title}
                  </h1>
                  <p className="text-lg md:text-xl">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Footer Value */}
      <Image
        src={AssetFooterValue}
        alt="Asset Footer Value"
        className="w-full lg:w-[800px]"
      />
    </main>
  );
}
