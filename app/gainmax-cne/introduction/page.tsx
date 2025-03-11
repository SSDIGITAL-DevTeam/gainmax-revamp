import React from "react";
import Logo from "@/assets/logo/svg/logo.svg";
import Image from "next/image";
import LogoWhite from "@/assets/logo/svg/logo-white.svg";
import AssetHeroAboutSection from "@/assets/cne/introduction/asset-hero-about-section.webp";

export default function page() {
  return (
    <main>
      <header className="relative w-full min-h-[80vh] py-[100px] md:px-6 lg:px-10 flex mt-[40px] md:mt-[110px] lg:mt-[150px]">
        <div className="container p-4 md:p-8 flex flex-col items-center justify-center gap-y-16 w-full">
          <h1 className="uppercase font-semibold text-gray-500 text-2xl md:text-3xl lg:text-5xl">
            about gainmax <span className="text-blue-600">C&E</span>
          </h1>
          <div className="flex flex-col lg:flex-row gap-x-0 gap-y-7 lg:gap-x-20 lg:gap-y-0 items-center justify-center lg:items-start lg:justify-start">
            {/* Logo */}
            <div className="flex flex-col gap-x-4 items-center justify-center gap-y-3">
              <Image
                src={Logo}
                alt="logo"
                className="w-[60px] h-[60px] md:w-[100px] md:h-[100px]"
              />
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="uppercase font-extrabold text-black text-xl">
                  gainmax
                </h2>
                <p className="text-black text-sm">
                  Construction & Engineering Pte Ltd
                </p>
              </div>
            </div>

            {/* Desc */}
            <div className="flex flex-col gap-y-9 lg:w-[90%]">
              <h1 className="text-xl md:text-2xl text-justify font-bold">
                Infrastructure Specialist
              </h1>
              <p className="text-xl md:text-2xl text-justify">
                With over 22 years of market experience, we specialize in
                cutting-edge telecommunication infrastructure projects by
                providing a holistic suite of solutions, ensuring seamless
                connectivity for telecommunication operators and their users
              </p>
              <p className="text-xl md:text-2xl text-justify">
                Our expertise includes the construction and installation of
                vital components like signaling towers and antenna towers
                ensuring the system remains strong and robust.
              </p>
              <p className="text-xl md:text-2xl text-justify">
                Our cross-disciplinary teams are made up of professionals with
                different profiles and skills. These groups combine a variety of
                technical backgrounds, abilities, and interpersonal styles,
                which helps to achieve desired outcomes more efficiently.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="container p-4 md:p-8 flex flex-col overflow-x-hidden mb-[80px] lg:mb-[100px]">
        <Image
          src={AssetHeroAboutSection}
          alt="hero"
          className="w-full lg:h-[80vh] object-cover object-center rounded-3xl"
        />
      </section>
    </main>
  );
}
