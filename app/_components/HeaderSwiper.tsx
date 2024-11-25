'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import swipeImg1 from '@/assets/group/slider/asset-swipe-1.webp';
import swipeImg2 from '@/assets/group/slider/asset-swipe-2.webp';
import swipeImg3 from '@/assets/group/slider/asset-swipe-3.webp';
import swipeImg4 from '@/assets/group/slider/asset-swipe-4.webp';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export const HeaderSwiper = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div className="relative w-full h-full">
      <div className="navigation-wrapper h-full">
        <div ref={sliderRef} className="keen-slider h-full">
          <div className="keen-slider__slide h-[70vh] md:h-[100vh] object-cover">
            <Image src={swipeImg1.src} alt="Swiper 1" width={500} height={300} className="w-full h-full object-cover" />
          </div>

          <div className="keen-slider__slide h-[70vh] md:h-[100vh]">
            <Image src={swipeImg2.src} alt="Swiper 2" width={500} height={300} className="w-full h-full object-cover" />
          </div>

          <div className="keen-slider__slide h-[70vh] md:h-[100vh]">
            <Image src={swipeImg3.src} alt="Swiper 3" width={500} height={300} className="w-full h-full object-cover" />
          </div>

          <div className="keen-slider__slide h-[70vh] md:h-[100vh]">
            <Image src={swipeImg4.src} alt="Swiper 4" width={500} height={300} className="w-full h-full object-cover" />
          </div>
        </div>
        {/* border bottom orange 3px*/}
        <div className="absolute bottom-0 left-0 w-full h-1 md:h-2 bg-orange-500"></div>
      </div>
    </div>
  );
};
