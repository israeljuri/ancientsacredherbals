import Link from 'next/link';
import Container from './Container';
import Image from 'next/image';
import MoreThanMedicine from './MoreThanMedicine';

const AncientRoot = () => {
  return (
    <section className="bg-gray-50 py-20 pb-20">
      <Container>
        <div className="grid grid-cols-1 gap-4 md:gap-20 md:grid-cols-[1fr_1fr] place-items-center">
          <article className="grid gap-10 text-center md:text-left mb-10 text-black">
            <h3 className="flex flex-wrap gap-3 items-center justify-center md:justify-start text-4xl md:text-5xl font-light text-purple-700">
              <div className="flex flex-wrap items-center gap-1">
                <span>Ancient</span>
                <Image
                  src="/elements/three.png"
                  width={500}
                  height={500}
                  alt=""
                  className="w-[4rem]"
                />
                <span>Roots,</span>
              </div>
              <span>Modern&nbsp;Growth</span>
            </h3>

            <div className="grid gap-5 font-light">
              <p className="">
                Since the dawn of humanity, our ancestors have danced with the
                plant spirits, learning their songs and stories, discovering
                their healing gifts, and passing down this sacred knowledge
                through generations.
              </p>

              <p>
                From the mystery schools of Egypt to the shamanic traditions of
                the Americas, from the healing temples of Greece to the mountain
                monasteries of Tibet, the path of plant wisdom has illuminated
                the way forward for countless souls.
              </p>
            </div>

            <div>
              <Link href="/herb-profiles" legacyBehavior passHref>
                <a>
                  <button className="btn  bg-purple-600 text-white">
                    See all profiles
                  </button>
                </a>
              </Link>
            </div>
          </article>

          <div className="rounded-xl h-[30rem] w-full overflow-hidden">
            <video
              src="/videos/ancient.mp4"
              autoPlay
              // controls
              muted
              loop
              className="w-full h-full object-cover"
            ></video>
          </div>

          <div className="grid h-full w-full grid-cols-2 sm:grid-cols-2 gap-4"></div>
        </div>
      </Container>

      <MoreThanMedicine />
    </section>
  );
};

export default AncientRoot;
