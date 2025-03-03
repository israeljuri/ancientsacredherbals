import Container from './Container';

const MoreThanMedicine = () => {
  return (
    <section className="">
      <Container>
        <section className="bg-white border border-gray-200 rounded-xl px-8 md:px-20 py-20">
          <article className="grid grid-cols-1 gap-10 md:gap-10 md:grid-cols-[min-content_min-content_2fr] items-center justify-center text-center md:text-left">
            <h3 className="text-5xl md:text-6xl font-light w-full md:max-w-[10ch] text-purple-700">
              More than medicine
            </h3>

            <div className="h-[1px] md:h-full w-full md:w-[1px] bg-gray-200"></div>

            <p className="font-light text-black">
              Here, we recognize that plants are not merely physical substances
              to be catalogued and consumed – they are teachers, allies, and
              bridges between worlds. Each herb carries not only its chemical
              constituents but also the wisdom of millions of years of
              evolution, the memory of earth&apos;s ancient stories, and the
              potential to awaken deeper levels of healing and consciousness
              within us.
            </p>
          </article>
        </section>
      </Container>
    </section>
  );
};

export default MoreThanMedicine;
