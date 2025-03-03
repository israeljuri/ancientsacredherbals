'use client';

import Link from 'next/link';
import Container from './Container';
import Image from 'next/image';
import CenterUnderline from './CenterUnderline';

const categories = [
  {
    id: 1,
    title: 'Nervous System',
    path: '',
  },
  {
    id: 2,
    title: 'Endoctrine System',
    path: '',
  },
  {
    id: 3,
    title: 'Digestive System',
    path: '',
  },
  {
    id: 4,
    title: 'Immune System',
    path: '',
  },
];

const TalesOfWisdom = () => {
  return (
    <section id="atbs" className="py-16 bg-purple-100">
      <Container>
        <div className="grid grid-cols-1 gap-4 md:gap-4 md:grid-cols-[1fr_1fr] place-items-center">
          <article className="grid gap-6 text-center md:text-center col-span-full mb-10">
            <h3 className="flex flex-wrap gap-3 items-center justify-center md:justify-center text-5xl font-light text-purple-700 max-w-[20ch]">
              <span>Ancient Herbs</span>
              <span>of&nbsp;the</span>

              <div className="flex items-center gap-1">
                <span>Body</span>
                <Image
                  src="/elements/two.png"
                  width={500}
                  height={500}
                  alt=""
                  className="w-[3rem]"
                />
                <span>System</span>
              </div>
            </h3>

            <p className="font-light text-black">
              Whispers of Calm Ancient Tales of Herbs for overall wellness of
              the body
            </p>
          </article>

          <div className="rounded-xl h-[30rem] w-full overflow-hidden">
            <video
              src="/videos/atbs.mp4"
              autoPlay
              // controls
              muted
              loop
              className="w-full h-full object-cover"
            ></video>
          </div>

          <div className="grid h-full w-full grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.map((cat) => (
              <article
                className="flex flex-col items-start gap-2 justify-center text-2xl md:text-3xl font-light rounded-xl p-5 border border-purple-200 text-black"
                key={cat.id}
              >
                {/* <small className="text-sm">Tales of the</small> */}
                <h3>{cat.title}</h3>

                <Link
                  href={cat.path}
                  className="flex items-center text-purple-700 justify-start w-full gap-2 mt-5 text-sm md:text-sm rounded-sm group"
                >
                  <CenterUnderline label="See all herbs" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-move-right group-hover:ml-5 transition-all duration-200"
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TalesOfWisdom;
