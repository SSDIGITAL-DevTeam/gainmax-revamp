'use client';

import Logo from '@/assets/logo/svg/logo.svg';
import LogoWhite from '@/assets/logo/svg/logo-white.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="">
      {/* section 1 */}
      <section className="relative w-full h-screen py-[100px] md:px-6 lg:px-10 flex bg-[url('/png/home/assets-home-hero.png')] bg-cover bg-center bg-no-repeat min-h-screen justify-center overflow-x-hidden border-b-[8px] md:border-b-[10px] border-orange-600"></section>

      {/* section 2 */}
      <section className="flex flex-col overflow-x-hidden py-[20px] md:py-[50px]">
        <div className="container flex flex-col items-center justify-center gap-y-16 w-full lg:mt-[60px]">
          <h1 className="uppercase font-semibold text-gray-500 text-5xl">
            about gainmax <span className="text-orange-600">group</span>
          </h1>
          <div className="flex flex-col lg:flex-row gap-x-0 gap-y-7 lg:gap-x-20 lg:gap-y-0 justify-center items-center">
            {/* Logo */}
            <div className="flex flex-col gap-x-4 items-center justify-center gap-y-3">
              <Image src={Logo} alt="logo" className="w-[60px] h-[60px] md:w-[100px] md:h-[100px]" />
              <div className="md:flex flex-col items-center justify-center text-center hidden">
                <h1 className="uppercase font-extrabold text-black text-xl">gainmax</h1>
                <h2 className="text-black text-sm">Group Pte Ltd</h2>
              </div>
            </div>

            {/* Desc */}
            <div className="flex flex-col gap-y-9 w-[60%]">
              <p className="text-2xl text-justify">Gainmax was established in 2001 as a family-owned enterprise, primarily focused on subcontracting projects within the telecommunications industry.</p>
              <Link href="/" className="text-xl text-orange-600 font-semibold">
                Read More &gt;
              </Link>
            </div>
          </div>
          <div className="border-b-[3px] border-orange-600 w-full"></div>
        </div>
      </section>

      {/* section 3 */}
      <section className="flex flex-col overflow-x-hidden py-[20px] md:py-[50px] gap-y-16">
        <div className="container flex flex-col items-center justify-center w-full bg-[url('/png/home/asset-section-3.webp')] bg-cover bg-center bg-no-repeat min-h-[80vh]">
          <div className="w-full flex justify-end">
            <div className="w-full md:w-1/2 flex flex-col space-y-20 p-6">
              {/* Vision Section */}
              <div className="space-y-2">
                <h2 className="text-5xl font-bold">
                  <span className="text-black">OUR </span>
                  <span className="text-orange-500">VISION</span>
                </h2>
                <p className="text-black text-2xl">Simplifying complexities and offering effective sustainable solutions accessible to all.</p>
              </div>

              {/* Mission Section */}
              <div className="space-y-2">
                <h2 className="text-5xl font-bold">
                  <span className="text-black">OUR </span>
                  <span className="text-orange-500">MISSION</span>
                </h2>
                <p className="text-black text-2xl">We aim to enhance sustainability through technology experiences by delivering innovative, reliable, and tailored products and services that surpass the expectations of our customers.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container border-b-[3px] border-orange-600 w-full"></div>
      </section>

      {/* section 4 */}
      <section className="flex flex-col overflow-x-hidden py-[20px] md:py-[50px]">
        <div className="container flex flex-col items-center justify-center gap-y-16 w-full">
          <h1 className="uppercase font-semibold text-gray-500 text-5xl">
            group <span className="text-orange-600">of companies</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
            {/* Card 1 */}
            <div className="bg-blue-500 p-10 flex flex-col gap-y-8">
              {/* Logo */}
              <div className="flex flex-col gap-x-4 items-center justify-center gap-y-3">
                <Image src={LogoWhite} alt="LogoWhite" className="w-[60px] h-[60px] md:w-[100px] md:h-[100px]" />
                <div className="md:flex flex-col items-center justify-center text-center hidden">
                  <h1 className="uppercase font-extrabold text-white text-xl">gainmax</h1>
                  <h2 className="text-white text-sm w-[80%]">Construction & Engineering Pte Ltd</h2>
                </div>
              </div>

              {/* Desc */}
              <p className="text-white w-full text-xl">Expertise in integrating systems for infrastructure projects, encompassing signaling systems, mobile infrastructure networks, AI cameras, and PV system installations.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-green-600 p-10 flex flex-col gap-y-8">
              {/* LogoWhite */}
              <div className="flex flex-col gap-x-4 items-center justify-center gap-y-3">
                <Image src={LogoWhite} alt="LogoWhite" className="w-[60px] h-[60px] md:w-[100px] md:h-[100px]" />
                <div className="md:flex flex-col items-center justify-center text-center hidden">
                  <h1 className="uppercase font-extrabold text-white text-xl">gainmax</h1>
                  <h2 className="text-white text-sm w-[80%]">Innovation & Technology Pte Ltd</h2>
                </div>
              </div>

              {/* Desc */}
              <p className="text-white w-full text-xl">
                An EPC company specializing in solar and energy storage systems. Also a distributor of clean & green energy products including solar panels, inverters, solar water heater systems, hybrid air conditioners, EV chargers, and
                providing designed solution of energy storage system integration.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-yellow-500 p-10 flex flex-col gap-y-8">
              {/* LogoWhite */}
              <div className="flex flex-col gap-x-4 items-center justify-center gap-y-3">
                <Image src={LogoWhite} alt="LogoWhite" className="w-[60px] h-[60px] md:w-[100px] md:h-[100px]" />
                <div className="md:flex flex-col items-center justify-center text-center hidden">
                  <h1 className="uppercase font-extrabold text-white text-xl">gainmax</h1>
                  <h2 className="text-white text-sm w-[80%]">Consultacy & Partnership Pte Ltd</h2>
                </div>
              </div>

              {/* Desc */}
              <p className="text-white w-full text-xl">
                Advocate for sustainability while leveraging on government grants to provide ESG (Environmental, Social, and Governance) reporting. Enhance manufacturing processes to boost productivity and efficiency levels.
              </p>
            </div>
          </div>
          <div className="border-b-[3px] border-orange-600 w-full"></div>
        </div>
      </section>

      {/* section 5 */}
      <section className="flex flex-col overflow-x-hidden py-[20px] md:py-[50px]">
        <div className="container flex flex-col items-center justify-center gap-y-16 w-full">
          <h1 className="uppercase font-semibold text-gray-500 text-5xl">
            key <span className="text-orange-600">group</span>
          </h1>
          
          <div className="border-b-[3px] border-orange-600 w-full"></div>
        </div>
      </section>
    </main>
  );
}
