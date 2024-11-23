'use client';

import Image from 'next/image';
import Logo from '@/assets/logo/svg/logo.svg';
import AssetHeroHomeCNE from '@/assets/cne/asset-hero-home-cne.webp';
import AssetTimelineHomeCNE from '@/assets/cne/asset-timeline-home-cne.png';
import React from 'react';
import Link from 'next/link';
import ServiceGrid from '@/components/partials/ServicesGrid/ServicesGrid';

export default function page() {
  return (
    <main>
      {/* section 1 */}
      <section className="relative w-full h-screen py-[100px] md:px-6 lg:px-10 flex bg-[url('/png/cne/home/asset-hero-home-cne.webp')] bg-cover bg-center bg-no-repeat min-h-screen justify-center overflow-x-hidden border-b-[8px] md:border-b-[10px] border-blue-600"></section>

      {/* section 2 */}
      <section className="flex flex-col overflow-x-hidden py-[50px] md:py-[50px]">
        <div className="container flex flex-col items-center justify-center gap-y-16 w-full lg:mt-[60px]">
          <h1 className="uppercase font-semibold text-gray-500 text-2xl md:text-3xl lg:text-5xl">
            about gainmax <span className="text-blue-600">C&E</span>
          </h1>
          <div className="flex flex-col lg:flex-row gap-x-0 gap-y-7 lg:gap-x-20 lg:gap-y-0 justify-center items-center">
            {/* Logo */}
            <div className="flex flex-col gap-x-4 items-center justify-center gap-y-3">
              <Image src={Logo} alt="logo" className="w-[60px] h-[60px] md:w-[100px] md:h-[100px]" />
              <div className="flex flex-col items-center justify-center text-center">
                <h1 className="uppercase font-extrabold text-black text-xl">gainmax</h1>
                <h2 className="text-black text-sm">Construction & Engineering Pte Ltd</h2>
              </div>
            </div>

            {/* Desc */}
            <div className="flex flex-col gap-y-9 lg:w-[60%]">
              <h1 className="text-xl md:text-2xl lg:text-justify font-bold">Infrastructure Specialist</h1>
              <p className="text-xl md:text-2xl lg:text-justify">
                With over 22 years of market experience, we specialize in cutting-edge telecommunication infrastructure projects by providing a holistic suite of solutions, ensuring seamless connectivity for telecommunication operators and
                their users
              </p>
              <Link href="/gainmax-cne/introduction" className="text-xl text-blue-600 font-semibold">
                Read More &gt;
              </Link>
            </div>
          </div>
          <div className="border-b-[3px] border-blue-600 w-full"></div>
        </div>
      </section>

      {/* section 3 */}
      <section className="flex flex-col overflow-x-hidden py-[20px] md:py-[50px]">
        <div className="container flex flex-col items-center justify-center gap-y-16 w-full">
          <Image src={AssetHeroHomeCNE} alt="asset hero home cne" className="w-full h-auto md:h-[70vh] object-cover" />
          <div className="flex flex-col gap-y-8">
            <h1 className="flex flex-col gap-y-3 uppercase text-center">
              <span className="font-semibold text-black text-2xl md:text-3xl lg:text-5xl">planning & project</span>
              <span className="font-bold text-blue-600 text-2xl md:text-3xl lg:text-5xl">management</span>
            </h1>
            <div className="flex flex-col gap-y-8 w-full">
              <p className="text-2xl">Project management is the application of processes, methods, skills, knowledge and experience to achieve specific project objectives within agreed parameters with the client. </p>
              <p className="text-2xl">Project management has to meet the final deliverables that are constrained to a stipulated timeline and fulfilling clients, expectations.. </p>
            </div>

            {/* timeline */}
            <Image src={AssetTimelineHomeCNE} alt="asset hero home cne" className="w-full h-auto object-cover" />
          </div>
          <div className="border-b-[3px] border-blue-600 w-full"></div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="flex flex-col overflow-x-hidden py-[20px] md:py-[50px]">
        <div className="container flex flex-col items-center justify-center gap-y-16 w-full">
          <h1 className="uppercase font-semibold text-gray-500 text-2xl md:text-3xl lg:text-5xl">
            our <span className="text-blue-600">services</span>
          </h1>
          <ServiceGrid />
          <div className="border-b-[3px] border-blue-600 w-full"></div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="flex flex-col overflow-x-hidden py-[20px] md:py-[50px]">
        <div className="container flex flex-col items-center justify-center gap-y-16 w-full">
          <h1 className="uppercase font-semibold text-gray-500 text-2xl md:text-3xl lg:text-5xl">
            c&e <span className="text-blue-600">portfolio</span>
          </h1>
        </div>
      </section>
    </main>
  );
}
