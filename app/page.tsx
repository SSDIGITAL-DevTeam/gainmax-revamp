'use client';

import React from 'react';
import Logo from '@/assets/logo/svg/logo.svg';
import LogoWhite from '@/assets/logo/svg/logo-white.svg';
import AssetsKeyMilestones from '@/assets/group/introduction/assets-key-milestones.webp';
import AssetTimeline from '@/assets/group/asset-timeline.png';
// Brand
import AssetBrand1 from '@/assets/group/brand/asset-brand-1.png';
import AssetBrand2 from '@/assets/group/brand/asset-brand-2.png';
import AssetBrand3 from '@/assets/group/brand/asset-brand-3.png';
import AssetBrand4 from '@/assets/group/brand/asset-brand-4.png';
import AssetBrand5 from '@/assets/group/brand/asset-brand-5.png';
import AssetBrand6 from '@/assets/group/brand/asset-brand-6.png';

import Image from 'next/image';
import Link from 'next/link';
import { HeaderSwiper } from './_components/HeaderSwiper';

export default function Home() {
  return (
    <main className="">
      {/* section 1 */}
      <section className="flex flex-col overflow-x-hidden">
        <HeaderSwiper />
      </section>

      {/* section 2 */}
      <section className="flex flex-col overflow-x-hidden py-[50px] md:py-[50px]">
        <div className="container flex flex-col items-center justify-center gap-y-16 w-full lg:mt-[60px]">
          <h1 className="uppercase font-semibold text-gray-500 text-2xl md:text-3xl lg:text-5xl">
            about gainmax <span className="text-orange-600">group</span>
          </h1>
          <div className="flex flex-col lg:flex-row gap-x-0 gap-y-7 lg:gap-x-20 lg:gap-y-0 justify-center items-center">
            {/* Logo */}
            <div className="flex flex-col gap-x-4 items-center justify-center gap-y-3">
              <Image src={Logo} alt="logo" className="w-[60px] h-[60px] md:w-[100px] md:h-[100px]" />
              <div className="flex flex-col items-center justify-center text-center">
                <h1 className="uppercase font-extrabold text-black text-xl">gainmax</h1>
                <h2 className="text-black text-sm">Group Pte Ltd</h2>
              </div>
            </div>

            {/* Desc */}
            <div className="flex flex-col gap-y-9 lg:w-[60%]">
              <p className="text-xl md:text-2xl lg:text-justify">Gainmax was established in 2001 as a family-owned enterprise, primarily focused on subcontracting projects within the telecommunications industry.</p>
              <Link href="/gainmax-group/introduction" className="text-xl text-orange-600 font-semibold">
                Read More &gt;
              </Link>
            </div>
          </div>
          <div className="border-b-[3px] border-orange-600 w-full"></div>
        </div>
      </section>

      {/* section 3 */}
      <section id="vision" className="flex flex-col overflow-x-hidden py-[20px] md:py-[50px] gap-y-16">
        <div className="container flex flex-col items-center justify-center w-full bg-[url('/png/home/asset-section-3.webp')] bg-cover bg-center bg-no-repeat min-h-[80vh]">
          <div className="w-full flex justify-end">
            <div className="w-full md:w-1/2 flex flex-col space-y-20 py-24 md:py-0 lg:p-6">
              {/* Vision Section */}
              <div className="space-y-2">
                <h2 className="text-3xl md:text-5xl font-bold">
                  <span className="text-black">OUR </span>
                  <span className="text-orange-500">VISION</span>
                </h2>
                <p className="text-black text-xl md:text-2xl lg:text-justify">Simplifying complexities and offering effective sustainable solutions accessible to all.</p>
              </div>

              {/* Mission Section */}
              <div className="space-y-2">
                <h2 className="text-3xl md:text-5xl font-bold">
                  <span className="text-black">OUR </span>
                  <span className="text-orange-500">MISSION</span>
                </h2>
                <p className="text-black text-xl md:text-2xl lg:text-justify">
                  We aim to enhance sustainability through technology experiences by delivering innovative, reliable, and tailored products and services that surpass the expectations of our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container w-full px-[2rem] lg:px-0">
          <div className="border-b-[3px] border-orange-600 w-full"></div>
        </div>
      </section>

      {/* section 4 */}
      <section id="group" className="flex flex-col overflow-x-hidden py-[20px] md:py-[50px]">
        <div className="container flex flex-col items-center justify-center gap-y-16 w-full">
          <h1 className="uppercase font-semibold text-gray-500 text-2xl md:text-3xl lg:text-5xl">
            group <span className="text-orange-600">of companies</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-y-0 md:gap-x-10">
            {/* Card 1 */}
            <div className="bg-blue-500 p-10 flex flex-col gap-y-8">
              {/* Logo */}
              <div className="flex flex-col gap-x-4 items-center justify-center gap-y-3">
                <Image src={LogoWhite} alt="LogoWhite" className="w-[60px] h-[60px] md:w-[100px] md:h-[100px]" />
                <div className="flex flex-col items-center justify-center text-center">
                  <h1 className="uppercase font-extrabold text-white text-xl">gainmax</h1>
                  <h2 className="text-white text-sm w-[80%]">Construction & Engineering Pte Ltd</h2>
                </div>
              </div>

              {/* Desc */}
              <p className="text-white w-full text-lg md:text-xl">Expertise in integrating systems for infrastructure projects, encompassing signaling systems, mobile infrastructure networks, AI cameras, and PV system installations.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-green-600 p-10 flex flex-col gap-y-8">
              {/* LogoWhite */}
              <div className="flex flex-col gap-x-4 items-center justify-center gap-y-3">
                <Image src={LogoWhite} alt="LogoWhite" className="w-[60px] h-[60px] md:w-[100px] md:h-[100px]" />
                <div className="flex flex-col items-center justify-center text-center">
                  <h1 className="uppercase font-extrabold text-white text-xl">gainmax</h1>
                  <h2 className="text-white text-sm w-[80%]">Innovation & Technology Pte Ltd</h2>
                </div>
              </div>

              {/* Desc */}
              <p className="text-white w-full text-lg md:text-xl">
                An EPC company specializing in solar and energy storage systems. Also a distributor of clean & green energy products including solar panels, inverters, solar water heater systems, hybrid air conditioners, EV chargers, and
                providing designed solution of energy storage system integration.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-yellow-500 p-10 flex flex-col gap-y-8">
              {/* LogoWhite */}
              <div className="flex flex-col gap-x-4 items-center justify-center gap-y-3">
                <Image src={LogoWhite} alt="LogoWhite" className="w-[60px] h-[60px] md:w-[100px] md:h-[100px]" />
                <div className="flex flex-col items-center justify-center text-center">
                  <h1 className="uppercase font-extrabold text-white text-xl">gainmax</h1>
                  <h2 className="text-white text-sm w-[80%]">Consultacy & Partnership Pte Ltd</h2>
                </div>
              </div>

              {/* Desc */}
              <p className="text-white w-full text-lg md:text-xl">
                Advocate for sustainability while leveraging on government grants to provide ESG (Environmental, Social, and Governance) reporting. Enhance manufacturing processes to boost productivity and efficiency levels.
              </p>
            </div>
          </div>
          <div className="border-b-[3px] border-orange-600 w-full"></div>
        </div>
      </section>

      {/* section 5 */}
      <section id="milestones" className="flex flex-col overflow-x-hidden py-[20px] md:py-[50px]">
        <div className="container flex flex-col items-center justify-center gap-y-16 w-full">
          <h1 className="uppercase font-semibold text-gray-500 text-5xl">
            key <span className="text-orange-600">milestones</span>
          </h1>
          <Image src={AssetsKeyMilestones} alt="AssetsKeyMilestones" className="w-full" />
          <Image src={AssetTimeline} alt="AssetTimeline" className="w-full" />
          <div className="border-b-[3px] border-orange-600 w-full"></div>
        </div>
      </section>

      {/* section 6 */}
      <section id="awards" className="flex flex-col overflow-x-hidden py-[20px] md:py-[50px] gap-y-16">
        <div className="container flex flex-col items-center justify-center w-full bg-[url('/png/home/asset-award-section.webp')] bg-cover bg-center bg-no-repeat min-h-[80vh]">
          <div className="w-full flex">
            <div className="w-full md:w-1/2 flex flex-col space-y-20 py-24 md:py-0 lg:p-6">
              <div className="space-y-9">
                <h2 className="text-3xl md:text-5xl font-bold">
                  <span className="text-white">AWARDS </span>
                  <br />
                  <span className="text-orange-500">& CERTIFICATIONS</span>
                </h2>
                <p className="text-white text-xl md:text-2xl">Gainmax has achieved the status of BizSAFE STAR, all thanks to our dedicated and experienced team.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container w-full px-[2rem] lg:px-0">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-7 items-center">
            <Image src={AssetBrand1} alt="AssetBrand1" className="w-[80%]" />
            <Image src={AssetBrand2} alt="AssetBrand2" className="w-[80%]" />
            <Image src={AssetBrand3} alt="AssetBrand3" className="w-[80%]" />
            <Image src={AssetBrand4} alt="AssetBrand4" className="w-[80%]" />
            <Image src={AssetBrand5} alt="AssetBrand5" className="w-[80%]" />
            <Image src={AssetBrand6} alt="AssetBrand6" className="w-[80%]" />
          </div>
          <div className="border-b-[3px] border-orange-600 w-full"></div>
        </div>
      </section>

      {/* section 7 */}
      <section id="careers" className="flex flex-col overflow-x-hidden py-[20px] md:py-[50px] gap-y-16">
        <div className="container flex flex-col items-center justify-center w-full bg-[url('/png/home/assets-section-careers.webp')] bg-cover bg-center bg-no-repeat min-h-[80vh]">
          <div className="flex w-full">
            <div className="w-full md:w-1/2 flex flex-col space-y-14 py-24 md:py-0 lg:p-6">
              <h2 className="text-3xl md:text-5xl font-bold text-orange-500 uppercase">careers</h2>
              <div className="flex flex-col gap-y-4">
                <p className="text-xl md:text-2xl">At Gainmax Group, we empower and encourage our people to unlock their potential in creating. We welcome innovative and like-minded thinkers to join this dynamic team.</p>
                <p className="text-xl md:text-2xl">Together, let's make a possible impact on people and our planet.</p>
              </div>
              <Link href="/" className="bg-orange-500 hover:bg-orange-500/90 self-start py-3 px-8 rounded-full text-white text-xl">
                Upload Resume
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
