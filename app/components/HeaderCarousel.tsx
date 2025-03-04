'use client';

import Image from 'next/image';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';

const flowers = [
  {
    path: '/flowers/1.png',
    label: 'Damiana',
    contain: false,
  },
  {
    path: '/flowers/2.png',
    label: 'Jasmine',
    contain: false,
  },
];

const HeaderCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay(),
  ]);

  const images = flowers.map((flower) => (
    <div key={flower.label} className="relative embla__slide">
      <Image
        src={'/blob.svg'}
        alt=""
        className={'absolute -z-5 top-0 left-0 w-full h-full'}
        width={500}
        height={500}
      />
      <Image
        src={flower.path}
        alt=""
        className={cn(
          'z-10 w-full h-full object-cover left-0 right-0',
          flower.contain ? 'object-contain' : 'object-cover'
        )}
        width={500}
        height={500}
      />
    </div>
  ));

  return (
    <section className="flex items-center flex-col justify-center">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container h-[30rem]">{images}</div>
      </div>
    </section>
  );
};

export default HeaderCarousel;
