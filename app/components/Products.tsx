'use client';

import Container from './Container';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import Link from 'next/link';
import CenterUnderline from './CenterUnderline';

const productsImage = [
  {
    id: 1,
    path: '/products/one.jpg',
    title: 'Kit 1',
    desc: '',
    price: 20,
  },
  {
    id: 2,
    path: '/products/two.jpg',
    title: 'Kit 2',
    price: 30,
  },
  {
    id: 3,
    path: '/products/three.jpg',
    title: 'Kit 3',
    price: 40,
  },
  // {
  //   id: 4,
  //   path: '/products/Four.jpg',
  //   title: 'Kit 4',
  //   price: 50,
  // },
];

const Products = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay(), Fade()]);

  const products = productsImage.map((flower) => (
    <article
      key={flower.id}
      className="bg-white rounded-xl overflow-hidden h-full grid md:min-h-[30rem] min-h-[40rem] grid-cols-1 md:grid-cols-2 md:grid-rows-1 grid-rows-2 relative embla__slide"
    >
      <figure className="relative h-full w-full overflow-hidden">
        <Image
          src={flower.path}
          alt=""
          className={'absolute object-cover top-0 left-0 w-full h-full'}
          width={500}
          height={500}
        />
      </figure>

      <article className="bg-purple-900 text-white border-l border-purple-800 flex flex-col items-start py-10 px-10 justify-center gap-4">
        <h3 className="text-4xl d:text-5xl font-light">{flower.title}</h3>
        <p className="text-purple-200 font-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
          voluptatibus velit culpa incidunt, molestias quam nemo aliquid
          perspiciatis nam, doloremque tenetur ad ipsam aspernatur ipsa
          necessitatibus explicabo nostrum debitis dolore.
        </p>
        <span className="text-2xl">${flower.price}</span>

        <button className="mt-4 md:w-auto w-full flex justify-center items-center gap-2 btn bg-purple-500 text-white">
          <span>Add to cart </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-shopping-bag"
          >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        </button>
      </article>
    </article>
  ));

  return (
    <section className="bg-purple-100">
      <Container>
        <div className="pb-10 grid gap-16">
          {/* <article>
            <h3 className="flex flex-wrap gap-3 items-center justify-center text-5xl font-light text-purple-800">
              Herbal Kits
            </h3>
          </article> */}

          <div className="embla" ref={emblaRef}>
            <div className="embla__container">{products}</div>
          </div>
          <div className="text-purple-800 grid place-items-center">
            <Link href="/products">
              <CenterUnderline label="See all products" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Products;
