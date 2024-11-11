'use client';

import Image from 'next/image';
import Logo from '@/assets/logo/svg/logo.svg';
import AssetSection3Cnp from '@/assets/cnp/asset-home-section-3.webp';
import React from 'react';
import Link from 'next/link';

export default function page() {
  return (
    <main>
      {/* section 1 */}
      <section className="relative w-full h-screen py-[100px] md:px-6 lg:px-10 flex bg-[url('/png/cnp/asset-hero-home.webp')] bg-cover bg-center bg-no-repeat min-h-screen justify-center overflow-x-hidden border-b-[8px] md:border-b-[10px] border-orange-300"></section>

      {/* section 2 */}
      <section className="flex flex-col overflow-x-hidden py-[50px] md:py-[50px]">
        <div className="container flex flex-col items-center justify-center gap-y-16 w-full lg:mt-[60px]">
          <h1 className="uppercase font-semibold text-gray-500 text-2xl md:text-3xl lg:text-5xl">
            about gainmax <span className="text-orange-300">C&P</span>
          </h1>
          <div className="flex flex-col lg:flex-row gap-x-0 gap-y-7 lg:gap-x-20 lg:gap-y-0 justify-center items-center">
            {/* Logo */}
            <div className="flex flex-col gap-x-4 items-center justify-center gap-y-3">
              <Image src={Logo} alt="logo" className="w-[60px] h-[60px] md:w-[100px] md:h-[100px]" />
              <div className="flex flex-col items-center justify-center text-center">
                <h1 className="uppercase font-extrabold text-black text-xl">gainmax</h1>
                <h2 className="text-black text-sm">Consultancy & Partnership Pte Ltd</h2>
              </div>
            </div>

            {/* Desc */}
            <div className="flex flex-col gap-y-9 lg:w-[60%]">
              <p className="text-xl md:text-2xl lg:text-justify">
                Sustainability means that environmental, social, and economic aspects collaborate for the benefit of both people and the planet. It's essential for every organization, regardless of its context or offerings, to adopt
                sustainability practices.
              </p>
              <Link href="/gainmax-cnp/introduction" className="text-xl text-orange-300 font-semibold">
                Read More &gt;
              </Link>
            </div>
          </div>
          <div className="border-b-[3px] border-orange-300 w-full"></div>
        </div>
      </section>

      {/* section 3 */}
      <section className="flex flex-col overflow-x-hidden py-[20px] md:py-[50px]">
        <div className="container flex flex-col items-center justify-center gap-y-16 w-full">
          <Image src={AssetSection3Cnp} alt="asset hero home cne" className="w-full h-auto md:h-[70vh] object-cover" />
          <div className="flex flex-col gap-y-8">
            <h1 className="flex flex-col gap-y-3 uppercase">
              <span className="font-semibold text-black text-2xl md:text-3xl lg:text-5xl">PARTNERSHIP</span>
              <span className="font-bold text-orange-300 text-2xl md:text-3xl lg:text-5xl">& COLLABORATION</span>
            </h1>
            <div className="flex flex-col gap-y-8 w-full">
              <p className="text-2xl">
                We offer a broad range of services to assist companies with their green efforts, including conducting company assessments on energy, water, carbon, waste, hazardous materials, environmental impacts, and more. As your
                partner, we can devise an overall strategy for sustainability plans..
              </p>
              <Link href="/gainmax-cnp/" className="text-xl text-orange-300 font-semibold">
                Read More &gt;
              </Link>
            </div>
          </div>
          <div className="border-b-[3px] border-orange-300 w-full"></div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="flex flex-col overflow-x-hidden py-[20px] md:py-[50px] gap-y-16">
        <div className="container relative flex flex-col items-center justify-center w-full bg-[url('/png/cnp/assets-section-4-cnp.webp')] bg-cover bg-center bg-no-repeat min-h-[80vh]">
          <div className="absolute bottom-7 right-7 p-4">
            <h1 className="text-3xl md:text-5xl font-semibold flex flex-col text-right text-white uppercase gap-y-3">
              <span>value</span>
              <span className="text-orange-300">proposition</span>
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
}
