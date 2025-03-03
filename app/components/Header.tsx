import Link from 'next/link';
import Container from './Container';
import HeaderCarousel from './HeaderCarousel';
import Navbar from './Navbar';
import TextCutReveal from './TextCutReveal';

const Header = () => {
  return (
    <>
      {/* bg-purple-900 bg-gradient-to-br from-purple-600 to-purple-900 */}
      <Navbar />
      <header className="bg-purple-900">
        <Container>
          <div className="min-h-screen pt-10 pb-20 md:pb-10 md:pt-0 grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] place-content-center place-items-center">
            <article className="flex flex-col md:items-start items-center justify-center text-center md:text-left px-10 md:px-0 gap-10">
              <h1 className="text-white text-5xl leading-12 font-light">
                <TextCutReveal containerClassName="flex md:block md:items-auto items-center md:justify-auto justify-center">
                  Ancient Path of&nbsp;Sacred Plant&nbsp;Wisdom
                </TextCutReveal>
              </h1>
              <p className="font-light text-purple-300">
                Bridging the gap between Ancient and Modern way of using herbs
              </p>

              <Link href="#atbs" legacyBehavior passHref>
                <a>
                  <button className="btn bg-purple-500 text-white">
                    Get Started
                  </button>
                </a>
              </Link>
            </article>

            <HeaderCarousel />

            <article className="grid place-items-center md:place-items-start gap-16 md:px-0 px-10">
              <p className="text-purple-300 text-center md:text-left text-lg">
                Whether you&#39;re a seasoned herbalist, a healing arts
                practitioner, or someone just beginning to hear the call of the
                plants, you&#39;ve found your way here for a reason.
              </p>

              <Link href="#intro" legacyBehavior passHref>
                <a>
                  <button className="cursor-pointer border animate-bounce border-purple-500 h-[4rem] w-[4rem] rounded-full grid place-items-center p-2 text-purple-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-move-down"
                    >
                      <path d="M8 18L12 22L16 18" />
                      <path d="M12 2V22" />
                    </svg>
                  </button>
                </a>
              </Link>
            </article>
          </div>
        </Container>
      </header>
    </>
  );
};
export default Header;
