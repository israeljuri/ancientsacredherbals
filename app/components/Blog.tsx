import Container from './Container';

const Blog = () => {
  return (
    <section className="bg-purple-100">
      <Container>
        <div className="py-20 min-h-[30rem]">
          <article className="text-center font-light">
            <h3 className="text-5xl text-purple-700">Blog posts</h3>
          </article>

          <div className=""></div>
        </div>
      </Container>
    </section>
  );
};

export default Blog;
