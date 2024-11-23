import React from 'react';
import Logo from '@/assets/logo/svg/logo.svg';
import Image from 'next/image';
import { IoSpeedometerOutline, IoEarth } from 'react-icons/io5';
import { PiWindmill, PiHandshake } from 'react-icons/pi';
import { FaMedapps } from 'react-icons/fa';

export default function page() {
  return (
    <main>
      <header className="relative w-full min-h-[80vh] py-[100px] md:px-6 lg:px-10 flex mt-[40px] md:mt-[110px] lg:mt-[150px]">
        <div className="container flex flex-col items-center justify-center w-full gap-y-24">
          <h1 className="uppercase font-semibold text-gray-500 text-2xl md:text-3xl lg:text-5xl text-center">
            Value <span className="text-orange-300">Proposition</span>
          </h1>
          <div className="flex flex-col gap-y-8 lg:gap-y-12 items-center w-full">
            {/* Item */}
            <div className="flex flex-col md:flex-row lg:gap-x-32 items-center justify-center w-full">
              <div className="flex items-center justify-center bg-[#859F3D] p-8 lg:p-10 rounded-tl-[5rem] rounded-br-[5rem]">
                <IoSpeedometerOutline className="text-white" size={90} />
              </div>
              <div className="flex flex-col gap-y-2">
                <h1 className="text-xl font-semibold text-black">Remote PV Performance Monitoring Service</h1>
                <p className="text-xl">As an additional value, Gainmax provides remote monitoring service for the PV System as a preventive and early warning system to ensure that the PV system is generating at its optimal level.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row lg:gap-x-32 items-center justify-center w-full">
              <div className="flex items-center justify-center bg-[#859F3D] p-8 lg:p-10 rounded-tl-[5rem] rounded-br-[5rem]">
                <FaMedapps className="text-white" size={90} />
              </div>
              <div className="flex flex-col gap-y-2">
                <h1 className="text-xl font-semibold text-black">Solar Preventive Maintenance</h1>
                <p className="text-xl">
                  Solar panels needs periodic cleaning and maintenance throughout their lifetime. This is because dust, debris, and the effects of the weather can impair the performance of the photovoltaic cells over time.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row lg:gap-x-32 items-center justify-center w-full">
              <div className="flex items-center justify-center bg-[#859F3D] p-8 lg:p-10 rounded-tl-[5rem] rounded-br-[5rem]">
                <PiHandshake className="text-white" size={90} />
              </div>
              <div className="flex flex-col gap-y-2">
                <h1 className="text-xl font-semibold text-black">Waste Management</h1>
                <p className="text-xl">Sustainable management of poultry waste like feces, manure, bone, blood, and carcasses by the CPCB as a way to recycle waste into wealth.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row lg:gap-x-32 items-center justify-center w-full">
              <div className="flex items-center justify-center bg-[#859F3D] p-8 lg:p-10 rounded-tl-[5rem] rounded-br-[5rem]">
                <PiWindmill className="text-white" size={90} />
              </div>
              <div className="flex flex-col gap-y-2">
                <h1 className="text-xl font-semibold text-black">Renewable Energy Certificates Facilitation</h1>
                <p className="text-xl">We facilitate the buying or selling or RECs in Singapore as well as overseas markets by providing a one-stop sourcing and consolidating service.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row lg:gap-x-32 items-center justify-center w-full">
              <div className="flex items-center justify-center bg-[#859F3D] p-8 lg:p-10 rounded-tl-[5rem] rounded-br-[5rem]">
                <IoEarth className="text-white" size={90} />
              </div>
              <div className="flex flex-col gap-y-2">
                <h1 className="text-xl font-semibold text-black">Carbon Tracking and Sustainability Reporting</h1>
                <p className="text-xl">
                  We assess and track your carbon emissions in your organization and provide annual report based on international recognized standard. We are your partner in helping you reduce your emissions to achieve a carbon-neutral or
                  net-zero state.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}
