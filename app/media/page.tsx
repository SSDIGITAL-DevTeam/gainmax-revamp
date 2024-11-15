'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CesgLogo from '@/assets/media/cesg_logo.png';
import SMELOGO from '@/assets/media/sme-logo.png';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

// Media SME
import AssetMediaSME1 from '@/assets/media/sme100/1.webp';
import AssetMediaSME2 from '@/assets/media/sme100/2.webp';
import AssetMediaSME3 from '@/assets/media/sme100/3.webp';
import AssetMediaSME4 from '@/assets/media/sme100/4.webp';
import AssetMediaSME5 from '@/assets/media/sme100/5.webp';

// Media CESG
import AssetMediaCESG1 from '@/assets/media/cesg/1.jpg';
import AssetMediaCESG2 from '@/assets/media/cesg/2.jpg';
import AssetMediaCESG3 from '@/assets/media/cesg/3.jpg';
import AssetMediaCESG4 from '@/assets/media/cesg/4.jpg';
import AssetMediaCESG5 from '@/assets/media/cesg/5.jpeg';
import AssetMediaCESG6 from '@/assets/media/cesg/6.jpeg';

export default function page() {
  return (
    <main>
      {/* section 1 */}
      <section className="relative w-full h-screen py-[100px] md:px-6 lg:px-10 flex bg-[url('/png/media/asset-hero-home.webp')] bg-cover bg-center bg-no-repeat min-h-screen justify-center overflow-x-hidden border-b-[8px] md:border-b-[10px] border-slate-600"></section>

      {/* section 2 */}
      <section className="flex flex-col overflow-x-hidden py-[50px] md:py-[50px]">
        <div className="container flex flex-col items-center justify-center gap-y-16 w-full lg:mt-[60px]">
          <Image src={CesgLogo} alt="CESG logo" className="w-[10rem] md:w-[20rem]" />
          <h1 className="uppercase font-semibold text-gray-500 text-2xl md:text-3xl lg:text-5xl">
            CLEAN ENVIRO <span className="text-slate-600">SUMMIT 2024</span>
          </h1>
          <div className="flex flex-col gap-y-3 text-lg text-justify">
            <p>
              The sixth biennial CleanEnviro Summit Singapore (CESG) organised by Singapore's National Environment Agency in conjunction with Singapore International Water Week 2024 was held from 19 to 21 June 2024 at Sands Expo &
              Convention Centre. Themed ‘Action for a Sustainable and Clean Environment’, it was a global platform where thought leaders, industry captains and policymakers convened to explore solutions for a sustainable and clean
              environment.
            </p>
            <p>Gainmax Construction and Engineering Pte Ltd was one of the many exhibitors in this summit where we showcased our latest green energy products like solar panels, energy storage systems, solar water heaters etc.</p>
          </div>
          {/* carousel */}
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
          >
            <CarouselContent>
              <CarouselItem className=" md:basis-1/3 lg:basis-1/5">
                <Image src={AssetMediaCESG1} alt="CESG 1" className="rounded-md" />
              </CarouselItem>
              <CarouselItem className=" md:basis-1/3 lg:basis-1/5">
                <Image src={AssetMediaCESG2} alt="CESG 2" className="rounded-md" />
              </CarouselItem>
              <CarouselItem className=" md:basis-1/3 lg:basis-1/5">
                <Image src={AssetMediaCESG3} alt="CESG 3" className="rounded-md" />
              </CarouselItem>
              <CarouselItem className=" md:basis-1/3 lg:basis-1/5">
                <Image src={AssetMediaCESG4} alt="CESG 4" className="rounded-md" />
              </CarouselItem>
              <CarouselItem className=" md:basis-1/3 lg:basis-1/5">
                <Image src={AssetMediaCESG5} alt="CESG 5" className="rounded-md" />
              </CarouselItem>
              <CarouselItem className=" md:basis-1/3 lg:basis-1/5">
                <Image src={AssetMediaCESG6} alt="CESG 6" className="rounded-md" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="border-b-[3px] border-slate-600 w-full"></div>
        </div>
      </section>

      {/* section 3 */}
      <section className="flex flex-col overflow-x-hidden py-[50px] md:py-[50px]">
        <div className="container flex flex-col items-center justify-center gap-y-16 w-full lg:mt-[60px]">
          <Image src={SMELOGO} alt="SME logo" className="w-[10rem] md:w-[20rem]" />
          <h1 className=" font-semibold text-gray-500 text-2xl md:text-3xl lg:text-5xl">
            THE <span className="text-slate-600">PREMIER AWARDS FOR SMEs</span>
          </h1>
          <div className="flex flex-col gap-y-3 text-lg text-justify">
            <p>
              Since 2009, the SME100® has served as the pinnacle of trust and benchmark of reliability among business owners. Independently verified and data driven, SME100® is an assurance to potential partners, investors and customers
              that your company has achieved a level of success beyond the ordinary
            </p>
            <p>
              GThe Awards identify and recognise SMEs based on a basket of quantitative and qualitative criteria with a focus on growth (turnover, profit and market share) and resilience (best practices, sustainability and vision). Gainmax
              Construction and Engineering Pte Ltd Founders, Spencer and Alex Chia, along with Director, Irene Khor have been awarded the prestigious SME100 Awards 2024. Spencer Chia, SME100 Award Alex Chia, BMI Sustainable Brand Awards
              Irene Khor, BMI Women Entrepreneur Awards
            </p>
          </div>
          {/* carousel */}
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
          >
            <CarouselContent>
              <CarouselItem className=" md:basis-1/3 lg:basis-1/4">
                <Image src={AssetMediaSME1} alt="SME 1" className="rounded-md" />
              </CarouselItem>
              <CarouselItem className=" md:basis-1/3 lg:basis-1/4">
                <Image src={AssetMediaSME2} alt="SME 2" className="rounded-md" />
              </CarouselItem>
              <CarouselItem className=" md:basis-1/3 lg:basis-1/4">
                <Image src={AssetMediaSME3} alt="SME 3" className="rounded-md" />
              </CarouselItem>
              <CarouselItem className=" md:basis-1/3 lg:basis-1/4">
                <Image src={AssetMediaSME4} alt="SME 4" className="rounded-md" />
              </CarouselItem>
              <CarouselItem className=" md:basis-1/3 lg:basis-1/4">
                <Image src={AssetMediaSME5} alt="SME 5" className="rounded-md" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="border-b-[3px] border-slate-600 w-full"></div>
        </div>
      </section>
    </main>
  );
}
