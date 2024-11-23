import React from 'react';
import AssetPortfolio1 from '@/assets/cne/assets-portfolio-1.webp';
import AssetPortfolio2 from '@/assets/cne/assets-portfolio-2.webp';
import AssetPortfolio3 from '@/assets/cne/assets-portfolio-3.webp';
import AssetPortfolio4 from '@/assets/cne/assets-portfolio-4.webp';
import AssetPortfolio5 from '@/assets/cne/assets-portfolio-5.webp';
import Image from 'next/image';
import Link from 'next/link';

const portfolioItems = [
  { src: AssetPortfolio1, text: 'clementi bus interchange', link: '/gainmax-cne/portfolio' },
  { src: AssetPortfolio2, text: 'MRT DOWNTOWN LINE', link: '/gainmax-cne/portfolio' },
  { src: AssetPortfolio3, text: 'SINGAPORE SPORTS HUB', link: '/gainmax-cne/portfolio' },
  { src: AssetPortfolio4, text: 'OUTDOOR LAMP POLE SITE', link: '/gainmax-cne/portfolio' },
  { src: AssetPortfolio5, text: 'TELECOMMUNICATIONS INFRASTRUCTURE', link: '/gainmax-cne/portfolio' },
];

const PortfolioCne = () => {
  return (
    <div className="py-8 md:py-16">
      <div className="flex flex-col gap-y-6 md:gap-y-11">
        {portfolioItems.map((item, index) => (
          <div key={index} className="relative">
            <Link href={item.link}>
              <Image src={item.src} alt={item.text} className="w-full h-auto object-cover rounded-2xl lg:rounded-[2rem]" layout="responsive" width={500} height={300} />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-30 flex items-start justify-start p-10 md:p-20 rounded-2xl lg:rounded-[2rem]">
                <span className="text-white text-lg md:text-xl lg:text-6xl font-semibold uppercase w-[50%]">{item.text}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioCne;
