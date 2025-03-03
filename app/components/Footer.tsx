import CallToAction from './CallToAction';
import Container from './Container';

const Footer = () => {
  return (
    <section className="relative bg-purple-100">
      <div className="-mb-60">
        <Container>
          <CallToAction />
        </Container>
      </div>

      <footer className="p-5 bg-purple-900">
        <Container>
          <div className="min-h-[40rem]"></div>
        </Container>
      </footer>
    </section>
  );
};
export default Footer;
