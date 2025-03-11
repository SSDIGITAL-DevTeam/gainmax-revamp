import React from "react";
import Image from "next/image";
import Link from "next/link";
import AssetServices1 from "@/assets/cne/asset-service-1.webp";
import AssetServices2 from "@/assets/cne/asset-service-2.webp";
import AssetServices3 from "@/assets/cne/asset-service-3.webp";
import AssetServices4 from "@/assets/cne/asset-service-4.webp";

const services = [
  {
    id: 1,
    title: "Mobile Telecommunication Systems Integration",
    image: AssetServices1.src,
    href: "/gainmax-cne/our-services",
  },
  {
    id: 2,
    title: "Transmission System Implementation",
    image: AssetServices3.src,
    href: "/gainmax-cne/our-services",
  },
  {
    id: 3,
    title: "Site Engineering Survey",
    image: AssetServices2.src,
    href: "/gainmax-cne/our-services",
  },
  {
    id: 4,
    title: "Testing, Commissioning & Integration",
    image: AssetServices4.src,
    href: "/gainmax-cne/our-services",
  },
];

const ServiceGrid = () => {
  return (
    <div className="container p-4 md:p-8 mx-auto px-4 py-8">
      {/* Main Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 auto-rows-fr gap-4 md:gap-6">
        {/* Top Row */}
        <div className="col-span-1 lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          {/* Square Image (4 columns) */}
          <div className="col-span-1 lg:col-span-4">
            <Link
              href={services[0].href}
              className="relative aspect-[4/3] lg:aspect-square group overflow-hidden rounded-2xl block h-full"
            >
              <Image
                src={services[0].image}
                alt={services[0].title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 hover:bg-black/50 transition-colors duration-300" />
              <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-center items-center">
                <h3 className="text-white text-lg md:text-xl font-semibold text-center">
                  {services[0].title}
                </h3>
                <span className="mt-3 text-white">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>

          {/* Rectangle Image (8 columns) */}
          <div className="col-span-1 lg:col-span-8">
            <Link
              href={services[1].href}
              className="relative aspect-[4/3] lg:aspect-[2/1] group overflow-hidden rounded-2xl block h-full"
            >
              <Image
                src={services[1].image}
                alt={services[1].title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 hover:bg-black/50 transition-colors duration-300" />
              <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-center items-center">
                <h3 className="text-white text-lg md:text-xl font-semibold text-center">
                  {services[1].title}
                </h3>
                <span className="mt-3 text-white">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="col-span-1 lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          {/* Rectangle Image (8 columns) */}
          <div className="col-span-1 lg:col-span-8">
            <Link
              href={services[2].href}
              className="relative aspect-[4/3] lg:aspect-[2/1] group overflow-hidden rounded-2xl block h-full"
            >
              <Image
                src={services[2].image}
                alt={services[2].title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 hover:bg-black/50 transition-colors duration-300" />
              <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-center items-center">
                <h3 className="text-white text-lg md:text-xl font-semibold text-center">
                  {services[2].title}
                </h3>
                <span className="mt-3 text-white">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>

          {/* Square Image (4 columns) */}
          <div className="col-span-1 lg:col-span-4">
            <Link
              href={services[3].href}
              className="relative aspect-[4/3] lg:aspect-square group overflow-hidden rounded-2xl block h-full"
            >
              <Image
                src={services[3].image}
                alt={services[3].title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 hover:bg-black/50 transition-colors duration-300" />
              <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-center items-center">
                <h3 className="text-white text-lg md:text-xl font-semibold text-center">
                  {services[3].title}
                </h3>
                <span className="mt-3 text-white">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceGrid;
