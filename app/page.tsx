'use client';

import Logo from '@/assets/logo/svg/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="">
      {/* section 1 */}
      <section className="relative w-full h-screen py-[100px] md:px-6 lg:px-10 flex bg-[url('/png/home/assets-home-hero.png')] bg-cover bg-center bg-no-repeat min-h-screen justify-center overflow-x-hidden border-b-[8px] md:border-b-[10px] border-orange-600"></section>

      {/* section 2 */}
      <section className="flex flex-col overflow-x-hidden py-[20px] md:py-[50px] lg:py-[80px]">
        <div className="container flex flex-col items-center justify-center gap-y-14 w-full">
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
              <p className="text-xl text-justify">Gainmax was established in 2001 as a family-owned enterprise, primarily focused on subcontracting projects within the telecommunications industry.</p>
              <Link href="/" className="text-xl text-orange-600 font-semibold">
                Read More &gt;
              </Link>
            </div>
          </div>
          <div className="border-b-[3px] border-orange-600 w-full"></div>
        </div>
      </section>
    </main>
  );
}
