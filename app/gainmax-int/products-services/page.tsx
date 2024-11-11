'use client';

import React from 'react';
import Image from 'next/image';

const servicesData = {
  solarpanel: {
    id: 'solarpanel',
    title: 'Solar Panels',
    paragraphs: [
      'The scope of the works for our photovoltaic system installation includes offering both Power Purchase Agreement (PPA) and Capital Expenditure (CAPEX) models to clients providing options for Renewable Energy Credits (RECs) ownership or without',
      'In addition, Gainmax offers a diverse range of flexible solar panels solutions suited for the agricultural industry aiming to maximize electricity savings.',
    ],
    image: '/png/int/home/services/asset-service-1.webp',
  },
  solarlight: {
    id: 'solarlight',
    title: 'solar light',
    paragraphs: [
      'Illuminate your world with the brilliance of solar lighting. Our advanced solutions offer numerous advantages over traditional lights, including unparalleled energy efficiency, minimal maintenance requirements, effortless installation, and remarkable cost-effectiveness.',
      'With a 10-year warranty, our solar lighting technology guarantees reliability and longevity, giving you peace of mind. Whether youre in the B2B or B2C sector, our versatile lighting solutions cater to various environments, from construction sites to gardens, farms, homes, and businesses.',
      'Embrace sustainability and reduce your carbon footprint while enjoying bright, eco-friendly illumination. ',
    ],
    image: '/png/int/home/services/asset-service-4.webp',
  },
  EVChargers: {
    id: 'EVChargers',
    title: 'Solar EV Chargers',
    paragraphs: [
      'Revolutionize your journey towards sustainable mobility with Gainmax’s innovative EV Charger Solutions. As a pioneer, we represent top-tier brands to enhance the charging experience of electric vehicles.',
      'We believe in fostering a close partnership with our clients for mutual benefits by offering a unique profit-sharing model whereby car owners enjoy competitive tariff charges and become part of the electric revolution',
    ],
    image: '/png/int/home/services/asset-service-3.webp',
  },
  solarfilm: {
    id: 'solarfilm',
    title: 'solar film',
    paragraphs: [
      'Introducing Gainmaxs revolutionary solar films, meticulously crafted to redefine your indoor environment. Designed to effortlessly regulate sunlight entry and minimize glare, our solar films offer a transformative experience for your space',
      'Experience the difference as our solar films alleviate eye strain and enhance your view from inside to outside.',
    ],
    image: '/png/int/home/services/asset-service-2.webp',
  },
  solarwaterheather: {
    id: 'solarwaterheather',
    title: 'solar water heater',
    paragraphs: [
      'Efficient, Reliable, and Cost-Effective',
      '"Mirai" translates to "The Future" in Japanese, encapsulating our commitment to providing sustainable and eco-friendly solutions through the use of renewable energy.',
      'Revolutionize and reduce grid dependency with 100% Solar Powered hot water supply. The Mirai Hot Water Systems (HWS) uses innovative, cutting-edge technology to meet the rising demands of green technology products. Equipped with state-of-the art UV absorption technology, our solar powered HWS comes with built-in backup switches, which ensures uninterrupted supply of hot water at night and on rainy days.',
      'Enjoy up to 100% utility savings and achieve Returns on Investment (ROI) in 4 years. Our customized HWS are well suited for industrial, commercial, and residential purposes. ',
    ],
    image: '/png/int/home/services/asset-service-2.webp',
  },
  hybridaircon: {
    id: 'hybridaircon',
    title: 'hybrid aircon',
    paragraphs: [
      'Redefining Air-Conditioning System',
      'EvoAir is the world,s first eco-friendly air-conditioning system that not only satisfies our needs to cool the indoor environment, but also emits cool air to the external surroundings via its patented outdoor system.',
      'EvoAir Tech Aircon, our hybrid air-conditioner, is manufactured in Malaysia and China factories, and are ISO45000 and ISO515151 certified respectively',
      'The first of its kind Patent-pending Technology which does not contribute to the Urban Heat Island effect, resulting in a truly environmentally friendly air conditioner. As a result, turning on the air-conditioner results in cooling both the interior and exterior environments.',
    ],
    image: '/png/int/home/services/asset-service-2.webp',
  },
  energystorage: {
    id: 'energystorage',
    title: 'Energy Storage System Solutions',
    paragraphs: [
      'Smart Energy Better Life',
      'Narada has been providing ESS solutions for more than a decade and is ranked among the top tier ESS providers in the world. Our products include customized DC racks, ESS containers of various types, outdoor ESS cabinets and liquid-cooled ESS solutions for residential, commercial, industrial, and utility industries.',
      'As Project Partner and Distributor of Narada, we provide a comprehensive solution that caters to a variety of needs of the market.',
    ],
    image: '/png/int/home/services/asset-service-2.webp',
  },
};

type ServiceType = keyof typeof servicesData;

export default function ServicesPage() {
  const [activeService, setActiveService] = React.useState<ServiceType>('solarpanel');

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
                  className={`text-base text-left transition-colors duration-200 hover:text-green-600 capitalize ${activeService === id ? 'text-green-600 font-bold' : 'text-green-600'}`}
                >
                  - {service.title}
                </button>
              ))}
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="flex flex-col gap-y-8">
                {/* Image */}

                {currentService.image && (
                  <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden">
                    <Image src={currentService.image} alt={`${currentService.title} illustration`} fill className="object-cover" />
                  </div>
                )}

                {/* Title */}
                <h1 className="text-2xl font-semibold text-black capitalize">{currentService.title}</h1>

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
              </div>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}
