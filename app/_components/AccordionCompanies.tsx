import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import LogoWhite from '@/assets/logo/svg/logo-white.svg';

export default function AccordionCompanies() {
  const [openItem, setOpenItem] = useState('construction');

  const companies = [
    {
      id: 'construction',
      name: 'GAINMAX Construction & Engineering Pte Ltd',
      description: 'Expertise in integrating systems for infrastructure projects, encompassing signaling systems, mobile infrastructure networks, AI cameras, and PV system installations.',
      bgColor: 'bg-blue-500',
    },
    {
      id: 'innovation',
      name: 'GAINMAX Innovation & Technology Pte Ltd',
      description:
        'An EPC company specializing in solar and energy storage systems. Also a distributor of clean & green energy products including solar panels, inverters, solar water heater systems, hybrid air conditioners, EV chargers, and providing designed solution of energy storage system integration.',
      bgColor: 'bg-green-600',
    },
    {
      id: 'consultacy',
      name: 'GAINMAX Consultacy & Partnership Pte Ltd',
      description: 'Advocate for sustainability while leveraging on government grants to provide ESG (Environmental, Social, and Governance) reporting. Enhance manufacturing processes to boost productivity and efficiency levels.',
      bgColor: 'bg-yellow-500',
    },
  ];

  useEffect(() => {
    const handleScroll = (entries: any[], observer: any) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id').replace('accordion-', '');
          setOpenItem(id);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: '-35% 0px -35% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleScroll, options);

    companies.forEach((company) => {
      const element = document.getElementById(`accordion-${company.id}`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
      <Accordion type="single" value={openItem} className="space-y-4">
        {companies.map((company) => (
          <AccordionItem key={company.id} value={company.id} className={`${company.bgColor} border-none`} id={`accordion-${company.id}`}>
            <AccordionTrigger className="p-4 sm:p-5 md:p-6 text-white hover:no-underline [&>svg]:scale-150">
              <div className="flex items-center w-full gap-x-3 sm:gap-x-4">
                <div className="relative flex-shrink-0 w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]">
                  <Image src={LogoWhite} alt="LogoWhite" fill className="object-contain" />
                </div>
                <div className="flex flex-col items-start">
                  <h1 className="uppercase font-extrabold text-white text-base sm:text-lg md:text-xl">gainmax</h1>
                  <h2 className="text-white text-xs sm:text-sm md:text-base">{company.name}</h2>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 sm:px-5 md:px-6 pb-4 text-white">
              <p className="text-left text-sm sm:text-base md:text-lg">{company.description}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
