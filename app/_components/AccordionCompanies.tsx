import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import LogoWhite from '@/assets/logo/svg/logo-white.svg';

interface Company {
  id: string;
  name: string;
  description: string;
  bgColor: string;
  order: number;
}

export default function AccordionCompanies(): JSX.Element {
  const [openItem, setOpenItem] = useState<string>('');
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  const companies: Company[] = [
    {
      id: 'construction',
      name: 'Construction & Engineering Pte Ltd',
      description: 'Expertise in integrating systems for infrastructure projects, encompassing signaling systems, mobile infrastructure networks, AI cameras, and PV system installations.',
      bgColor: 'bg-blue-500',
      order: 0,
    },
    {
      id: 'innovation',
      name: 'Innovation & Technology Pte Ltd',
      description:
        'An EPC company specializing in solar and energy storage systems. Also a distributor of clean & green energy products including solar panels, inverters, solar water heater systems, hybrid air conditioners, EV chargers, and providing designed solution of energy storage system integration.',
      bgColor: 'bg-green-600',
      order: 1,
    },
    {
      id: 'consultacy',
      name: 'Consultacy & Partnership Pte Ltd',
      description: 'Advocate for sustainability while leveraging on government grants to provide ESG (Environmental, Social, and Governance) reporting. Enhance manufacturing processes to boost productivity and efficiency levels.',
      bgColor: 'bg-yellow-500',
      order: 2,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            startOpeningSequence();
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const constructionElement = document.getElementById('card-construction');
    if (constructionElement) {
      observer.observe(constructionElement);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  const startOpeningSequence = () => {
    companies.forEach((company, index) => {
      setTimeout(() => {
        setOpenItem(company.id);
      }, index * 1700);
    });
  };

  const handleAccordionChange = (value: string) => {
    // If the same item is clicked, close it
    if (value === openItem) {
      setOpenItem('');
    } else {
      setOpenItem(value);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {companies.map((company) => (
          <div id={`card-${company.id}`} key={company.id} className="relative">
            <Accordion type="single" value={openItem} onValueChange={handleAccordionChange} className="transition-all duration-500">
              <AccordionItem value={company.id} className={`${company.bgColor} border-none transition-all duration-500`}>
                <AccordionTrigger className="p-6 text-white hover:no-underline [&>svg]:scale-150 [&>svg]:transition-transform [&>svg]:duration-700">
                  <div className="flex items-center w-full gap-x-4">
                    <div className="relative flex-shrink-0 w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]">
                      <Image src={LogoWhite} alt="LogoWhite" fill className="object-contain" />
                    </div>
                    <div className="flex flex-col items-start">
                      <h1 className="uppercase font-extrabold text-white text-base sm:text-lg md:text-xl">gainmax</h1>
                      <h2 className="text-white text-xs sm:text-sm md:text-base text-start">{company.name}</h2>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="overflow-hidden">
                  <AnimatePresence>
                    {openItem === company.id && (
                      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5 }} className="px-6 pb-6 text-white">
                        <p className="text-left text-lg">{company.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
}
