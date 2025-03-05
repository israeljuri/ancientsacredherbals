import Image from 'next/image';

const CallToAction = () => {
  return (
    <section className="relative z-20 grid grid-cols-1 md:grid-cols-[1fr_1fr] rounded-xl overflow-hidden min-h-[30rem] text-white">
      <figure className="relative overflow-hidden min-h-[16rem] bg-purple-200">
        <div className="rounded-xl h-full w-full">
          <video
            src="/videos/prepare-herbs.mp4"
            autoPlay
            // controls
            muted
            loop
            className="w-full h-full object-cover"
          ></video>
        </div>
      </figure>{' '}
      <article className="overflow-hidden bg-purple-200 px-10 md:px-20 flex items-center md:items-start justify-center md:justify-center text-center md:text-left flex-col gap-6 p-6 py-10 md:p-10">
        <h3 className="text-4xl md:text-5xl leading-13 font-light text-purple-700">
          Our Herbal Wellness Programs
        </h3>
        <p className="text-purple-700 font-light">
          Whether you’re a beginner or an experienced herbalist, our wide range
          of courses has something for everyone.
        </p>

        <button className="mt-5 btn bg-purple-800 text-purple-200 flex items-center gap-2 justify-center">
          <span>View Programs</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-square-arrow-out-up-right"
          >
            <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
            <path d="m21 3-9 9" />
            <path d="M15 3h6v6" />
          </svg>
        </button>
      </article>
    </section>
  );
};
export default CallToAction;
