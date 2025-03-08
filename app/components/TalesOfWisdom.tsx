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

              <div className="flex flex-wrap items-center gap-1">
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

          <div className="rounded-xl h-[34rem] w-full overflow-hidden">
            <video
              src="/videos/body-system.mp4"
              autoPlay
              // controls
              muted
              loop
              className="w-full h-full object-cover"
            ></video>
          </div>

          <div className="grid h-full w-full grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {categories.map((cat) => (
              <article
                className="flex flex-col items-start gap-4 justify-center font-light rounded-xl border p-5 px-6 bg-purple-200 md:p-10 border-purple-200 text-black"
                key={cat.id}
              >
                <div className="flex flex-col gap-1">
                  <small className="text-purple-600 text-xs">
                    Ancient tales of the
                  </small>
                  <h3 className="text-3xl text-purple-700 md:text-4xl">
                    {cat.title}
                  </h3>
                </div>

                <span>
                  <Link
                    href={cat.path}
                    className="flex items-center text-purple-700 justify-start w-full gap-2 text-md md:text-md rounded-sm group"
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
                </span>
              </article>
            ))}

            <button className="border border-purple-300 w-full py-2 px-4 rounded-xl col-span-full">
              <Link
                href=""
                className="flex items-center text-purple-500 justify-center w-full gap-2 text-md md:text-md rounded-sm group"
              >
                <CenterUnderline label="See all 12 body system" />
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
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TalesOfWisdom;
