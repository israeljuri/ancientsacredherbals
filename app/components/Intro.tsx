import { cn } from '@/lib/utils';
import Container from './Container';
import Image from 'next/image';

const list = [
  {
    id: 1,
    content: `In the whispers of wind through ancient forests and the sacred groves of our ancestors, the plants have always spoken to those who listen.`,
  },
  {
    id: 2,
    content: `Welcome, seeker, to a sanctuary where the timeless wisdom of plant medicine meets the evolving consciousness of our modern world.`,
  },
  {
    id: 3,
    content: `The ancient ones knew that true healing
happens not just on the physical level, but
through the harmonious integration of body,
mind, and spirit.`,
  },
];

const Intro = () => {
  return (
    <section id="intro" className="bg-gray-100 pb-20 py-20">
      <Container>
        <div className="grid gap-5">
          <article className="grid place-items-center text-center md:text-left col-span-full mb-10">
            <h3 className="flex flex-wrap gap-2 md:gap-4 items-center justify-center md:justify-start leading-8 text-5xl font-light text-purple-700 flex-col">
              <span>The call to the</span>

              <div className="flex flex-wrap items-center gap-1">
                <span>green</span>
                <Image
                  src="/elements/one.png"
                  width={500}
                  height={500}
                  alt=""
                  className="w-[5rem]"
                />
              <span>path</span>
              </div>
            </h3>
          </article>

          <article className="grid grid-cols-1 gap-10 md:gap-16 md:grid-cols-2 lg:grid-cols-3 font-light">
            {list.map((item, index) => (
              <article key={item.id} className="grid gap-4">
                {Boolean(index % 2) && (
                  <p className="hidden md:block bg-white text-black text-lg border border-purple-100 p-5 rounded-xl">
                    {item.content}
                  </p>
                )}

                <span className="hidden bg-white md:grid border border-gray-200  rounded-full text-black text-lg font-light h-[4rem] w-[4rem] place-items-center self-center">
                  {item.id}
                </span>

                <div
                  className={cn(
                    'flex md:hidden',
                    index % 2 ? 'justify-end' : 'justify-start'
                  )}
                >
                  <span className="border bg-white border-gray-200  rounded-full text-black text-lg font-light h-[4rem] w-[4rem] grid place-items-center self-center">
                    {item.id}
                  </span>
                </div>
                {!Boolean(index % 2) && (
                  <p className="hidden md:block bg-white text-black text-lg border border-purple-100 p-5 rounded-xl">
                    {item.content}
                  </p>
                )}
                <p className="block md:hidden bg-white text-black text-lg border border-purple-100 p-5 rounded-xl">
                  {item.content}
                </p>
              </article>
            ))}
          </article>
        </div>
      </Container>
    </section>
  );
};

export default Intro;
