"use client";

import Image from "next/image";
import Logo from "@/assets/logo/svg/logo.svg";
import AssetSection2INT from "@/assets/int/asset-section2-int.webp";
import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <main>
      {/* section 1 */}
      <section className="relative w-full h-screen py-[100px] md:px-6 lg:px-10 flex bg-[url('/png/int/home/asset-hero-home.webp')] bg-cover bg-center bg-no-repeat min-h-screen justify-center overflow-x-hidden border-b-[8px] md:border-b-[10px] border-green-600"></section>

      {/* section 2 */}
      <section className="flex flex-col overflow-x-hidden py-[50px] md:py-[50px]">
        <div className="container p-4 md:p-8 flex flex-col items-center justify-center gap-y-16 w-full lg:mt-[60px]">
          <h1 className="uppercase font-semibold text-gray-500 text-2xl md:text-3xl lg:text-5xl">
            about gainmax <span className="text-green-600">I&T</span>
          </h1>
          <div className="flex flex-col lg:flex-row gap-x-0 gap-y-7 lg:gap-x-20 lg:gap-y-0 justify-center items-center">
            {/* Logo */}
            <div className="flex flex-col gap-x-4 items-center justify-center gap-y-3">
              <Image
                src={Logo}
                alt="logo"
                className="w-[60px] h-[60px] md:w-[100px] md:h-[100px]"
              />
              <div className="flex flex-col items-center justify-center text-center">
                <h1 className="uppercase font-extrabold text-black text-xl">
                  gainmax
                </h1>
                <h2 className="text-black text-sm">
                  Innovation & Technology Pte Ltd
                </h2>
              </div>
            </div>

            {/* Desc */}
            <div className="flex flex-col gap-y-9 lg:w-[60%]">
              <h1 className="text-xl md:text-2xl lg:text-justify font-bold">
                The source of green tech products & solutions
              </h1>
              <p className="text-xl md:text-2xl lg:text-justify">
                We believe in building an environmentally friendly and
                sustainable future. The commitment to be greener through
                innovation and influence, continues to drive us.
              </p>
              <Link
                href="/gainmax-int/introduction"
                className="text-xl text-green-600 font-semibold"
              >
                Read More &gt;
              </Link>
            </div>
          </div>
          <div className="border-b-[3px] border-green-600 w-full"></div>
        </div>
      </section>

      {/* section 3 */}
      <section className="flex flex-col overflow-x-hidden py-[20px] md:py-[50px]">
        <div className="container p-4 md:p-8 flex flex-col items-center justify-center gap-y-16 w-full">
          <h1 className="flex flex-col gap-y-3 uppercase text-center">
            <span className="font-semibold text-black text-2xl md:text-3xl lg:text-5xl">
              EMPOWERING TOMORROW WITH
            </span>
            <span className="font-bold text-green-600 text-2xl md:text-3xl lg:text-5xl">
              SOLAR ENERGY TODAY
            </span>
          </h1>
          <div className="flex flex-col gap-y-8">
            <Image
              src={AssetSection2INT}
              alt="asset hero home cne"
              className="w-full h-auto md:h-[70vh] object-cover"
            />
            <div className="flex flex-col gap-y-8 w-full">
              <p className="text-2xl">
                Initially focusing on subcontracting projects, we expanded our
                services to encompass Engineering, Procurement, and Construction
                (EPC) projects, serving clients in solar industry.
              </p>
              <p className="text-2xl">
                From Development to Maintenance: Your One-Stop Solar Solution
                for Industrial, Commercial, and Residential Buildings.
                Empowering Energy and Cost Savings Efficiently.{" "}
              </p>
            </div>
          </div>
          <div className="border-b-[3px] border-green-600 w-full"></div>
        </div>
      </section>

      {/* section 4 */}
      <section className="flex flex-col overflow-x-hidden mb-4">
        <div className="container p-4 md:p-8 flex flex-col items-center justify-center gap-y-16 w-full">
          <div className="flex flex-col gap-y-8">
            <h1 className="flex flex-col gap-y-3 uppercase text-center">
              <span className="font-semibold text-black text-2xl md:text-3xl lg:text-5xl">
                PRODUCTS <span className="text-green-600"> & SERVICES</span>
              </span>
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
            <Link
              href="/gainmax-int/products-services"
              className="relative items-center justify-center flex bg-[url('/png/int/home/services/asset-service-1.webp')] bg-cover bg-center bg-no-repeat w-full min-h-[370px] p-10 rounded-lg"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-35 rounded-lg" />
              <p className="text-white text-xl font-semibold relative z-10">
                Solar Panels
              </p>
            </Link>
            <Link
              href="/gainmax-int/products-services"
              className="relative items-center justify-center flex bg-[url('/png/int/home/services/asset-service-2.webp')] bg-cover bg-center bg-no-repeat w-full min-h-[370px] p-10 rounded-lg"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-35 rounded-lg" />
              <p className="text-white text-xl font-semibold relative z-10">
                Solar Lights
              </p>
            </Link>
            <Link
              href="/gainmax-int/products-services"
              className="relative items-center justify-center flex bg-[url('/png/int/home/services/asset-service-3.webp')] bg-cover bg-center bg-no-repeat w-full min-h-[370px] p-10 rounded-lg"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-35 rounded-lg" />
              <p className="text-white text-xl font-semibold relative z-10">
                Solar EV Chargers
              </p>
            </Link>
            <Link
              href="/gainmax-int/products-services"
              className="relative items-center justify-center flex bg-[url('/png/int/home/services/asset-service-4.webp')] bg-cover bg-center bg-no-repeat w-full min-h-[370px] p-10 rounded-lg"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-35 rounded-lg" />
              <p className="text-white text-xl font-semibold relative z-10">
                Solar Film
              </p>
            </Link>
            <Link
              href="/gainmax-int/products-services"
              className="relative items-center justify-center flex bg-[url('/png/int/home/services/asset-service-5.webp')] bg-cover bg-center bg-no-repeat w-full min-h-[370px] p-10 rounded-lg"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-35 rounded-lg" />
              <p className="text-white text-xl font-semibold relative z-10">
                Solar Water Heater
              </p>
            </Link>
            <Link
              href="/gainmax-int/products-services"
              className="relative items-center justify-center flex bg-[url('/png/int/home/services/asset-service-6.webp')] bg-cover bg-center bg-no-repeat w-full min-h-[370px] p-10 rounded-lg"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-35 rounded-lg" />
              <p className="text-white text-xl font-semibold relative z-10">
                Hybrid Aircon
              </p>
            </Link>
            <Link
              href="/gainmax-int/products-services"
              className="relative items-center justify-center flex bg-[url('/png/int/home/services/asset-service-7.webp')] bg-cover bg-center bg-no-repeat w-full min-h-[370px] p-10 rounded-lg"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-35 rounded-lg" />
              <p className="text-white text-xl font-semibold relative z-10">
                Energy Storage System Solutions
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
