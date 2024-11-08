import React from 'react';
import Logo from '@/assets/logo/svg/logo.svg';
import Image from 'next/image';
import LogoWhite from '@/assets/logo/svg/logo-white.svg';
import AssetIntroductionInt from '@/assets/int/asset-introduction-int.webp';

export default function page() {
  return (
    <main>
      <header className="relative w-full min-h-[80vh] py-[100px] md:px-6 lg:px-10 flex mt-[40px] md:mt-[110px] lg:mt-[150px]">
        <div className="container flex flex-col items-center justify-center gap-y-16 w-full">
          <h1 className="uppercase font-semibold text-gray-500 text-2xl md:text-3xl lg:text-5xl">
            about gainmax <span className="text-green-600">I&T</span>
          </h1>
          <div className="flex flex-col lg:flex-row gap-x-0 gap-y-7 lg:gap-x-20 lg:gap-y-0 items-center justify-center lg:items-start lg:justify-start">
            {/* Logo */}
            <div className="flex flex-col gap-x-4 gap-y-3 items-center justify-center  lg:justify-start">
              <Image src={Logo} alt="logo" className="w-[60px] h-[60px] md:w-[100px] md:h-[100px]" />
              <div className="flex flex-col items-center justify-center text-center">
                <h1 className="uppercase font-extrabold text-black text-xl">gainmax</h1>
                <h2 className="text-black text-sm">Innovation & Technology Pte Ltd</h2>
              </div>
            </div>

            {/* Desc */}
            <div className="flex flex-col gap-y-9 lg:w-[90%]">
              <h1 className="text-xl md:text-2xl text-justify font-bold">The source of green tech products & solutions</h1>
              <p className="text-xl md:text-2xl text-justify">We believe in building an environmentally friendly and sustainable future. The commitment to be greener through innovation and influence, continues to drive us.</p>
              <p className="text-xl md:text-2xl text-justify">
                Over the past years, we assisted many clients produce and consume green energy according to their requirements and needs, saving much on CO2 emission. This has motivated us to create and innovate in attaining net zero level
                of greenhouse gas (GHG) emissions by 2050
              </p>
              <p className="text-xl md:text-2xl text-justify">Under our realm, a wide range of green-tech products and solutions spanning from solar panels to EV chargers to meet diverse needs.</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container flex flex-col overflow-x-hidden mb-[80px] lg:mb-[100px]">
        <Image src={AssetIntroductionInt} alt="hero" className="w-full lg:h-[80vh] object-cover object-center rounded-3xl" />
      </section>
    </main>
  );
}
