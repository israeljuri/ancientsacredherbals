import Container from './Container';

const MoreThanMedicine = () => {
  return (
    <section className="">
      <Container>
        <section className="bg-white border border-purple-500 rounded-xl px-8 py-10 md:px-20 md:py-20">
          <article className="grid grid-cols-1 gap-10 md:gap-10 md:grid-cols-[min-content_1fr] items-center justify-center text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 h-full">
              <h3 className="text-5xl md:text-5xl font-light text-purple-700">
                More&nbsp;than medicine
              </h3>

              <div className="h-[1px] md:h-full w-full md:w-[1px] bg-purple-200"></div>
            </div>

            <p className="font-light leading-8 text-purple-800">
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
