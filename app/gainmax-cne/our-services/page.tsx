'use client';

import React from 'react';
import Image from 'next/image';
import AssetServices1 from '@/assets/cne/asset-service-1.webp';
import AssetServices2 from '@/assets/cne/asset-service-2.webp';
import AssetServices3 from '@/assets/cne/asset-service-3.webp';
import AssetServices4 from '@/assets/cne/asset-service-4.webp';

const servicesData = {
  telecom: {
    id: 'telecom',
    title: 'Mobile Telecommunication Systems Integration',
    features: [
      'Core Network Hardware Installation',
      'Base Station Controller (BSC)',
      'Base Transceiver Station (BTS)',
      'Outdoor installation (feeders and antennas)',
      'In-building radio coverage design & implementation for cellular and paging',
    ],
    image: AssetServices1.src,
  },
  transmission: {
    id: 'transmission',
    title: 'Transmission System Implementation',
    features: ['Ancillary Services'],
    image: AssetServices3.src,
  },
  survey: {
    id: 'survey',
    title: 'Site Engineering Survey',
    features: ['Hunting, RF & Transmission', 'Site Acquisition', 'Site Proposal', 'Line of Sight'],
    image: AssetServices2.src,
  },
  testing: {
    id: 'testing',
    title: 'Testing, Commissioning & Integration',
    features: ['Customized Hardware Fabrication'],
    image: AssetServices4.src,
  },
};

type ServiceType = keyof typeof servicesData;

export default function ServicesPage() {
  const [activeService, setActiveService] = React.useState<ServiceType>('telecom');

  const handleServiceChange = (serviceId: ServiceType) => {
    setActiveService(serviceId);
  };

  const currentService = servicesData[activeService];

  return (
    <main>
      <header className="relative w-full md:px-6 lg:px-10 flex mt-[120px] md:mt-[110px] lg:mt-[280px]">
        <div className="container flex flex-col w-full">
          {/* Service Content */}
          <div className="flex flex-col md:flex-row w-full gap-16">
            {/* Left Sidebar */}
            <div className="w-full md:w-[350px] flex flex-col gap-y-4">
              {Object.entries(servicesData).map(([id, service]) => (
                <button
                  key={id}
                  onClick={() => handleServiceChange(id as ServiceType)}
                  className={`text-base text-left transition-colors duration-200 ${activeService === id ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-600'}`}
                >
                  <ul className="list-disc">
                    <li>{service.title}</li>
                  </ul>
                </button>
              ))}
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="flex flex-col gap-y-8 w-full max-w-[700px]">
                {/* Title */}
                <h1 className="text-2xl font-semibold text-black">{currentService.title}</h1>

                {/* Features List */}
                <ul className="flex flex-col gap-y-2">
                  {currentService.features.map((feature, index) => (
                    <li key={index} className="flex gap-x-2 items-start">
                      <span className="text-red-500 font-bold">-</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="relative w-full max-w-[700px] aspect-video rounded-xl overflow-hidden mt-4">
                  {/* Image */}
                  <Image src={currentService.image} alt={`${currentService.title} illustration`} fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}
