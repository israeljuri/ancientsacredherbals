import Container from './Container';

const Quotes = () => {
  return (
    <section className="bg-purple-100 text-purple-900 px-0 py-16 md:px-20 ">
      <Container>
        <article className="flex flex-col items-center justify-center text-center gap-8 px-0 md:px-26">
          <h1 className="text-lg leading-7 md:text-2xl md:leading-9 font-light">
            In the sacred dance of leaves and roots, ancient wisdom whispers
            through time. Each herb carries the memory of our ancestors, a
            healing symphony that nature perfectly designed. Through these gifts
            of the Earth, we reconnect with the profound knowledge that has
            sustained humanity for millennia. Let the ancient ways guide your
            journey to wellness, for in their simplicity lies the deepest
            healing.
          </h1>

          <span className="font-light text-lg text-purple-900">
            &mdash; Sacred Herbalism Traditions
          </span>
        </article>
      </Container>
    </section>
  );
};

export default Quotes;
