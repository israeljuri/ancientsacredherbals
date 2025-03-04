import Link from 'next/link';
import Container from './Container';
import Image from 'next/image';
import CenterUnderline from './CenterUnderline';

const list = [
  {
    id: 1,
    path: '/profile-section/one.jpg',
    title: 'Jasminum',
    desc: `Child of the Moon Goddess, bearer of night’s sweetest secrets. The temple priestesses of ancient Egypt wove its flowers into their hair to enhance their connection to the divine feminine. Its perfume opens doorways between worlds.`,
  },
  {
    id: 2,
    path: '/profile-section/two.jpg',
    title: 'Illicium verum',
    desc: `Star of the Eastern Mystics, bearer of cosmic wisdom. Its eight points align with the cardinal directions and cross-quarter days. The ancient ones cast it into divinatory fires to read the patterns of fate.`,
  },
  {
    id: 3,
    path: '/profile-section/three.jpg',
    title: 'Illicium verum',
    desc: `Star of the Eastern Mystics, bearer of cosmic wisdom. Its eight points align with the cardinal directions and cross-quarter days. The ancient ones cast it into divinatory fires to read the patterns of fate.`,
  },
  {
    id: 4,
    path: '/profile-section/four.jpg',
    title: 'Jasminum',
    desc: `Child of the Moon Goddess, bearer of night’s sweetest secrets. The temple priestesses of ancient Egypt wove its flowers into their hair to enhance their connection to the divine feminine. Its perfume opens doorways between worlds.`,
  },
];

const categories = [
  {
    id: 1,
    title: 'Herbal Energetic',
    path: '',
  },
  {
    id: 2,
    title: 'Carribean Medical Plants',
    path: '',
  },
  {
    id: 3,
    title: 'Tales Medical Plants',
    path: '',
  },
  {
    id: 4,
    title: 'Modern Day Medicine',
    path: '',
  },
];

const Profiles = () => {
  return (
    <section id="profiles" className="py-10 pb-20 bg-gray-100">
      <Container>
        <div className="">
          <article className="grid gap-10 text-center md:text-center items-center justify-center mb-10">
            <h3 className="flex flex-wrap gap-3 items-center justify-center text-5xl font-light text-purple-700 ">
              <div className="flex flex-wrap items-center justify-center gap-5 md:gap-4">
                <span>Herbal</span>
                <Image
                  src="/elements/four.png"
                  width={500}
                  height={500}
                  alt=""
                  className="w-[5rem] -rotate-45"
                />
              </div>
                <span className='-mt-10 md:mt-0'>Profiles</span>
            </h3>
            <p className="font-light max-w-[59ch]">
              Ancient herbalism used plants for healing based on tradition and
              observation. Modern medicine isolates active compounds for
              targeted treatments through scientific research. Today, both
              approaches complement each other for a more holistic approach to
              health.
            </p>
          </article>

          <div className="grid   gap-4">
            <figure className="grid place-content-start grid-cols-1 md:grid-cols-2 gap-5">
              {list.map((item) => (
                <figure
                  key={item.id}
                  className="relative overflow-hidden w-full h-[15rem] group rounded-xl transition-all duration-200"
                >
                  <Image
                    className="w-full h-full object-cover"
                    src={item.path}
                    alt=""
                    width={500}
                    height={500}
                  />

                  <div className="transition-all duration-400 fade-t-4 bg-purple-600 text-white  opacity-90 absolute w-full p-5 gap-4 text-light  left-0 bottom-0">
                    <h4 className='text-2xl'>{item.title}</h4>
                    <p className='mt-2 text-sm truncate ...'>{item.desc}</p>

                    <button className="text-xs mt-2">
                      Learn more
                    </button>
                  </div>
                </figure>
              ))}
            </figure>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categories.map((cat) => (
                <li
                  className="border bg-white border-gray-200 rounded-xl p-6 font-light"
                  key={cat.id}
                >
                  <h4 className="text-2xl">{cat.title}</h4>

                  <Link
                    href={cat.path}
                    className="flex items-center text-purple-700 justify-start w-full gap-2 mt-4 text-sm md:text-sm rounded-sm group"
                  >
                    <CenterUnderline label="Open Category" />
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
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-20 grid place-items-center">
          <Link href="/herbal-profiles">
            <CenterUnderline label="See all profiles" />
          </Link>
        </div>
        </div>
      </Container>
    </section>
  );
};

export default Profiles;
