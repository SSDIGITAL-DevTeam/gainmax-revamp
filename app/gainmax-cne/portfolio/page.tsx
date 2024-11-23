'use client';

import React from 'react';
import Image from 'next/image';
import AssetClementi from '@/assets/cne/asset-clementi-1.webp';
import AssetMrt from '@/assets/cne/asset-downtown-1.webp';
import AssetSportsHub from '@/assets/cne/asset-sport-1.webp';
import AssetOutdoorLamp from '@/assets/cne/asset-outdoor-1.webp';
import AssetTelecomInfra from '@/assets/cne/asset-tele-1.png';

const servicesData = {
  clementi: {
    id: 'clementi',
    title: 'Clementi Bus Interchange',
    paragraphs: [
      'In July 2021, Gainmax was tasked by ST Engineering Pte Ltd to complete the signal availability at the Clementi Bus Interchange.',
      'Heavy bus and pedestrian traffic added to the difficulty of maintaining public safety while avoiding disruptions to operations. Despite the issues, Gainmax delivered on time.',
    ],
    image: AssetClementi.src,
  },
  mrt: {
    id: 'mrt',
    title: 'MRT Downtown Line',
    paragraphs: [
      'Prior to 2015, signal distortion was common, if anyone used the phone while travelling underground on the Downtown Line. Gainmax provided mobile coverage network and today, commuters enjoy the seamless communication while travelling underground on the Downtown Line.',
    ],
    image: AssetMrt.src,
  },
  sportsHub: {
    id: 'sportsHub',
    title: 'Singapore Sports Hub',
    paragraphs: [
      'In July 2 In 2014, all eyes were on the Singapore Sports Hub, which was designed to be a state-of-the-art, fully integrated sports, entertainment, and lifestyle hub.',
      'Gainmax was tasked with the infrastructure set-up and commissioning of telecommunication components for this signature project which involved 4 Telcos – Singtel, M1, Starhub and Grid.',
    ],
    image: AssetSportsHub.src,
  },
  outdoorLamp: {
    id: 'outdoorLamp',
    title: 'Outdoor Lamp Pole Site',
    paragraphs: [
      'We were engaged to construct outdoor lamp pole mobile coverage at Woodleigh flyover.',
      'We delivered on our goals, due to our strict internal protocol designed to resolve our customer’s issues in a precise and speedy manner.',
    ],
    image: AssetOutdoorLamp.src,
  },
  telecomInfra: {
    id: 'telecomInfra',
    title: 'Telecommunications Infrastructure',
    paragraphs: [
      'Provision to design, engineering, and construction of essential infrastructure for radio equipment, signaling and antenna towers',
      'Telecommunications infrastructure includes media, satellite, and data centers that transmit information over a long distance',
      'The infrastructure is the components that aid in the transmission of information which include network nodes, network services, telecom services, and satellite systems.',
      'A strong telecommunications infrastructure directly contributes to enhanced efficiency and productivity in various segments enabling businesses to streamline their operations, coordinate supply chains, and improve customer service, resulting in greater overall efficiency.',
    ],
    image: AssetTelecomInfra.src,
  },
};

type ServiceType = keyof typeof servicesData;

export default function ServicesPage() {
  const [activeService, setActiveService] = React.useState<ServiceType>('clementi');

  const handleServiceChange = (serviceId: ServiceType) => {
    setActiveService(serviceId);
  };

  const currentService = servicesData[activeService];

  return (
    <main>
      <header className="relative w-full min-h-[100vh] md:px-6 lg:px-10 flex mt-[120px] md:mt-[110px] lg:mt-[280px]">
        <div className="container flex flex-col w-full">
          {/* Service Content */}
          <div className="flex flex-col md:flex-row w-full gap-16">
            {/* Left Sidebar */}
            <div className="w-full md:w-[350px] flex flex-col gap-y-4">
              {Object.entries(servicesData).map(([id, service]) => (
                <button
                  key={id}
                  onClick={() => handleServiceChange(id as ServiceType)}
                  className={`text-base text-left transition-colors duration-200 hover:text-blue-600 ${activeService === id ? 'text-blue-600 font-bold' : 'text-gray-600'}`}
                >
                  - {service.title}
                </button>
              ))}
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="flex flex-col gap-y-8">
                {/* Title */}
                <h1 className="text-2xl font-semibold text-black">{currentService.title}</h1>

                {/* Paragraphs */}
                {currentService.paragraphs.length > 0 && (
                  <div className="space-y-4">
                    {currentService.paragraphs.map((paragraph, index) => (
                      <p key={index} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {/* Image */}
                {currentService.image && (
                  <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden mt-4">
                    <Image src={currentService.image} alt={`${currentService.title} illustration`} fill className="object-cover" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}
