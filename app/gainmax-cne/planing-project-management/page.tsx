import React from "react";
import Image from "next/image";
import AssetTimelineHomeCNE from "@/assets/cne/asset-timeline-home-cne.png";
import AssetPlanningCNE from "@/assets/cne/planning/asset-planning-cne.webp";

export default function page() {
  return (
    <main>
      <header className="relative w-full min-h-[50vh] py-[100px] lg:py-0 md:px-6 lg:px-10 flex mt-[40px] md:mt-[110px] lg:mt-[160px]">
        <div className="container p-4 md:p-8 flex flex-col items-center justify-center gap-y-16 w-full">
          <h1 className="uppercase font-semibold text-gray-500 text-2xl md:text-3xl lg:text-5xl text-center">
            PLANNING & PROJECT <br />
            <span className="text-blue-600">MANAGEMENT</span>
          </h1>
          <div className="flex flex-col lg:flex-row gap-x-0 gap-y-7 lg:gap-x-20 lg:gap-y-0 items-center justify-center lg:items-start lg:justify-start">
            {/* Desc */}
            <div className="flex flex-col gap-y-9">
              <p className="text-xl md:text-2xl text-justify">
                Project management is the application of processes, methods,
                skills, knowledge and experience to achieve specific project
                objectives within agreed parameters with the client.
              </p>
              <p className="text-xl md:text-2xl text-justify">
                Project management has to meet the final deliverables that are
                constrained to a stipulated timeline and fulfilling clients,
                expectations..
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="container p-4 md:p-8 flex flex-col overflow-x-hidden mb-[50px]">
        {/* timeline */}
        <Image
          src={AssetTimelineHomeCNE}
          alt="asset hero home cne"
          className="w-full h-auto object-cover"
        />
      </section>

      <section className="container p-4 md:p-8 flex flex-col overflow-x-hidden mb-[50px]">
        {/* timeline */}
        <Image
          src={AssetPlanningCNE}
          alt="asset hero home cne"
          className="w-full h-auto object-cover rounded-3xl"
        />
      </section>
    </main>
  );
}
