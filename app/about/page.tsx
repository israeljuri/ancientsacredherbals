import Container from '../components/Container';

const page = () => {
  return (
    <main className="bg-purple-100">
      <header className="flex items-center justify-center flex-col gap-4 text-purple-700 font-light pt-20 md:pt-20 text-center px-2">
        <h1 className="text-xl md:text-xl capitalize">
          Welcome to Ancient Sacred Herbals
        </h1>
        <span className="text-5xl capitalize font-light">
          The call to the green path
        </span>
      </header>

      <div className="pb-10 pt-10">
        <Container>
          <div className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
              <div className="rounded-xl h-full w-full overflow-hidden">
                <video
                  src="/videos/about.mp4"
                  autoPlay
                  // controls
                  muted
                  loop
                  className="w-full h-full object-cover"
                ></video>
              </div>

              <section className="flex flex-col text-purple-800 items-start gap-8 font-light leading-8 rounded-xl text-lg">
                <p>
                  For over three decades, we have witnessed the profound
                  transformation of herbal medicine, bridging ancient wisdom
                  with modern healing needs.
                </p>

                <p>
                  {' '}
                  At Ancient Sacred Herbals, we recognize that traditional
                  herbal knowledge forms the foundation of much of our current
                  understanding, even as scientific research continues to
                  validate what ancient healers knew through careful observation
                  and practice.
                </p>

                <p>
                  At Ancient Sacred Herbals our approach uniquely integrates the
                  spiritual traditions, folklore, and empirical evidence of
                  herbal medicine with contemporary scientific research.
                </p>

                <p>
                  Rather than focusing solely on either traditional uses or
                  pharmacological properties, we weave together these
                  complementary perspectives to provide a complete understanding
                  of each plant’s healing potential.{' '}
                </p>
              </section>
            </div>

            <div className="mx-auto max-w-[50rem]">
              <div className="grid grid-cols-1  gap-8 py-10">
                <div className="rounded-xl h-[25rem] w-full overflow-hidden">
                  <video
                    src="/videos/global.mp4"
                    autoPlay
                    // controls
                    muted
                    loop
                    className="w-full h-full object-cover"
                  ></video>
                </div>
                <section className="bg-purple-50 flex flex-col items-start gap-8 font-light border border-purple-100 md:p-10 p-8 leading-8 rounded-xl text-lg text-purple-800">
                  <h4 className="text-5xl text-purple-600">
                    Our Global Perspective
                  </h4>

                  <p>
                    Because we at Ancient Sacred Herbals understand that a
                    global overview of the traditional history of herbal
                    medicine use puts the development of different herbal
                    traditions from earliest origins to the present day into
                    perspective.
                  </p>

                  <p>
                    This website is complemented with features on herbal
                    medicine in Europe, India, China, Africa, Australia,
                    Americas, let say everywhere on this planet providing a
                    rounded picture of herbal medicine worldwide.
                  </p>

                  <p>
                    Herbal medicine is nothing if not practical in its approach,
                    and Ancient Sacred Herbals has a detailed self-help section
                    with advice on preparing and using herbal medicines to help
                    support a range of common health problems.
                  </p>

                  <p>
                    If more people come to appreciate the immense richness of
                    the world of herbal medicine and are able to benefit from
                    the curative properties of medicinal herbs, Ancient Sacred
                    Herbals will have achieved its Goals!
                  </p>
                </section>
              </div>

              <div className="grid grid-cols-1  gap-8 py-10 pt-12">
                <div className="rounded-xl h-[25rem] w-full overflow-hidden">
                  <video
                    src="/videos/focus.mp4"
                    autoPlay
                    // controls
                    muted
                    loop
                    className="w-full h-full object-cover"
                  ></video>
                </div>
                <section className="bg-purple-50 flex flex-col items-start gap-8 font-light border border-purple-100 md:p-10 p-8 leading-8 rounded-xl text-lg text-purple-800">
                  <div className="grid gap-2">
                    <span className="text-5xl text-purple-600">Our Focus</span>
                  </div>

                  <p>
                    Most Websites on herbal medicine have tended to focus either
                    on the traditional and folkloric use of plants or on their
                    active constituents and pharmacology.
                  </p>

                  <p>
                    This website is based on ancient history and the
                    understanding of how to use Herbal Medicine, which features
                    hundreds of medicinal plants that aim to cover all aspects
                    of herbalism.
                  </p>

                  <p>
                    Ancient Sacred Herbalism discusses each plant’s history,
                    traditions, and folklore, and explains in simple terms what
                    is known from scientific research about its active
                    constituents, actions, and potential old and new uses.
                  </p>

                  <p>
                    It is easy when concentrating on the scientific aspect of
                    herbal medicine to forget that much, in some cases all, that
                    we currently know about a particular plant result from its
                    ancient traditional use.
                  </p>

                  <p>
                    Moreover, even when a plant has been well researched, herbal
                    medicines are so complex and variable that what is currently
                    known is rarely definitive, but rather a sound pointer as to
                    how it works.
                  </p>

                  <p>
                    Sometimes the traditional use, insofar as it is based on the
                    experience of ancient herbal practitioners, they provide an
                    insight into how best to use an herb that is missing from
                    scientific knowledge alone. Herbal medicine is, after all,
                    is first spiritual and also both a science and an art.
                  </p>

                  <p>
                    In choosing the plants profiled on this website, the aim has
                    been to select herbs that are commonly used in different
                    parts of the world and are considered to have particular
                    health benefits.
                  </p>

                  <p>
                    On this site we highlight many key medicinal herbs that are
                    readily available in health stores and pharmacies, some
                    examples nettle, alfalfa and dandelion.
                  </p>

                  <p>
                    It also includes herbs that are more commonly known as
                    foods, such as oranges but which, nonetheless, are valuable
                    medicines. Also, this website Ancient Sacred Herbals share
                    information on hundreds of medicinal plants less commonly
                    known but important medicinal herbs, such as Blue Lotus
                    (Nymphaea caerulea) a Sacred Egyptian plant used for
                    meditation and relaxation. It is increasingly rare due to
                    habitat loss.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default page;
